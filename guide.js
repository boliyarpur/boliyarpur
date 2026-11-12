(()=>{"use strict";
if(document.getElementById("bct-guide"))return;
const root=document.createElement("div");root.id="bct-guide";
root.innerHTML=`
<button id="bct-launch" aria-label="ভার্চুয়াল গাইড খুলুন"><span class="bct-mini">👩🏻</span><span>গাইড আপুর সাথে কথা বলুন</span></button>
<section id="bct-panel" aria-label="বলিয়াপুর ভার্চুয়াল গাইড">
 <header class="bct-head"><div><strong>মায়া — আপনার ওয়েবসাইট গাইড</strong><small>আপনার পাশে আছি, কী খুঁজছেন বলুন</small></div><button class="bct-close" id="bct-close" aria-label="বন্ধ করুন">×</button></header>
 <div class="bct-stage">
  <svg class="bct-person" viewBox="0 0 120 180" role="img" aria-label="হাসিমুখে দাঁড়ানো গাইড আপু">
   <ellipse cx="60" cy="169" rx="31" ry="6" fill="#9fc9e7" opacity=".45"/>
   <g class="legL"><path d="M49 119 L47 151 Q43 161 49 163 L60 163 L61 156 L58 120Z" fill="#315f91"/><path d="M48 157 Q38 160 39 167 Q48 172 61 167 L61 161Z" fill="#243e59"/></g>
   <g class="legR"><path d="M67 119 L70 151 Q68 160 74 163 L84 162 L83 155 L78 120Z" fill="#315f91"/><path d="M72 158 Q64 162 67 168 Q76 172 87 166 L84 160Z" fill="#243e59"/></g>
   <path d="M39 69 Q60 58 82 70 L86 126 Q61 138 35 126Z" fill="#65a8df"/>
   <path d="M42 79 Q60 91 81 78 L78 126 Q59 136 39 126Z" fill="#fff" opacity=".92"/>
   <path d="M48 89 Q60 98 73 89" fill="none" stroke="#4a91c5" stroke-width="2"/>
   <g class="armL"><path d="M42 76 Q31 86 25 101 L16 91" fill="none" stroke="#f1c6a7" stroke-width="11" stroke-linecap="round"/><path d="M16 91 L10 82" stroke="#f1c6a7" stroke-width="8" stroke-linecap="round"/></g>
   <g class="armR"><path d="M79 76 Q91 83 94 94 L106 80" fill="none" stroke="#f1c6a7" stroke-width="11" stroke-linecap="round"/><path d="M106 80 L115 77" stroke="#f1c6a7" stroke-width="7" stroke-linecap="round"/></g>
   <path d="M42 42 Q39 17 61 17 Q84 18 82 46 L78 70 Q60 84 42 67Z" fill="#26394c"/>
   <ellipse cx="61" cy="48" rx="20" ry="25" fill="#f3c9aa"/>
   <path d="M41 47 Q37 22 59 18 Q84 17 83 43 Q74 34 67 31 Q58 41 41 39Z" fill="#26394c"/>
   <path d="M42 47 Q39 65 47 73 Q35 65 36 49Z M79 43 Q89 58 78 74 L75 63Z" fill="#26394c"/>
   <ellipse cx="54" cy="49" rx="2" ry="2.6" fill="#26394c"/><ellipse cx="68" cy="49" rx="2" ry="2.6" fill="#26394c"/>
   <path d="M55 60 Q61 66 68 60" fill="none" stroke="#b95e64" stroke-width="2" stroke-linecap="round"/>
   <circle cx="47" cy="57" r="3" fill="#e99a91" opacity=".55"/><circle cx="75" cy="57" r="3" fill="#e99a91" opacity=".55"/>
   <path d="M42 77 Q60 68 80 77" fill="none" stroke="#fff" stroke-width="3"/>
   <circle cx="61" cy="80" r="4" fill="#f4cf70"/>
  </svg>
  <div class="bct-speech" id="bct-speech">আসসালামু আলাইকুম! আমি মায়া। হাত নেড়ে তোমাকে ওয়েবসাইট ঘুরিয়ে দেখাবো। কী দেখতে চাও?</div>
 </div>
 <div class="bct-body">
  <div class="bct-answer" id="bct-answer">নিচের বাটনে চাপ দাও অথবা মাইক্রোফোনে কথা বলো।</div>
  <div class="bct-quick">
   <button data-ask="ওয়েবসাইট ঘুরিয়ে দেখাও">🧭 ওয়েবসাইট ঘুরে দেখি</button>
   <button data-ask="এখানে কী কী সেবা আছে">🏥 কী কী সেবা আছে?</button>
   <button data-ask="স্কুল কোথায় পাব">🎓 স্কুল ও শিক্ষা</button>
   <button data-ask="গেম কোথায় পাব">🎮 গেম খেলতে চাই</button>
   <button data-ask="জরুরি সেবা কোথায়">🚨 জরুরি সেবা</button>
   <button data-ask="ছবি গ্যালারি দেখাও">🖼️ ছবি ও গ্যালারি</button>
  </div>
  <div class="bct-actions"><button class="primary" id="bct-listen">🎙️ কথা বলুন</button><button id="bct-repeat">🔊 আবার শোনাও</button></div>
  <form class="bct-inputrow" id="bct-form"><input id="bct-input" placeholder="এখানে লিখেও বলতে পারো..." autocomplete="off"><button>পাঠাও</button></form>
 </div>
 <div class="bct-foot">ভয়েস ব্রাউজারের বাংলা কণ্ঠের ওপর নির্ভরশীল। মাইক্রোফোনের অনুমতি চাইতে পারে।</div>
</section>`;
document.body.appendChild(root);
const $=id=>document.getElementById(id), panel=$("bct-panel"), speech=$("bct-speech"), answer=$("bct-answer");
let lastText="আসসালামু আলাইকুম! আমি মায়া। বলো, কী খুঁজছো?",recognition=null;
const routes=[
 {keys:["হোম","শুরু","home","ঘুরিয়ে","ওয়েবসাইট"],href:"#home",label:"হোম পেজ",desc:"এখানে বলিয়াপুরের পরিচিতি, খবর ও গুরুত্বপূর্ণ তথ্য আছে।"},
 {keys:["গ্রাম","পরিচিতি","ইতিহাস"],href:"./village.html",label:"গ্রামের পরিচিতি",desc:"গ্রাম সম্পর্কে বিস্তারিত জানতে গ্রামের পরিচিতি পেজে যাও।"},
 {keys:["আকর্ষণ","দর্শন","ঘুরতে","জায়গা"],href:"./attractions.html",label:"দর্শনীয় স্থান",desc:"বলিয়াপুর ও আশপাশের আকর্ষণীয় জায়গা এখানে দেখো।"},
 {keys:["স্কুল","কলেজ","মাদ্রাসা","শিক্ষা"],href:"./directory.html",label:"প্রতিষ্ঠান ডিরেক্টরি",desc:"শিক্ষা প্রতিষ্ঠানসহ স্থানীয় প্রতিষ্ঠান খুঁজতে ডিরেক্টরি খোলো।"},
 {keys:["হাসপাতাল","ডাক্তার","স্বাস্থ্য","ফার্মেসি","সেবা"],href:"#community-services",label:"স্থানীয় সেবা",desc:"স্থানীয় সেবা ও প্রয়োজনীয় যোগাযোগের তথ্য এই অংশে আছে।"},
 {keys:["ছবি","গ্যালারি","ভিডিও"],href:"./gallery.html",label:"ছবি ও গ্যালারি",desc:"এখানে এলাকার ছবি ও ভিডিও দেখতে পারো।"},
 {keys:["জমা","পোস্ট","ছবি পাঠা","তথ্য দাও"],href:"./contribute.html",label:"তথ্য জমা",desc:"তোমার ছবি, খবর বা তথ্য ওয়েবসাইটে প্রকাশের জন্য জমা দিতে পারো।"},
 {keys:["গেম","খেলা","চেস","দাবা"],href:"./games.html",label:"গেম জোন",desc:"এখানে দাবা, গাড়ির গেমসহ অনলাইন গেম খেলতে পারো।"},
 {keys:["অ্যাডমিন","এডমিন","অনুমোদন"],href:"./admin.html",label:"অ্যাডমিন ড্যাশবোর্ড",desc:"এটি প্রশাসনিক ব্যবহারের পেজ; অনুমোদিত অ্যাডমিনের জন্য।"},
 {keys:["যোগাযোগ","ফোন","হোয়াটসঅ্যাপ","হোয়াটসঅ্যাপ"],href:"#contact",label:"যোগাযোগ",desc:"যোগাযোগ অংশে অফিসিয়াল যোগাযোগের তথ্য আছে।"}
];
function speak(text){lastText=text; speech.textContent=text;answer.textContent=text;
 if(!("speechSynthesis"in window))return;
 window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="bn-BD";
 const voices=window.speechSynthesis.getVoices();const v=voices.find(x=>/^bn(-|_)/i.test(x.lang))||voices.find(x=>/bangla|bengali/i.test(x.name));if(v)u.voice=v;
 u.rate=.94;u.pitch=1.08;window.speechSynthesis.speak(u);
}
function go(href){if(href.startsWith("#")){const el=document.querySelector(href);if(el){el.scrollIntoView({behavior:"smooth",block:"start"});return true;}location.href="./index.html"+href;return true;}location.href=href;return true;}
function respond(raw){const q=String(raw||"").toLowerCase().trim();if(!q)return;
 if(q.includes("ঘুরিয়ে")||q.includes("ঘুরে দেখি")){speak("চলো, আমি তোমাকে ওয়েবসাইট ঘুরিয়ে দেখাই। প্রথমে হোম পেজ, তারপর পরিচিতি, সেবা, গ্যালারি আর গেম দেখাবো।");go("#home");setTimeout(()=>{const e=document.querySelector("#about");if(e)e.scrollIntoView({behavior:"smooth"});},2600);return;}
 const r=routes.find(x=>x.keys.some(k=>q.includes(k)));
 if(r){speak("চলো, "+r.label+" দেখাই। "+r.desc);setTimeout(()=>go(r.href),650);return;}
 if(q.includes("কীভাবে")||q.includes("কিভাবে")||q.includes("কী করতে")){speak("তুমি উপরের তিন ডট মেনু থেকে ওয়েবসাইটের সব বিভাগ পাবে। স্থানীয় তথ্য খুঁজতে ডিরেক্টরি, ছবি দেখতে গ্যালারি, আর খেলতে গেম জোনে যাও।");return;}
 if(q.includes("ধন্যবাদ")){speak("তোমাকে স্বাগতম! আর কিছু জানতে চাইলে আমাকে ডাকবে।");return;}
 speak("আমি তোমাকে হোম, গ্রামের পরিচিতি, দর্শনীয় স্থান, ডিরেক্টরি, স্থানীয় সেবা, গ্যালারি, তথ্য জমা, গেম এবং যোগাযোগের জায়গা দেখাতে পারি। কোনটি দেখতে চাও?");
}
$("bct-launch").addEventListener("click",()=>{root.classList.toggle("open");if(root.classList.contains("open"))speak("হ্যালো! আমি মায়া। তোমাকে কীভাবে সাহায্য করতে পারি?");});
$("bct-close").addEventListener("click",()=>{root.classList.remove("open");if("speechSynthesis"in window)window.speechSynthesis.cancel();});
root.querySelectorAll("[data-ask]").forEach(b=>b.addEventListener("click",()=>respond(b.dataset.ask)));
$("bct-form").addEventListener("submit",e=>{e.preventDefault();const v=$("bct-input").value;$("bct-input").value="";respond(v);});
$("bct-repeat").addEventListener("click",()=>speak(lastText));
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
$("bct-listen").addEventListener("click",()=>{
 if(!SR){speak("দুঃখিত, এই ব্রাউজারে কথা শোনার সুবিধা নেই। Chrome ব্রাউজারে চেষ্টা করো, অথবা লিখে পাঠাও।");return;}
 try{if(recognition)recognition.stop();recognition=new SR();recognition.lang="bn-BD";recognition.interimResults=false;recognition.maxAlternatives=1;
 recognition.onstart=()=>{$("bct-listen").textContent="🎙️ শুনছি...";answer.textContent="তোমার কথা শুনছি, বলো...";};
 recognition.onresult=e=>respond(e.results[0][0].transcript);
 recognition.onerror=e=>speak(e.error==="not-allowed"?"মাইক্রোফোনের অনুমতি দাও, তারপর আবার চেষ্টা করো।":"তোমার কথা শুনতে পারিনি। আবার বলো অথবা লিখে পাঠাও।");
 recognition.onend=()=>{$("bct-listen").textContent="🎙️ কথা বলুন";};recognition.start();
 }catch(e){speak("মাইক্রোফোন চালু করা গেল না। ব্রাউজারের অনুমতি পরীক্ষা করো।");}
});
if("speechSynthesis"in window)window.speechSynthesis.onvoiceschanged=()=>{};
})();