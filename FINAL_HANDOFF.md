# SkillBridge final update handoff

## What changed in this update

- Fixed the live Firebase app's student dashboard greeting. The Firebase build is selected in `src/main.tsx` and runs `src/skillbridge_main_application_backend_wire_up.tsx`; the old hardcoded `Welcome back, Diya!` is now based on the signed-in account's Firestore `fullName`.
- Removed hardcoded sample names from the portal switcher labels.
- Mentor accounts now sync a minimal public `mentorDirectory/{uid}` record when they sign in. It contains only the UID, full name, role, account status and update timestamp; it does not publish email addresses.
- Student booking now resolves the selected sample mentor to a registered mentor UID, creates a Firestore `mentorRequests` document, and creates a recipient-only notification record.
- Mentors listen only to `mentorRequests` where `receiverId` is their own Firebase Auth UID, and see an in-app pop-up for pending requests.
- Students listen only to their own sent requests and receive an in-app toast when a mentor accepts or declines.
- Accepting a real mentor request creates/reuses a conversation, and both participants subscribe to that conversation's Firestore messages.
- Updated `firestore.rules` to allow safe read access to the minimal mentor directory and to validate that mentor requests target a registered mentor.
- Kept the generated online-learning hero image in `public/images/skillbridge-online-learning-hero.png`.

## Required Firebase step before using the new request flow

The updated `firestore.rules` in this project must be published to the same Firebase project (`skill-bridge-49cf4`) before testing the new mentor directory/request flow.

1. Open Firebase Console → Firestore Database → Rules.
2. Replace the rules editor with the complete contents of this project's `firestore.rules`.
3. Click **Publish**.
4. Each existing mentor must sign in to SkillBridge once after the rules are published. This creates/synchronizes their `mentorDirectory` entry.
5. The student's selected mentor name must match the registered mentor's full name (honorifics such as Mr./Ms./Dr. are ignored). If no matching mentor account exists, the app will show an explanatory message instead of silently creating a fake request.

Do not use broad test rules such as `allow read, write: if true`.

## Build and Netlify deployment

- Keep `.env.local` private and do not upload it in a ZIP.
- Run `npm install` and `npm run build` in the project root.
- If the build succeeds, deploy the generated `dist` folder to the existing Netlify site. This project ZIP does not publish itself.
- Keep the existing Netlify environment variables for the Firebase web app configured on the site.

## Important scope note

SkillBridge still contains sample/demo content in parts of the dashboards (for example, sample mentors, sample sessions, summary metrics and some peer-swap content). The real Firebase-backed flows updated here are account/profile loading, mentor request creation/receipt, request status updates and chat messages after acceptance. This update does not add email notifications; notifications are in-app only, as selected.
