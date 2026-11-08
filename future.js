/* Boliyapur Community: citizen help desk, sharing and install support */
(function(){
  "use strict";
  const WA="8801605150864";
  const form=document.getElementById("communityRequestForm");
  if(form){
    document.querySelectorAll("[data-request]").forEach(function(card){card.addEventListener("click",function(){const type=document.getElementById("requestType");if(type)type.value=card.getAttribute("data-request");});});
    form.addEventListener("submit",function(event){
      event.preventDefault();
      const value=id=>document.getElementById(id).value.trim();
      const type=value("requestType"),name=value("requestName"),area=value("requestArea"),phone=value("requestPhone"),details=value("requestDetails");
      if(!type||!name||!details){alert("অনুগ্রহ করে প্রয়োজনীয় তথ্য পূরণ করুন।");return;}
      const message=["Boliyapur Community — নাগরিক সহায়তা অনুরোধ","বিষয়: "+type,"নাম: "+name,"এলাকা: "+(area||"উল্লেখ নেই"),"যোগাযোগ: "+(phone||"উল্লেখ নেই"),"বিস্তারিত: "+details,"অনুগ্রহ করে তথ্য যাচাই করে প্রয়োজনীয় ব্যবস্থা নিন।"].join("\n");
      window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
    });
  }
  const shareData={title:"বলিয়াপুর | Boliyapur Community",text:"বলিয়াপুর কমিউনিটির তথ্য ও নাগরিক সেবা দেখুন",url:location.href};
  const shareButton=document.createElement("button");shareButton.type="button";shareButton.className="install-app-btn";shareButton.textContent="📲 অ্যাপ ইনস্টল";shareButton.setAttribute("aria-label","Boliyapur Community অ্যাপ ইনস্টল করুন");document.body.appendChild(shareButton);
  let installPrompt=null;
  window.addEventListener("beforeinstallprompt",function(event){event.preventDefault();installPrompt=event;shareButton.classList.add("visible");});
  shareButton.addEventListener("click",async function(){if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;shareButton.classList.remove("visible");return;}if(navigator.share){try{await navigator.share(shareData);}catch(e){}}else{try{await navigator.clipboard.writeText(location.href);shareButton.textContent="লিংক কপি হয়েছে";setTimeout(()=>shareButton.textContent="📲 অ্যাপ ইনস্টল",2200);}catch(e){window.prompt("ওয়েবসাইটের লিংক কপি করুন:",location.href);}}});
  if("serviceWorker" in navigator && location.protocol.indexOf("http")===0){window.addEventListener("load",function(){navigator.serviceWorker.register("./service-worker.js").catch(function(error){console.warn("Offline support unavailable",error);});});}
})();
