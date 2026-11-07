# Boliyapur Citizen Portal — Firebase Setup

## Live approval workflow
- Visitors sign in anonymously and submit text-only posts or posts with an image/video.
- Every new submission is saved with status=pending.
- Admin Dashboard listens to pending submissions in real time.
- Only the configured Admin can read pending posts, edit, approve, or delete them.
- The public website listens to approved posts in real time. When Admin approves a post, it appears without a page refresh.
- Public visitors can read only approved posts.

## Firebase setup (one-time)
1. Open https://console.firebase.google.com/ and select project boliyapur-community.
2. Authentication > Sign-in method: enable Anonymous and Email/Password.
3. Authentication > Users: confirm the Admin account mdtusher2345@gmail.com exists.
4. Firestore Database: create a database if not already created.
5. Open the Rules tab and publish the exact contents of firestore.rules from this repository.
6. For text-only posts, Firestore is sufficient on the Spark plan.
7. For image/video uploads, create/enable the Firebase Storage bucket, ensure the bucket name matches firebase-config.js, then publish storage.rules. Firebase Storage may require the Blaze pay-as-you-go plan; review current billing requirements before enabling it.
8. Ensure GitHub Pages is enabled for the main branch.

## URLs
- Public website: https://boliyarpur.github.io/boliyarpur/
- Admin Dashboard: https://boliyarpur.github.io/boliyarpur/admin.html

## Security
- Never put passwords, service-account JSON, or private keys in this repository.
- Browser Firebase config is public; Firestore and Storage Security Rules enforce access.
- Anonymous users can create pending posts only. They cannot approve or publish content.
- Storage files are readable publicly only after the corresponding post is approved.
- Upload limits in the form: images 15 MB; videos 100 MB.
