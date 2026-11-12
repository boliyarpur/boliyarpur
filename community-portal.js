import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, query, where, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";
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

if (!firebaseConfig.apiKey || !firebaseConfig.projectId ||
    firebaseConfig.apiKey.includes("PASTE_") || firebaseConfig.projectId.includes("PASTE_")) {
  showStatus("Firebase Web App config সম্পূর্ণ নয়।", true);
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

    // Create an anonymous visitor session only when the visitor submits the form.
    // This avoids an unhandled auth rejection during ordinary page loading.

    form.addEventListener("submit", async event => {
      event.preventDefault();
      // Open a tab during the user gesture so mobile browsers do not block WhatsApp later.
      const file = $("citizenMedia").files[0] || null;
      const imageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
      const videoTypes = ["video/mp4", "video/webm", "video/quicktime"];

      if (file) {
        const isImage = imageTypes.includes(file.type);
        const isVideo = videoTypes.includes(file.type);
        if (!isImage && !isVideo) {
          showStatus("এই ফাইল ফরম্যাট সমর্থিত নয়।", true);
          return;
        }
        if (file.size > (isImage ? 15 : 100) * 1024 * 1024) {
          showStatus(isImage ? "ছবির সাইজ ১৫ MB-এর বেশি।" : "ভিডিওর সাইজ ১০০ MB-এর বেশি।", true);
          return;
        }
      }

      const whatsappTab = window.open("about:blank", "_blank");
      submit.disabled = true;
      submit.textContent = "জমা হচ্ছে...";
      $("citizenProgress").style.display = file ? "block" : "none";
      $("citizenProgressBar").style.width = "0%";
      $("citizenProgressText").textContent = "";

      try {
        let user = auth.currentUser;
        if (!user) {
          try {
            const credential = await signInAnonymously(auth);
            user = credential.user;
          } catch (authError) {
            if (authError.code === "auth/admin-restricted-operation" || authError.code === "auth/operation-not-allowed") {
              throw new Error("Firebase-এ Anonymous sign-in চালু নেই। Firebase Console → Authentication → Sign-in method (বা Sign-in providers) → Anonymous → Enable → Save করুন। তারপর পেজ Refresh করে আবার জমা দিন। Project ID: boliyapur-community.");
            }
            throw authError;
          }
        }
        if (!user) throw new Error("নাগরিক সেশন তৈরি হয়নি। পেজ Refresh করে আবার চেষ্টা করুন।");

        const post = {
          uid: user.uid,
          authorName: $("citizenName").value.trim(),
          area: $("citizenArea").value.trim() || "বলিয়াপুর",
          category: $("citizenCategory").value,
          title: $("citizenTitle").value.trim(),
          story: $("citizenStory").value.trim(),
          status: "pending",
          createdAt: serverTimestamp()
        };

        if (file) {
          const postRef = doc(collection(db, "communityPosts"));
          const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-90) || "media";
          const storagePath = "communityUploads/" + user.uid + "/" + postRef.id + "/" + safeName;
          const task = uploadBytesResumable(ref(storage, storagePath), file, { contentType: file.type });

          await new Promise((resolve, reject) => task.on(
            "state_changed",
            progress => {
              const percent = Math.round(progress.bytesTransferred / progress.totalBytes * 100);
              $("citizenProgressBar").style.width = percent + "%";
              $("citizenProgressText").textContent = "ফাইল আপলোড হচ্ছে: " + percent + "%";
            },
            reject,
            resolve
          ));

          post.mediaUrl = await getDownloadURL(task.snapshot.ref);
          post.mediaType = file.type;
          post.mediaName = file.name;
          post.storagePath = storagePath;
          await setDoc(postRef, post);
        } else {
          const { addDoc } = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js");
          await addDoc(collection(db, "communityPosts"), post);
        }

        const whatsappMessage = [
          "Boliyapur Community — নতুন নাগরিক পোস্ট জমা পড়েছে",
          "প্রেরকের নাম: " + post.authorName,
          "এলাকা: " + post.area,
          "বিভাগ: " + post.category,
          "শিরোনাম: " + post.title,
          "বিস্তারিত: " + post.story,
          post.mediaUrl ? "ছবি/ভিডিও: " + post.mediaUrl : "মিডিয়া: সংযুক্ত করা হয়নি",
          "অবস্থা: Admin অনুমোদনের অপেক্ষায় (Pending)",
          "Admin Dashboard: https://boliyarpur.github.io/boliyarpur/admin.html"
        ].join("\n");
        const whatsappUrl = "https://wa.me/" + ADMIN_WHATSAPP + "?text=" + encodeURIComponent(whatsappMessage);
        form.reset();
        showStatus("আপনার পোস্ট জমা হয়েছে। Admin অনুমোদন করার পরই ওয়েবসাইটে প্রকাশ হবে। WhatsApp-এ পোস্টের তথ্য পাঠানোর ব্যবস্থা করা হয়েছে।");
        if (whatsappTab) { whatsappTab.location.href = whatsappUrl; }
        else { statusBox.insertAdjacentHTML("beforeend", '<p><a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer">WhatsApp-এ Admin-কে পোস্টের তথ্য পাঠান (01605150864)</a></p>'); }
        $("citizenProgressText").textContent = file ? "ফাইল আপলোড সম্পন্ন। পোস্ট Pending তালিকায় পাঠানো হয়েছে।" : "লেখা সফলভাবে জমা হয়েছে।";
      } catch (error) {
        if (whatsappTab) whatsappTab.close();
        console.error("Submission error:", error);
        showStatus("জমা দেওয়া যায়নি: " + (error.message || "Firebase সেটআপ পরীক্ষা করুন।"), true);
      } finally {
        submit.disabled = false;
        submit.innerHTML = '<span>অনুমোদনের জন্য জমা দিন</span><small>WhatsApp: 01605150864</small>';
      }
    });
  } catch (error) {
    console.error("Firebase initialization error:", error);
    showStatus("Firebase সংযোগে সমস্যা: " + error.message, true);
  }
}
