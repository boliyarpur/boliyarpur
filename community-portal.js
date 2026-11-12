import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, query, where, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const mount = document.createElement("section");
mount.id = "citizen-portal";
mount.className = "citizen-section";
mount.innerHTML = `
<div class="citizen-wrap">
  <div class="citizen-head">
    <span class="citizen-kicker">BOLIYAPUR COMMUNITY</span>
    <h2>বলিয়াপুরের তথ্য, ছবি ও ভিডিও শেয়ার করুন</h2>
    <p>আপনার জমা দেওয়া সবকিছু Admin যাচাই করবেন। অনুমোদনের পরই মূল ওয়েবসাইটে প্রকাশ হবে।</p>
  </div>
  <div class="citizen-grid">
    <div class="citizen-panel">
      <h3>নতুন পোস্ট জমা দিন</h3>
      <form class="citizen-form" id="citizenForm">
        <label for="citizenName">আপনার নাম *</label>
        <input id="citizenName" maxlength="60" required placeholder="আপনার নাম">
        <label for="citizenArea">এলাকা / গ্রাম</label>
        <input id="citizenArea" maxlength="80" placeholder="যেমন: বলিয়াপুর">
        <label for="citizenCategory">বিভাগ *</label>
        <select id="citizenCategory" required>
          <option value="">নির্বাচন করুন</option>
          <option>এলাকার খবর</option><option>এলাকার ছবি</option><option>ভিডিও</option>
          <option>অনুষ্ঠান</option><option>শিক্ষাপ্রতিষ্ঠান</option><option>স্বাস্থ্যসেবা</option>
          <option>প্রাকৃতিক দৃশ্য</option><option>মানুষ ও সংস্কৃতি</option><option>ভালো উদ্যোগ</option><option>অন্যান্য</option>
        </select>
        <label for="citizenTitle">শিরোনাম *</label>
        <input id="citizenTitle" maxlength="120" required placeholder="পোস্টের শিরোনাম">
        <label for="citizenStory">বিস্তারিত *</label>
        <textarea id="citizenStory" maxlength="2000" required placeholder="আপনার তথ্য বা পোস্টটি লিখুন..."></textarea>
        <label for="citizenMedia">ছবি অথবা ভিডিও (ঐচ্ছিক)</label>
        <input id="citizenMedia" type="file" accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/quicktime">
        <p class="citizen-help">শুধু লেখা জমা দেওয়া যাবে। ছবি সর্বোচ্চ ১৫ MB, ভিডিও সর্বোচ্চ ১০০ MB। JPG, PNG, WEBP, GIF, MP4, WEBM বা MOV।</p>
        <div class="citizen-progress" id="citizenProgress"><span id="citizenProgressBar"></span></div>
        <p class="citizen-help" id="citizenProgressText" aria-live="polite"></p>
        <button class="citizen-submit" id="citizenSubmit" type="submit"><span>অনুমোদনের জন্য জমা দিন</span><small>WhatsApp: 01605150864</small></button><p class="citizen-help citizen-whatsapp-note">পোস্ট জমা সফল হলে আপনার WhatsApp-এ পোস্টের তথ্য পাঠানোর বার্তা খুলবে।</p>
        <div class="citizen-status" id="citizenStatus" role="status"></div>
      </form>
    </div>
    <div class="citizen-panel">
      <h3>অনুমোদিত কমিউনিটি পোস্ট</h3>
      <p class="citizen-help">Admin অনুমোদন করলেই এখানে স্বয়ংক্রিয়ভাবে দেখা যাবে—Refresh করতে হবে না।</p>
      <div class="citizen-feed" id="citizenFeed"><div class="citizen-empty">পোস্ট লোড হচ্ছে...</div></div>
    </div>
  </div>
</div>`;
const target = document.querySelector("#citizen-portal");
const contact = document.querySelector("#contact");
if (target) target.replaceWith(mount);
else if (contact) contact.parentNode.insertBefore(mount, contact);
else document.body.appendChild(mount);

const $ = id => document.getElementById(id);
const form = $("citizenForm");
const submit = $("citizenSubmit");
const feed = $("citizenFeed");
const statusBox = $("citizenStatus");
const ADMIN_WHATSAPP = "8801605150864";

function showStatus(message, error = false) {
  statusBox.textContent = message;
  statusBox.style.display = "block";
  statusBox.classList.toggle("error", error);
}
function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));
}
function renderMedia(post) {
  if (!post.mediaUrl) return "";
  const url = esc(post.mediaUrl);
  if ((post.mediaType || "").startsWith("video/")) {
    return '<video controls playsinline preload="metadata" src="' + url + '"></video>';
  }
  return '<img loading="lazy" src="' + url + '" alt="' + esc(post.title) + '">';
}
function renderFeed(snapshot) {
  const posts = snapshot.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
  if (!posts.length) {
    feed.innerHTML = '<div class="citizen-empty">এখনো কোনো অনুমোদিত পোস্ট নেই।</div>';
    return;
  }
  feed.innerHTML = posts.map(p => `
    <article class="citizen-post">
      ${renderMedia(p)}
      <div class="citizen-post-body">
        <div class="citizen-post-meta">${esc(p.category)} · ${esc(p.area || "বলিয়াপুর")} · ${esc(p.authorName)} · প্রকাশক: ${esc(p.approvedBy || "Boliyapur Admin")}</div>
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.story || "")}</p>
      </div>
    </article>`).join("");
}


  // Share post details and selected media through the device share sheet.
  // Visitor chooses WhatsApp (or another app) and confirms sending.
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const name = $("citizenName").value.trim();
    const area = $("citizenArea").value.trim() || "বলিয়াপুর";
    const category = $("citizenCategory").value;
    const title = $("citizenTitle").value.trim();
    const story = $("citizenStory").value.trim();
    const file = $("citizenMedia").files[0] || null;
    const imageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    const videoTypes = ["video/mp4", "video/webm", "video/quicktime"];
    const isImage = file && imageTypes.includes(file.type);
    const isVideo = file && videoTypes.includes(file.type);
    if (file && !isImage && !isVideo) {
      showStatus("এই ফাইল ফরম্যাট সমর্থিত নয়।", true);
      return;
    }
    if (file && file.size > (isImage ? 15 : 100) * 1024 * 1024) {
      showStatus(isImage ? "ছবির সাইজ ১৫ MB-এর বেশি।" : "ভিডিওর সাইজ ১০০ MB-এর বেশি।", true);
      return;
    }
    const message = [
      "বলিয়াপুর কমিউনিটি — নতুন পোস্ট জমা",
      "প্রেরকের নাম: " + name,
      "এলাকা / গ্রাম: " + area,
      "বিভাগ: " + category,
      "শিরোনাম: " + title,
      "বিস্তারিত: " + story,
      "অনুগ্রহ করে যাচাই করে ওয়েবসাইটে প্রকাশের ব্যবস্থা করুন।",
      "ওয়েবসাইট: https://boliyarpur.github.io/boliyarpur/"
    ].join("\\n");
    submit.disabled = true;
    try {
      if (file && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: "বলিয়াপুর কমিউনিটি পোস্ট", text: message, files: [file] });
        showStatus("শেয়ার মেনু খুলেছে। WhatsApp নির্বাচন করে Admin-এর চ্যাটে Send করুন।");
      } else if (!file && navigator.share) {
        await navigator.share({ title: "বলিয়াপুর কমিউনিটি পোস্ট", text: message });
        showStatus("শেয়ার মেনু খুলেছে। WhatsApp নির্বাচন করে Admin-এর চ্যাটে Send করুন।");
      } else {
        const url = "https://wa.me/" + ADMIN_WHATSAPP + "?text=" + encodeURIComponent(message);
        showStatus(file
          ? "এই ব্রাউজারে ফাইলসহ শেয়ার সমর্থিত নয়। WhatsApp খুলছে—ছবি/ভিডিওটি Attach করে Send করুন।"
          : "WhatsApp খুলছে। Admin-এর চ্যাটে Send চাপুন।");
        window.location.href = url;
      }
    } catch (error) {
      if (error && error.name === "AbortError") {
        showStatus("শেয়ার বাতিল করা হয়েছে। চাইলে আবার জমা দিন।");
      } else {
        const url = "https://wa.me/" + ADMIN_WHATSAPP + "?text=" + encodeURIComponent(message);
        showStatus("শেয়ার মেনু খোলা যায়নি। WhatsApp-এ পাঠানোর পেজ খুলছি।");
        window.location.href = url;
      }
    } finally {
      submit.disabled = false;
    }
  });


if (!firebaseConfig.apiKey || !firebaseConfig.projectId ||
    firebaseConfig.apiKey.includes("PASTE_") || firebaseConfig.projectId.includes("PASTE_")) {
  feed.innerHTML = '<div class="citizen-empty">Firebase সেটআপ প্রয়োজন।</div>';
} else {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const storage = getStorage(app);

    // Approved content is subscribed live; new approvals appear without page refresh.
    onSnapshot(
      query(collection(db, "communityPosts"), where("status", "==", "approved")),
      renderFeed,
      error => {
        console.error("Approved feed listener:", error);
        feed.innerHTML = '<div class="citizen-empty">পোস্ট লোড করা যায়নি। Firebase Firestore Rules পরীক্ষা করুন।</div>';
      }
    );

  } catch (error) {
    console.error("Firebase initialization error:", error);
    showStatus("Firebase সংযোগে সমস্যা: " + error.message, true);
  }
}
