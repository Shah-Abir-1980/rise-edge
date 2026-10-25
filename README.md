# Rise Edge Academy

Free web app: GitHub Pages (hosting) + Firebase Auth and Firestore (login and data). No computer needed.

## Files
index.html, app.js, config.js (your Firebase keys), firestore.rules, logo.jpg, qr.png, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png

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

## Added in v4
- **Absent alert:** Attendance > save the class day > "Absent alert to guardians" (SMS / WhatsApp open on your own phone, Email if the guardian email is saved). Also on the admin dashboard under Today's absent.
- **Fee receipt:** Fees tab > Receipt (admin), or Fees card > Receipt (student). Then "Save as PDF / Print".
- **Forgot password:** login page > Forgot password? The request appears on the admin dashboard and Registrations > Reset password. The admin gives the new password to the user.
- **Class routine:** admin Routine tab (add / delete classes per batch). Teachers and students see it read-only; students also get "Today's classes" on the dashboard.
- **Install as app:** Chrome shows an "Install app" button. iPhone: Safari > Share > Add to Home Screen.
- **Important:** after updating, paste the new firestore.rules in Firebase > Firestore > Rules > Publish (new rules for `rt` and `fp`).
