import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const mount=document.createElement("section");
mount.id="citizen-portal";mount.className="citizen-section";
mount.innerHTML=`
 <div class="citizen-wrap">
  <div class="citizen-head"><h2>নাগরিক পোর্টাল — আমাদের গল্প, আমাদের গর্ব</h2><p>আপনার এলাকার গল্প, স্মৃতি, ঐতিহ্য, ভালো উদ্যোগ ও মতামত লিখে জমা দিন। Admin অনুমোদনের পর সবার জন্য প্রকাশিত হবে।</p></div>
  <div class="citizen-grid">
   <div class="citizen-panel"><h3>আপনার পোস্ট জমা দিন</h3>
    <form class="citizen-form" id="citizenForm">
     <label for="citizenName">আপনার নাম *</label><input id="citizenName" maxlength="60" required placeholder="আপনার নাম">
     <label for="citizenArea">এলাকা / গ্রাম</label><input id="citizenArea" maxlength="80" placeholder="যেমন: বলিয়াপুর">
     <label for="citizenCategory">পোস্টের ধরন *</label><select id="citizenCategory" required><option value="">নির্বাচন করুন</option><option>এলাকার গল্প</option><option>আমাদের গর্ব / কৃতী ব্যক্তি</option><option>দর্শনীয় স্থান</option><option>ইতিহাস ও ঐতিহ্য</option><option>খাবার ও সংস্কৃতি</option><option>ভালো উদ্যোগ</option><option>নাগরিক মতামত</option><option>অন্যান্য</option></select>
     <label for="citizenTitle">পোস্টের শিরোনাম *</label><input id="citizenTitle" maxlength="120" required placeholder="কী বিষয়ে পোস্ট করবেন?">
     <label for="citizenStory">বিস্তারিত লিখুন *</label><textarea id="citizenStory" maxlength="3000" required placeholder="আপনার এলাকার গল্পটি লিখুন..."></textarea>
     <p class="citizen-help">ফ্রি Firebase Spark সংস্করণে আপাতত লেখা ও তথ্য জমা দেওয়া যাবে; সরাসরি ছবি/ভিডিও আপলোড রাখা হয়নি।</p>
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
 try{
  const app=initializeApp(firebaseConfig),db=getFirestore(app),auth=getAuth(app);
  const session=signInAnonymously(auth);
  const approved=query(collection(db,"communityPosts"),where("status","==","approved"));
  onSnapshot(approved,snap=>{
   const docs=snap.docs.sort((a,b)=>(b.data().createdAt?.seconds||0)-(a.data().createdAt?.seconds||0));
   if(!docs.length){feed.innerHTML='<div class="citizen-empty">এখনো কোনো অনুমোদিত পোস্ট নেই। আপনিই প্রথম পোস্ট জমা দিতে পারেন!</div>';return;}
   feed.innerHTML=docs.map(d=>{const p=d.data();return '<article class="citizen-post"><div class="citizen-post-body"><div class="citizen-post-meta">'+esc(p.category)+' · '+esc(p.area||"বলিয়াপুর")+' · '+esc(p.authorName)+'</div><h4>'+esc(p.title)+'</h4><p>'+esc(p.story)+'</p></div></article>';}).join("");
  },err=>{feed.innerHTML='<div class="citizen-empty">পোস্ট লোড করা যায়নি। Firebase Rules ও Database পরীক্ষা করুন।</div>';});
  form.addEventListener("submit",async e=>{
   e.preventDefault();submit.disabled=true;submit.textContent="পাঠানো হচ্ছে...";
   try{
    await session;
    if(!auth.currentUser)throw new Error("নাগরিক সেশন তৈরি হয়নি। আবার চেষ্টা করুন।");
    await addDoc(collection(db,"communityPosts"),{
     uid:auth.currentUser.uid,authorName:$("citizenName").value.trim(),area:$("citizenArea").value.trim()||"বলিয়াপুর",
     category:$("citizenCategory").value,title:$("citizenTitle").value.trim(),story:$("citizenStory").value.trim(),
     status:"pending",createdAt:serverTimestamp()
    });
    form.reset();status("ধন্যবাদ! আপনার পোস্ট Admin-এর অনুমোদনের অপেক্ষায় আছে। অনুমোদিত হলেই ওয়েবসাইটে দেখা যাবে।");
   }catch(err){status("পোস্ট পাঠানো যায়নি: "+(err.message||"আবার চেষ্টা করুন।"),true);}
   finally{submit.disabled=false;submit.textContent="পোস্ট অনুমোদনের জন্য পাঠান";}
  });
 }catch(err){status("Firebase সংযোগে সমস্যা: "+err.message,true);}
}
