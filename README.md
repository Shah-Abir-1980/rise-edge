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

## Self-registration (no approval) and emails (free, EmailJS)
Students and teachers register themselves on the login page: fill the form, check it on the review screen (Edit if something is wrong), confirm. The account is created at once and the roll ID and password are emailed to them. Nobody has to approve.
Set up EmailJS first, otherwise nobody receives a password:
emailjs.com > connect your email > create a template using {{to_email}}, {{to_name}}, {{roll}}, {{password}}.
Then Admin > Registrations > Email setup: paste Public key, Service ID, Template ID (and Template ID 2 + your email to get a notice for every new registration).
Admin > Registrations has a switch to close / open registration, and a list of recent registrations with a Reset password button (use it if someone typed a wrong email).

## Notes
- Deleting a user in the app removes the profile and login access. Their Firebase Authentication entry stays, so roll serial numbers keep counting upward.
- To restart numbering from 001: Firebase > Authentication > delete the old users, and Firestore > config > delete the document `ctr`, and delete the documents in the `cn` collection.

## Added in v4
- **Absent alert:** Attendance > save the class day > "Absent alert to guardians" (SMS / WhatsApp open on your own phone, Email if the guardian email is saved). Also on the admin dashboard under Today's absent.
- **Fee receipt:** Fees tab > Receipt (admin), or Fees card > Receipt (student). Then "Save as PDF / Print".
- **Forgot password:** login page > Forgot password? The request appears on the admin dashboard and Registrations > Reset password. The admin gives the new password to the user.
- **Class routine:** admin Routine tab (add / delete classes per batch). Teachers and students see it read-only; students also get "Today's classes" on the dashboard.
- **Install as app:** Chrome shows an "Install app" button. iPhone: Safari > Share > Add to Home Screen.
- **Registration without approval (v5):** see Self-registration above. New Firestore rules were added for it.
- **Important:** after updating, paste the new firestore.rules in Firebase > Firestore > Rules > Publish (new rules for `rt` and `fp`).

## Added in v6
- **Monthly result sheet:** Result sheet tab > Monthly result > pick the month > Preview / Publish. Same poster as the yearly one (1st, 2nd, 3rd with photos, A+ / A count, pass rate). Students see it under Result sheet.
- **Exam ranks box (dashboard):** Week (last 7 days) / Month / Year / Custom dates. Students see their rank in every published exam of that period and tap the rank to open the result. Admin and teachers see the published exams of the chosen batch, tap an exam for the rank list, tap a rank for that student's result.
- **Old published exams:** open the dashboard box once and tap "Update student results" so students can see them too. New publishes update automatically.
- **Exam total marks:** each subject must be 10 to 200. Decimals are fine (55, 55.5). Marks entered for students can also have decimals.
- No change in firestore.rules for v6.
