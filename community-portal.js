import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, doc, updateDoc, query, where, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";
import { firebaseConfig } from "./firebase-config.js";

const mount=document.createElement("section");
mount.id="citizen-portal";mount.className="citizen-section";
mount.innerHTML=`
 <div class="citizen-wrap">
  <div class="citizen-head"><h2>নাগরিক পোর্টাল — আমাদের গল্প, আমাদের গর্ব</h2><p>আপনার এলাকার ছবি, ভিডিও, স্মৃতি ও ভালো উদ্যোগ জমা দিন। Admin অনুমোদনের পর সবার জন্য প্রকাশিত হবে।</p></div>
  <div class="citizen-grid">
   <div class="citizen-panel"><h3>আপনার পোস্ট জমা দিন</h3>
    <form class="citizen-form" id="citizenForm">
     <label for="citizenName">আপনার নাম *</label><input id="citizenName" maxlength="60" required placeholder="আপনার নাম">
     <label for="citizenArea">এলাকা / গ্রাম</label><input id="citizenArea" maxlength="80" placeholder="যেমন: বলিয়াপুর">
     <label for="citizenCategory">পোস্টের ধরন *</label><select id="citizenCategory" required><option value="">নির্বাচন করুন</option><option>এলাকার গল্প</option><option>আমাদের গর্ব / কৃতী ব্যক্তি</option><option>দর্শনীয় স্থান</option><option>ইতিহাস ও ঐতিহ্য</option><option>খাবার ও সংস্কৃতি</option><option>ভালো উদ্যোগ</option><option>নাগরিক মতামত</option><option>অন্যান্য</option></select>
     <label for="citizenTitle">পোস্টের শিরোনাম *</label><input id="citizenTitle" maxlength="120" required placeholder="কী বিষয়ে পোস্ট করবেন?">
     <label for="citizenStory">বিস্তারিত লিখুন *</label><textarea id="citizenStory" maxlength="3000" required placeholder="আপনার এলাকার গল্পটি লিখুন..."></textarea>
     <label for="citizenMedia">ছবি অথবা ভিডিও (ঐচ্ছিক)</label><input id="citizenMedia" type="file" accept="image/*,video/mp4,video/webm,video/quicktime">
     <p class="citizen-help">সর্বোচ্চ 100 MB। অন্যের ছবি/ভিডিও অনুমতি ছাড়া দেবেন না।</p>
     <button class="citizen-submit" id="citizenSubmit" type="submit">পোস্ট অনুমোদনের জন্য পাঠান</button><div class="citizen-status" id="citizenStatus" role="status"></div>
    </form>
   </div>
   <div class="citizen-panel"><h3>অনুমোদিত নাগরিক পোস্ট</h3><div class="citizen-feed" id="citizenFeed"><div class="citizen-empty">পোস্ট লোড হচ্ছে...</div></div></div>
  </div>
 </div>`;
const contact=document.querySelector("#contact");
if(contact)contact.parentNode.insertBefore(mount,contact);else document.body.appendChild(mount);
const $=id=>document.getElementById(id),form=$("citizenForm"),submit=$("citizenSubmit"),feed=$("citizenFeed"),statusBox=$("citizenStatus");
function status(msg,error=false){statusBox.textContent=msg;statusBox.style.display="block";statusBox.classList.toggle("error",error);}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function validConfig(){return firebaseConfig.apiKey&&!firebaseConfig.apiKey.includes("PASTE_")&&firebaseConfig.projectId&&!firebaseConfig.projectId.includes("PASTE_");}
if(!validConfig()){status("Firebase সংযোগ বাকি। firebase-config.js-এ Firebase Web App-এর সঠিক config বসাতে হবে।",true);feed.innerHTML='<div class="citizen-empty">Firebase সংযুক্ত হলে অনুমোদিত পোস্ট এখানে দেখা যাবে।</div>';}
else{
 const app=initializeApp(firebaseConfig),db=getFirestore(app),auth=getAuth(app);
 const storageEnabled=!!firebaseConfig.storageBucket&&!firebaseConfig.storageBucket.includes("PASTE_");
 const storage=storageEnabled?getStorage(app):null;
 const session=signInAnonymously(auth);
 const approved=query(collection(db,"communityPosts"),where("status","==","approved"));
 onSnapshot(approved,async snap=>{
  const docs=snap.docs.sort((a,b)=>(b.data().createdAt?.seconds||0)-(a.data().createdAt?.seconds||0));
  if(!docs.length){feed.innerHTML='<div class="citizen-empty">এখনো কোনো অনুমোদিত পোস্ট নেই। আপনিই প্রথম পোস্ট জমা দিতে পারেন!</div>';return;}
  const cards=await Promise.all(docs.map(async d=>{
   const p=d.data();let media="";
   if(p.mediaPath){try{const url=await getDownloadURL(ref(storage,p.mediaPath));media=p.mediaType==="video"?'<video controls preload="metadata" src="'+esc(url)+'"></video>':'<img loading="lazy" src="'+esc(url)+'" alt="নাগরিকের জমা দেওয়া ছবি">';}catch{}}
   return '<article class="citizen-post">'+media+'<div class="citizen-post-body"><div class="citizen-post-meta">'+esc(p.category)+' · '+esc(p.area||"বলিয়াপুর")+' · '+esc(p.authorName)+'</div><h4>'+esc(p.title)+'</h4><p>'+esc(p.story)+'</p></div></article>';
  }));
  feed.innerHTML=cards.join("");
 },()=>{feed.innerHTML='<div class="citizen-empty">পোস্ট লোড করা যায়নি। Firestore/Storage Rules পরীক্ষা করুন।</div>';});
 form.addEventListener("submit",async e=>{
  e.preventDefault();submit.disabled=true;submit.textContent="পাঠানো হচ্ছে...";
  let postRef=null;
  try{
   await session; if(!auth.currentUser)throw new Error("নাগরিক সেশন তৈরি হয়নি। আবার চেষ্টা করুন।");
   const file=$("citizenMedia").files[0];
   if(file&&!storage)throw new Error("ছবি/ভিডিও আপলোড চালু করতে Firebase Storage bucket ও Blaze billing প্রয়োজন। আপাতত ফাইল ছাড়া পোস্ট পাঠান।");
   if(file&&file.size>100*1024*1024)throw new Error("ফাইল 100 MB-এর চেয়ে বড়।");
   if(file&&!file.type.startsWith("image/")&&!["video/mp4","video/webm","video/quicktime"].includes(file.type))throw new Error("শুধু ছবি, MP4, WebM বা MOV ভিডিও দেওয়া যাবে।");
   postRef=await addDoc(collection(db,"communityPosts"),{
    uid:auth.currentUser.uid,authorName:$("citizenName").value.trim(),area:$("citizenArea").value.trim()||"বলিয়াপুর",
    category:$("citizenCategory").value,title:$("citizenTitle").value.trim(),story:$("citizenStory").value.trim(),
    status:"pending",createdAt:serverTimestamp()
   });
   if(file){
    const mediaType=file.type.startsWith("video/")?"video":"image";
    const safeName=file.name.replace(/[^a-zA-Z0-9._-]/g,"_").slice(-80);
    const path="community/"+postRef.id+"/"+auth.currentUser.uid+"/"+Date.now()+"_"+safeName;
    const task=uploadBytesResumable(ref(storage,path),file,{contentType:file.type});
    await new Promise((resolve,reject)=>task.on("state_changed",s=>{submit.textContent="মিডিয়া আপলোড "+Math.round(s.bytesTransferred/s.totalBytes*100)+"%";},reject,resolve));
    await updateDoc(postRef,{mediaPath:path,mediaType});
   }
   form.reset();status("ধন্যবাদ! আপনার পোস্ট Admin-এর অনুমোদনের অপেক্ষায় আছে। অনুমোদিত হলেই ওয়েবসাইটে দেখা যাবে।");
  }catch(err){status("পোস্ট পাঠানো যায়নি: "+(err.message||"আবার চেষ্টা করুন।"),true);}
  finally{submit.disabled=false;submit.textContent="পোস্ট অনুমোদনের জন্য পাঠান";}
 });
}
