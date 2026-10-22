# Rise Edge Academy

Free web app: GitHub Pages (hosting) + Firebase Auth and Firestore (login and data). No computer needed.

## Files
index.html, app.js, config.js (your Firebase keys), firestore.rules, logo.jpg, qr.png

## First setup
1. GitHub: create a public repo, upload all files, then Settings > Pages > Branch main, folder root > Save.
2. Firebase: create a project, enable Authentication > Email/Password, create Firestore Database (production mode).
3. Firestore > Rules: paste all of firestore.rules > Publish.
4. Project settings > Your apps > Web: copy apiKey, authDomain, projectId, appId into config.js.
5. Open your site, tap "First-time setup (admin only)" and create the admin. Only shown while no admin exists.

## Login
Students and teachers: roll number (REAS-2026-001 / REAT-2026-001) and password.
Admin: your name, or your email (Profile > Login with email), or `admin`.

## Registration emails (free, EmailJS)
emailjs.com > connect your email > create a template using {{to_email}}, {{to_name}}, {{roll}}, {{password}}.
Then Admin > Registrations > Email setup: paste Public key, Service ID, Template ID.

## Notes
- Deleting a user in the app removes the profile and login access. Their Firebase Authentication entry stays, so roll serial numbers keep counting upward.
- To restart numbering from 001: Firebase > Authentication > delete the old users, and Firestore > config > delete the document `ctr`.
