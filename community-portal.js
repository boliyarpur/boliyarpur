import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";
import { firebaseConfig } from "./firebase-config.js";

const mount = document.createElement("section");
mount.id = "citizen-portal";
mount.className = "citizen-section";
mount.innerHTML = `
 <div class="citizen-wrap">
  <div class="citizen-head"><h2>নাগরিক পোর্টাল — আমাদের গল্প, আমাদের গর্ব</h2><p>আপনার এলাকার ছবি, ভিডিও, স্মৃতি ও ভালো উদ্যোগ জমা দিন। Admin অনুমোদনের পর সবার জন্য প্রকাশিত হবে।</p></div>
  <div class="citizen-grid">
   <div class="citizen-panel">
    <h3>আপনার পোস্ট জমা দিন</h3>
    <form class="citizen-form" id="citizenForm">
     <label for="citizenName">আপনার নাম *</label><input id="citizenName" maxlength="60" required placeholder="আপনার নাম">
     <label for="citizenArea">এলাকা / গ্রাম</label><input id="citizenArea" maxlength="80" placeholder="যেমন: বলিয়াপুর">
     <label for="citizenCategory">পোস্টের ধরন *</label>
     <select id="citizenCategory" required><option value="">নির্বাচন করুন</option><option>এলাকার গল্প</option><option>আমাদের গর্ব / কৃতী ব্যক্তি</option><option>দর্শনীয় স্থান</option><option>ইতিহাস ও ঐতিহ্য</option><option>খাবার ও সংস্কৃতি</option><option>ভালো উদ্যোগ</option><option>নাগরিক মতামত</option><option>অন্যান্য</option></select>
     <label for="citizenTitle">পোস্টের শিরোনাম *</label><input id="citizenTitle" maxlength="120" required placeholder="কী বিষয়ে পোস্ট করবেন?">
     <label for="citizenStory">বিস্তারিত লিখুন *</label><textarea id="citizenStory" maxlength="3000" required placeholder="আপনার এলাকার গল্পটি লিখুন..."></textarea>
     <label for="citizenMedia">ছবি অথবা ভিডিও (ঐচ্ছিক)</label><input id="citizenMedia" type="file" accept="image/*,video/mp4,video/webm,video/quicktime">
     <p class="citizen-help">সর্বোচ্চ 100 MB। অন্যের ছবি/ভিডিও অনুমতি ছাড়া দেবেন না।</p>
     <button class="citizen-submit" id="citizenSubmit" type="submit">পোস্ট অনুমোদনের জন্য পাঠান</button>
     <div class="citizen-status" id="citizenStatus" role="status"></div>
    </form>
   </div>
   <div class="citizen-panel">
    <h3>অনুমোদিত নাগরিক পোস্ট</h3>
    <div class="citizen-feed" id="citizenFeed"><div class="citizen-empty">পোস্ট লোড হচ্ছে...</div></div>
   </div>
  </div>
 </div>`;
const contact = document.querySelector("#contact");
if (contact) contact.parentNode.insertBefore(mount, contact);
else document.body.appendChild(mount);

const statusBox = document.getElementById("citizenStatus");
const form = document.getElementById("citizenForm");
const submit = document.getElementById("citizenSubmit");
const feed = document.getElementById("citizenFeed");
function showStatus(message, error=false){statusBox.textContent=message;statusBox.style.display="block";statusBox.classList.toggle("error",error);}
function readyConfig(){
 return firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("PASTE_")
 && firebaseConfig.projectId && !firebaseConfig.projectId.includes("PASTE_");
}
if(!readyConfig()){
 showStatus("Firebase এখনো সংযুক্ত হয়নি। Firebase Project তৈরি করে firebase-config.js ফাইলে Web App-এর তথ্য বসানোর পর এই ফর্ম চালু হবে।",true);
 feed.innerHTML='<div class="citizen-empty">Firebase সংযোগ সম্পন্ন হলে অনুমোদিত পোস্ট এখানে দেখা যাবে।</div>';
 form.addEventListener("submit",e=>{e.preventDefault();showStatus("আগে Firebase সেটআপ সম্পন্ন করতে হবে।",true);});
}else{
 try{
  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app), auth=getAuth(app), storage=getStorage(app);
  signInAnonymously(auth).catch(err=>showStatus("নাগরিক সেশন চালু হয়নি: "+err.message,true));
  const approvedQuery=query(collection(db,"communityPosts"),where("status","==","approved"),orderBy("createdAt","desc"));
  onSnapshot(approvedQuery,snap=>{
   if(snap.empty){feed.innerHTML='<div class="citizen-empty">এখনো কোনো অনুমোদিত পোস্ট নেই। আপনিই প্রথম পোস্ট জমা দিতে পারেন!</div>';return;}
   feed.innerHTML=snap.docs.map(doc=>{
    const p=doc.data(), media=p.mediaUrl ? (p.mediaType==="video"
      ? '<video controls preload="metadata" src="'+safeUrl(p.mediaUrl)+'"></video>'
      : '<img loading="lazy" src="'+safeUrl(p.mediaUrl)+'" alt="নাগরিকের জমা দেওয়া ছবি">') : "";
    return '<article class="citizen-post">'+media+'<div class="citizen-post-body"><div class="citizen-post-meta">'+escapeHtml(p.category||"নাগরিক পোস্ট")+' · '+escapeHtml(p.area||"বলিয়াপুর")+' · '+escapeHtml(p.authorName||"নাগরিক")+'</div><h4>'+escapeHtml(p.title||"")+'</h4><p>'+escapeHtml(p.story||"")+'</p></div></article>';
   }).join("");
  },err=>{feed.innerHTML='<div class="citizen-empty">পোস্ট লোড করা যায়নি। Firestore Rules পরীক্ষা করুন।</div>';});
  form.addEventListener("submit",async e=>{
   e.preventDefault();submit.disabled=true;submit.textContent="পাঠানো হচ্ছে...";
   try{
    await signInAnonymously(auth).catch(()=>{});
    if(!auth.currentUser) throw new Error("নাগরিক সেশন তৈরি হয়নি। আবার চেষ্টা করুন।");
    const file=document.getElementById("citizenMedia").files[0];
    let mediaUrl="",mediaType="";
    if(file){
     if(file.size>100*1024*1024) throw new Error("ফাইল 100 MB-এর চেয়ে বড়।");
     if(!file.type.startsWith("image/")&&!file.type.startsWith("video/")) throw new Error("শুধু ছবি বা ভিডিও দেওয়া যাবে।");
     mediaType=file.type.startsWith("video/")?"video":"image";
     const safeName=file.name.replace(/[^a-zA-Z0-9._-]/g,"_").slice(-90);
     const fileRef=ref(storage,"community/"+auth.currentUser.uid+"/"+Date.now()+"_"+safeName);
     const task=uploadBytesResumable(fileRef,file,{contentType:file.type});
     await new Promise((resolve,reject)=>{task.on("state_changed",s=>{submit.textContent="মিডিয়া আপলোড "+Math.round(s.bytesTransferred/s.totalBytes*100)+"%";},reject,resolve);});
     mediaUrl=await getDownloadURL(fileRef);
    }
    await addDoc(collection(db,"communityPosts"),{
     uid:auth.currentUser.uid,authorName:document.getElementById("citizenName").value.trim(),
     area:document.getElementById("citizenArea").value.trim()||"বলিয়াপুর",
     category:document.getElementById("citizenCategory").value,
     title:document.getElementById("citizenTitle").value.trim(),
     story:document.getElementById("citizenStory").value.trim(),
     mediaUrl,mediaType,status:"pending",createdAt:serverTimestamp()
    });
    form.reset();showStatus("ধন্যবাদ! আপনার পোস্ট Admin-এর অনুমোদনের অপেক্ষায় আছে। অনুমোদিত হলেই ওয়েবসাইটে দেখা যাবে।");
   }catch(err){showStatus("পোস্ট পাঠানো যায়নি: "+(err.message||"আবার চেষ্টা করুন।"),true);}
   finally{submit.disabled=false;submit.textContent="পোস্ট অনুমোদনের জন্য পাঠান";}
  });
 }catch(err){showStatus("Firebase সংযোগে সমস্যা: "+err.message,true);}
}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function safeUrl(s){try{const u=new URL(s);return u.protocol==="https:"?u.href:"";}catch{return "";}}
