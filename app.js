(() => {
  "use strict";
  const data = window.BOLIYAPUR_DATA || {};
  const $ = (id) => document.getElementById(id);
  const safe = (value) => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
  const validImage = (path) => path && String(path).trim() ? String(path).trim() : "";
  const imageBlock = (path, alt, cls="") => validImage(path)
    ? `<img class="${cls}" src="${safe(path)}" alt="${safe(alt)}" loading="lazy" onerror="this.style.display='none'">`
    : `<div class="placeholder-art ${cls}"><span>বলিয়াপুর</span></div>`;
  const phoneLink = (phone) => {
    const p = String(phone || "").replace(/[^\d+]/g, "");
    return p ? `<a class="mini-action" href="tel:${safe(p)}">☎ কল করুন</a>` : "";
  };
  const websiteLink = (url) => {
    if (!url) return "";
    let u = String(url).trim();
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    return `<a class="mini-action" href="${safe(u)}" target="_blank" rel="noopener">ওয়েবসাইট ↗</a>`;
  };

  $("brandName").textContent = data.siteName || "বলিয়াপুর";
  $("year").textContent = new Date().getFullYear();
  const hero = $("heroPhoto");
  if (validImage(data.heroImage)) hero.innerHTML = imageBlock(data.heroImage, "বলিয়াপুর এলাকার ছবি", "hero-img");

  const news = Array.isArray(data.news) ? data.news : [];
  $("newsGrid").innerHTML = news.map((item, i) => `
    <article class="info-card">
      ${imageBlock(item.image, item.title, "card-image")}
      <div class="card-body"><div class="card-meta"><span>${safe(item.category || "আপডেট")}</span><time>${safe(item.date || "")}</time></div>
      <h3>${safe(item.title)}</h3><p>${safe(item.description)}</p>
      <a class="text-link" href="${safe(item.link || "#complaint")}">বিস্তারিত / তথ্য দিন →</a></div>
    </article>`).join("") || `<p class="empty">এখনো কোনো খবর যোগ করা হয়নি।</p>`;

  const services = Array.isArray(data.services) ? data.services : [];
  function renderServices() {
    const q = $("serviceSearch").value.trim().toLowerCase();
    const cat = $("serviceFilter").value;
    const filtered = services.filter(s => {
      const text = [s.name,s.category,s.description,s.address].join(" ").toLowerCase();
      return (!q || text.includes(q)) && (cat === "সব" || s.category === cat);
    });
    $("serviceGrid").innerHTML = filtered.map(s => `
      <article class="service-card">
        ${validImage(s.image) ? imageBlock(s.image, s.name, "service-image") : `<div class="service-symbol">${safe((s.category || "সেবা").slice(0,1))}</div>`}
        <div class="service-content"><span class="pill">${safe(s.category || "অন্যান্য")}</span><h3>${safe(s.name)}</h3>
        <p>${safe(s.description || "")}</p><p class="address">⌖ ${safe(s.address || "ঠিকানা যোগ করা হয়নি")}</p>
        <div class="actions">${phoneLink(s.phone)}${websiteLink(s.website)}</div></div>
      </article>`).join("");
    $("serviceEmpty").hidden = filtered.length > 0;
  }
  $("serviceSearch").addEventListener("input", renderServices);
  $("serviceFilter").addEventListener("change", renderServices);
  renderServices();

  const schools = Array.isArray(data.schools) ? data.schools : [];
  $("schoolGrid").innerHTML = schools.map(s => `
    <article class="info-card school-card">${imageBlock(s.image, s.title, "card-image")}
      <div class="card-body"><div class="card-meta"><span>শিক্ষা ও অনুষ্ঠান</span><time>${safe(s.date || "")}</time></div>
      <h3>${safe(s.title)}</h3><p>${safe(s.description)}</p><small class="school-name">${safe(s.school || "")}</small></div>
    </article>`).join("") || `<p class="empty">এখনো কোনো স্কুলের তথ্য যোগ করা হয়নি।</p>`;

  const gallery = Array.isArray(data.gallery) ? data.gallery : [];
  let activeGallery = gallery.slice();
  let activeIndex = 0;
  const categories = ["সব", ...new Set(gallery.map(g => g.category || "অন্যান্য"))];
  $("galleryFilters").innerHTML = categories.map((c,i) => `<button class="filter-btn ${i===0?"selected":""}" data-category="${safe(c)}">${safe(c)}</button>`).join("");
  function renderGallery(category="সব") {
    activeGallery = gallery.filter(g => category === "সব" || (g.category || "অন্যান্য") === category);
    $("galleryGrid").innerHTML = activeGallery.map((g,i) => `
      <button class="gallery-item" data-index="${i}" aria-label="${safe(g.title)}">
        ${imageBlock(g.image, g.title, "gallery-image")}
        <span class="gallery-caption"><b>${safe(g.title)}</b><small>${safe(g.category || "")} ${safe(g.date || "")}</small></span>
      </button>`).join("") || `<p class="empty">এই বিভাগে এখনো ছবি নেই।</p>`;
    $("galleryGrid").querySelectorAll(".gallery-item").forEach(btn => btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index))));
  }
  $("galleryFilters").addEventListener("click", e => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    $("galleryFilters").querySelectorAll("button").forEach(b => b.classList.toggle("selected", b===btn));
    renderGallery(btn.dataset.category);
  });
  renderGallery();

  const lightbox = $("lightbox");
  function openLightbox(index) {
    if (!activeGallery.length) return;
    activeIndex = (index + activeGallery.length) % activeGallery.length;
    const item = activeGallery[activeIndex];
    if (!validImage(item.image)) return;
    $("lightboxImage").src = item.image;
    $("lightboxImage").alt = item.title || "বলিয়াপুর";
    $("lightboxCaption").textContent = item.title || "";
    lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
  }
  function closeLightbox(){ lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); $("lightboxImage").src=""; }
  $("lightboxClose").addEventListener("click",closeLightbox);
  $("lightboxPrev").addEventListener("click",()=>openLightbox(activeIndex-1));
  $("lightboxNext").addEventListener("click",()=>openLightbox(activeIndex+1));
  lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft"&&lightbox.classList.contains("open"))openLightbox(activeIndex-1);if(e.key==="ArrowRight"&&lightbox.classList.contains("open"))openLightbox(activeIndex+1);});

  const contact = $("directContact");
  const wa = String(data.whatsapp || "").replace(/\D/g,"");
  const ph = String(data.phone || "").trim();
  const em = String(data.email || "").trim();
  let contactHtml = "";
  if (wa) contactHtml += `<a class="contact-link" target="_blank" rel="noopener" href="https://wa.me/${safe(wa)}">WhatsApp-এ যোগাযোগ ↗</a>`;
  if (ph) contactHtml += `<a class="contact-link" href="tel:${safe(ph.replace(/[^\d+]/g,""))}">ফোন করুন ☎</a>`;
  if (em) contactHtml += `<a class="contact-link" href="mailto:${safe(em)}">ইমেইল করুন ✉</a>`;
  contact.innerHTML = contactHtml || `<div class="setup-warning">যোগাযোগের নম্বর এখনো সেট করা হয়নি। নিচের <b>data.js</b> ফাইলে নিজের WhatsApp নম্বর যোগ করলে অভিযোগ ফর্ম চালু হবে।</div>`;

  $("complaintForm").addEventListener("submit", e => {
    e.preventDefault();
    if (!wa) {
      $("formNote").textContent = "প্রথমে data.js ফাইলে whatsapp ঘরে আপনার WhatsApp নম্বর যোগ করুন। উদাহরণ: 8801XXXXXXXXX (এখানে নিজের আসল নম্বর বসাবেন)।";
      $("formNote").classList.add("error-note");
      return;
    }
    const f = new FormData(e.currentTarget);
    const msg = [
      "বলিয়াপুর কমিউনিটি ওয়েবসাইট থেকে নতুন বার্তা",
      "নাম: " + f.get("name"),
      "ফোন: " + (f.get("phone") || "দেওয়া হয়নি"),
      "বিষয়: " + f.get("type"),
      "স্থান: " + (f.get("location") || "উল্লেখ নেই"),
      "বিস্তারিত: " + f.get("message")
    ].join("\n");
    window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  $("menuBtn").addEventListener("click", () => {
    const nav = $("navLinks");
    const opened = nav.classList.toggle("show");
    $("menuBtn").setAttribute("aria-expanded", String(opened));
  });
  $("navLinks").querySelectorAll("a").forEach(a => a.addEventListener("click",()=>{$("navLinks").classList.remove("show");$("menuBtn").setAttribute("aria-expanded","false");}));
})();
