# SkillBridge

SkillBridge is a learning platform for students. You can swap skills with other students for free (you teach them something, they teach you something), or book a paid 1-on-1 session with a mentor.

## How to run it

You need Node.js installed (version 20 or newer). You can get it from nodejs.org.

Open a terminal in the project folder and run:

```
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

`npm install` is only needed the first time. To stop the app, press Ctrl + C in the terminal.

## Logins

All accounts use the password `password123`.

- Student: diya@skillbridge.dev
- Mentor: touseef@skillbridge.dev (also imran@ and archana@)
- Admin: admin@skillbridge.dev

You can also use the buttons at the top of the page to switch between the Student, Mentor and Admin portals without logging in.

## What you can do

**Students** can:
- browse mentors and book a session by picking a date and time
- find other students to swap skills with (sorted by how well your skills match)
- send and accept requests
- chat with people after a request is accepted
- rate a mentor after a session

**Mentors** can:
- accept or decline booking requests
- chat with students
- mark sessions as done
- see their reviews and earnings

**Admins** can approve or reject mentors.

There's also a notification bell, a light/dark mode button, and a menu for phones.

## Files

The main code is in the `src` folder:

- `frontend.tsx`: the app. It uses sample data, so it works without a database.
- `skillbridge_main_application_backend_wire_up.tsx`: the same app, but connected to Firebase.
- `backend.js`: the functions that talk to Firebase (login, messages, requests, contact form).
- `database.js`: sets up the Firebase connection.
- `main.tsx`: starts the app and decides which version to show.
- `index.css`: styles and theme colors.

The other files in the main folder are settings for the tools (Vite, Tailwind, TypeScript). You don't need to change them.

## Using Firebase (optional)

Right now the app uses sample data, and everything resets when you refresh the page. To save real data:

1. Create a project on firebase.google.com and turn on Authentication (email/password) and Firestore.
2. Make a file called `.env.local` in the project folder with your keys:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

3. Restart the app. It will switch to the Firebase version on its own.

Don't share your `.env.local` file, because it has your private keys.

Note: the newer features (calendar, ratings, matching, notifications) are only in the sample-data version so far.

## Built with

React, TypeScript, Tailwind CSS, Vite, and Firebase.

## Bug fixes

The original files had a number of bugs. They're listed in `BUGS_FIXED.md`.
