# SkillBridge Firebase setup

1. Copy `.env.example` to `.env.local` in the project root.
2. Fill `.env.local` with the Firebase Web App config from Firebase Console → Project settings → Your apps.
3. In Firebase Authentication, enable Email/Password.
4. In Firestore Database → Rules, review and publish the rules in `firestore.rules`.
5. Run `npm install`, then `npm run build`, then `npm run dev`.

Important:
- Never upload `.env.local` or service-account keys.
- Public signup is limited to students and mentors. Mentor accounts are created with `pending_approval` status.
- Demo dashboard content is still sample content. Real chat/request screens need their UI event handlers connected to the backend functions before presenting those flows as live.
- The current backend has a peer-study invitation function. Mentor-request creation and notification subscription/UI are not yet fully wired.
