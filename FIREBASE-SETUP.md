# Boliyapur Citizen Portal — Firebase Setup

The existing directory is retained in index.html. This repository adds a public citizen submission section and a separate admin moderation page.

## What works after Firebase setup
- Public visitor signs in anonymously and submits a post.
- New posts are saved with status=pending.
- Only the Admin UID configured in the security rules can read pending posts, approve, or delete them.
- Public visitors can read only approved posts.
- Approved posts appear on the main site through Firestore realtime updates.

## Firebase setup
1. Create a Firebase project at https://console.firebase.google.com/
2. Add a Web App (</>) and paste its config into firebase-config.js.
3. Authentication > Sign-in method: enable Anonymous and Email/Password.
4. Firestore Database: create a database. Start in production mode.
5. Authentication > Users: create an admin account with Email/Password.
6. Open https://boliyarpur.github.io/boliyarpur/admin.html and sign in once. Copy the UID displayed in the admin dashboard.
7. Replace REPLACE_WITH_ADMIN_UID in firestore.rules with that exact UID.
8. Publish firestore.rules in Firebase Console > Firestore Database > Rules.
9. Publish Storage rules only if you decide to enable Firebase Storage and accept its billing requirements (see below).
10. Confirm GitHub Pages is deployed, then test a text-only submission and approve it in admin.html.

## Important: Firebase Storage billing
As of 2026, Cloud Storage for Firebase requires the Blaze pay-as-you-go plan to create/use a default bucket. A billing account/payment method is required. No-cost usage quotas may apply, but usage above quotas can be charged. Do NOT enable Blaze unless you understand and accept this. See:
https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024

If you want to stay on the no-cost Spark plan, use text-only posts (and optionally allow users to paste public image/video links); Firebase Storage uploads will not work on Spark. If you enable Blaze, create the Storage bucket, set firebase-config.js storageBucket to the exact bucket name shown in Firebase, then publish storage.rules.

## URLs
- Public site: https://boliyarpur.github.io/boliyarpur/
- Admin: https://boliyarpur.github.io/boliyarpur/admin.html

## Security
- Firebase web config is intended for browser apps; Security Rules protect data.
- Never put service-account JSON, private keys, or admin passwords in this repository.
- Anonymous visitors can submit pending posts only. Only the configured Admin UID can read pending submissions, approve, or delete.
- Media is stored under its pending post. Storage rules allow public reads only after the related Firestore post becomes approved.
- Upload rules cap a single image/video at under 100 MB; actual limits and pricing are controlled by Firebase/Google Cloud.
