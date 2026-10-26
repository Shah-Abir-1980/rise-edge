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

## Added in v7
- **Students tab:** only the student list. Search box with "Add student" beside it, class buttons below (All, Class 6 ... Class 12). Tap a class to see its students. Add batch is only in the Batches tab. "Start new month" and the month start date moved into each batch page (Batches > tap a batch).
- **Fees (student):** every month shows Paid / Due. Tap a Due month > Paid > Cash or Online. Online needs a payment screenshot (Transaction ID is optional). The month stays "Waiting for approval" until the admin approves.
- **Fees (admin):** Fees tab (and a card on the dashboard) shows Payment requests. Check the screenshot, change the amount if needed, Approve or Reject. Approve adds the payment, the month turns Paid and the receipt works. Reject can have a reason; the student can send it again.
- **Important:** paste the new firestore.rules in Firebase > Firestore > Rules > Publish (new rules for `pr` and `pi`). Without it, students cannot send payment requests.

## Added in v8
- **Logo + academy name on top of every page.** Tap it to go to the dashboard (the logo in the side menu works too).
- **Syllabus topic edit (admin only):** Syllabus tab > a ✏️ pencil sits beside every topic. Tap it, type the new name, OK. Leave it empty to bring back the original NCTB name. The change is saved for that batch only and students, teachers and progress bars show the new name. Progress (ticked topics) stays as it was because it follows the topic position. Extra subjects you added are edited in place.
- **Student dashboard > Fees:** total due, this and the last 2 months (Paid / Due / Waiting for approval). Tap it to open the Fees page.
- **firestore.rules:** the `sd` rule now stops teachers from changing topic names (only admin can). Publish the rules again (the same paste also carries the v7 payment rules).

## Added in v9
- **Fees = admin only.** Co-admins cannot see or use anything about fees: no Fees tab, no pending-fee tile or quick action on the dashboard, no payment requests, no fee amount in the student profile, and the rules block their access to payments, fee requests, published fees and teacher payments. They also cannot change a batch fee or a personal fee.
- **Co-admins: maximum 5** (was 3).
- **Fees tab now has 3 buttons:** Student fees (as before), **Add fee**, **Payment**.
- **Add fee:** tap a batch name > choose the month and the amount > Publish. Students of that batch get a notification and see the month, amount and Due/Paid on their dashboard and Fees page. Publish again for the same month to change the amount, or Remove to go back to the default fee. A personal fee of one student still wins over the published amount. Months with no published fee use the usual batch/default fee.
- **Payment (teacher salary):** Add payment > pick the teacher, amount and month > Payment done. Below it, every teacher shows Paid / Not paid for the chosen month. The teacher gets a notification and sees a **Salary** card on the dashboard (this month paid or not, last payments).
- The old "Add payment" card inside Student fees is now called "Student payment".
- **firestore.rules:** publish again. New collections `bf` (published fees) and `sal` (teacher payments).

## Whole package
Upload ALL files of this folder to GitHub (Add file > Upload files, drag everything; do not copy-paste app.js, it is a big file). Then publish firestore.rules in Firebase > Firestore > Rules. Open `check.html` on your site if the app ever sticks on the logo: it shows what is wrong. If the app cannot start, the loading screen now shows a message with Reload and Clear app cache buttons.

## v9.1
- First-login password change is now a normal in-page form (before it used a pop-up `prompt()` in a loop; if the browser blocked or cancelled the pop-up the page froze on the logo).
- While the app starts, a small grey line under the spinner shows what it is loading ("Loading users...", "Opening your page..."). If the app ever sticks, send a screenshot of that line.

## v9.2
- **No password pop-up at login any more.** New accounts log in with the password the admin gave them and go straight to the dashboard. A small note on the dashboard says "You are using a temporary password. Please change it in Profile." until they do.
- **Profile > Change password:** Current password, New password (min 6), Save password. The result is written on the page (no pop-up). After saving, the new password is used for every login. A wrong current password is refused.
- The admin's "Reset password" still works as before (gives a new temporary password).

## v10 - install as an app
- The 4 icon files are now included (icon-192.png, icon-512.png, icon-maskable-512.png, icon-180.png for iPhone). They are made from logo.jpg. Chrome needs them before it shows **Install app** in the 3-dot menu.
- Upload ALL files (the icons too). After upload open the site once, wait a few seconds, then: Chrome menu (3 dots) > **Install app**. The app opens full screen with the Rise Edge logo.
- Also: a floating "Install app" button appears by itself, and Profile has an "Install app" card (iPhone: Share > Add to Home Screen).
- If you installed an older version before, remove it first, then install again to get the new icon.
- `check.html` now also shows if the install files and service worker are ready.
