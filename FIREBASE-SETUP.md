# Boliyapur Citizen Portal — Firebase Setup

The existing directory remains in index.html. This portal is added as a separate section.

## Before going live
1. Create a Firebase project at https://console.firebase.google.com/
2. Add a Web App and copy its Firebase config into firebase-config.js.
3. Enable Authentication > Sign-in method > Anonymous.
4. Enable Authentication > Sign-in method > Email/Password.
5. Create Firestore Database in production mode.
6. Create an admin user under Authentication > Users > Add user. Sign in once at /admin.html and copy the UID shown on screen.
7. Replace REPLACE_WITH_ADMIN_UID in BOTH firestore.rules and storage.rules with that exact UID.
8. Publish firestore.rules in Firestore > Rules.
9. Create the Firebase Storage bucket, then publish storage.rules in Storage > Rules. If Firebase asks for a billing plan, stop and check current pricing before enabling billing.
10. Commit all files and wait for GitHub Pages to deploy.

## URLs
- Public site: https://boliyarpur.github.io/boliyarpur/
- Admin: https://boliyarpur.github.io/boliyarpur/admin.html

## Important
- Firebase web config is intended for browser apps; Security Rules protect data.
- Never put service-account JSON, private keys, or admin passwords in this repository.
- Anonymous visitors can submit pending posts only. Only the configured Admin UID can read pending submissions, approve, or delete.
- Media is stored under a pending post and Storage rules permit public reading only after Firestore status becomes approved.
- Video/image uploads are limited by the rules to under 100 MB; Firebase plan quotas and current Storage availability may impose lower practical limits.
- GitHub Pages is static hosting. Firebase is the backend.
