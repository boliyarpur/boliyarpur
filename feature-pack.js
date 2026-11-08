/* Boliyapur free feature pack: sharing, print, dark mode, voice search, map and gallery lightbox */
(function(){
"use strict";
var CONTACT_WA="8801605150864";
function el(tag,attrs,html){var node=document.createElement(tag);Object.keys(attrs||{}).forEach(function(k){if(k==="class")node.className=attrs[k];else node.setAttribute(k,attrs[k]);});if(html!==undefined)node.innerHTML=html;return node;}
function safeStoreGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function safeStoreSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function initTools(){
 var dock=el("div",{class:"bp-tools","aria-label":"দ্রুত সেবা"});
 var share=el("button",{class:"bp-tool",type:"button"},"↗ ওয়েবসাইট শেয়ার");
 var print=el("button",{class:"bp-tool bp-tool-secondary",type:"button"},"▤ প্রিন্ট / PDF");
 var dark=el("button",{class:"bp-tool bp-tool-secondary",type:"button"},"◐ ডার্ক মোড");
 var wa=el("a",{class:"bp-tool",href:"https://wa.me/"+CONTACT_WA+"?text="+encodeURIComponent("আসসালামু আলাইকুম, বলিয়াপুর কমিউনিটি ওয়েবসাইট থেকে যোগাযোগ করছি।"),target:"_blank",rel:"noopener"},"☏ WhatsApp");
 var call=el("a",{class:"bp-tool bp-tool-secondary",href:"tel:01605150864"},"📞 কল করুন");
 var top=el("button",{class:"bp-tool bp-tool-secondary",type:"button"},"↑ উপরে");
 dock.append(share,print,dark,wa,call,top);
 top.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});document.body.appendChild(dock);
 if(safeStoreGet("bp-dark-mode")==="on")document.body.classList.add("bp-dark");
 function updateDark(){var on=document.body.classList.toggle("bp-dark");safeStoreSet("bp-dark-mode",on?"on":"off");dark.textContent=on?"☀️ লাইট মোড":"◐ ডার্ক মোড";}
 dark.addEventListener("click",updateDark);
 print.addEventListener("click",function(){window.print();});
 share.addEventListener("click",async function(){
  var data={title:"বলিয়াপুর | Boliyapur Community",text:"বলিয়াপুর ও আশপাশের এলাকার তথ্য, সেবা ও কমিউনিটি পোস্ট দেখুন।",url:location.href};
  if(navigator.share){try{await navigator.share(data);}catch(e){}}
  else if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(location.href).then(function(){share.textContent="✓ লিংক কপি হয়েছে";setTimeout(function(){share.textContent="↗ ওয়েবসাইট শেয়ার";},2200);}).catch(function(){window.prompt("ওয়েবসাইটের লিংক কপি করুন:",location.href);});}
  else window.prompt("ওয়েবসাইটের লিংক কপি করুন:",location.href);
 });
}
function initVoiceSearch(){
 var input=document.getElementById("searchInput");if(!input)return;
 var bar=input.parentElement;if(!bar)return;
 var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 var button=el("button",{class:"bp-voice",type:"button","aria-label":"কথা বলে সার্চ করুন"},"🎙️ বলুন");
 bar.appendChild(button);
 if(!SR){button.disabled=true;button.title="এই ব্রাউজারে ভয়েস সার্চ নেই";button.textContent="🎙️ ভয়েস সার্চ নেই";return;}
 var recognition=new SR();recognition.lang="bn-BD";recognition.interimResults=false;recognition.maxAlternatives=1;
 button.addEventListener("click",function(){try{recognition.start();button.classList.add("listening");button.textContent="শুনছি…";}catch(e){button.textContent="আবার চেষ্টা করুন";}});
 recognition.onresult=function(event){var transcript=event.results[0][0].transcript;input.value=transcript;input.dispatchEvent(new Event("input",{bubbles:true}));button.textContent="✓ "+transcript;};
 recognition.onerror=function(){button.textContent="আবার বলুন";};
 recognition.onend=function(){button.classList.remove("listening");if(button.textContent==="শুনছি…")button.textContent="🎙️ বলুন";};
}
function initMap(){
 if(document.getElementById("bp-map"))return;
 var anchor=document.getElementById("nature")||document.getElementById("gallery");if(!anchor)return;
 var section=el("section",{id:"bp-map",class:"bp-map-section"});
 section.innerHTML='<div class="bp-map-wrap"><div class="section-head"><div><h2>বলিয়াপুর ও আশপাশের মানচিত্র</h2><p>এলাকার অবস্থান খুঁজে দেখুন এবং Google Maps-এ দিকনির্দেশনা নিন</p></div></div><iframe class="bp-map-frame" title="Boliyapur Savar map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Boliyapur%2C%20Bongaon%2C%20Savar%2C%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe><p class="bp-map-note">মানচিত্রটি এলাকার নামভিত্তিক সাধারণ অনুসন্ধান; এটি কোনো নির্দিষ্ট প্রতিষ্ঠানের যাচাইকৃত সীমানা বা ঠিকানা নির্দেশ করে না।</p></div>';
 anchor.parentNode.insertBefore(section,anchor.nextSibling);
}
function initLightbox(){
 var overlay=el("div",{class:"bp-lightbox","role":"dialog","aria-modal":"true","aria-label":"ছবি বড় করে দেখুন"});
 overlay.innerHTML='<button type="button" class="bp-lightbox-close" aria-label="বন্ধ করুন">×</button><img alt=""><div class="bp-lightbox-caption"></div>';
 document.body.appendChild(overlay);
 var image=overlay.querySelector("img"),caption=overlay.querySelector(".bp-lightbox-caption");
 function close(){overlay.classList.remove("open");image.src="";document.body.style.overflow="";}
 overlay.querySelector("button").addEventListener("click",close);
 overlay.addEventListener("click",function(e){if(e.target===overlay)close();});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")close();});
 document.addEventListener("click",function(e){
  var img=e.target.closest("#galleryGrid img,.nature-story-image img,.nature-cover img");
  if(!img||!img.src||img.style.display==="none")return;
  e.preventDefault();image.src=img.src;image.alt=img.alt||"Boliyapur Community photo";caption.textContent=img.alt||"বলিয়াপুর কমিউনিটি গ্যালারি";overlay.classList.add("open");document.body.style.overflow="hidden";
 });
}
function init(){
 initTools();initVoiceSearch();initMap();initLightbox();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();