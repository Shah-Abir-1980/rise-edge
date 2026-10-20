# Rise Edge Academy — setup (phone only, free)

Needs: GitHub account + Google account. No computer, no card. (Firebase "Spark" plan only.)

## 1. GitHub
1. github.com → Sign up → New repository → name `rise-edge`, Public → Create.
2. Unzip this file on your phone (Files app → tap zip → Extract).
3. In the repo: Add file → Upload files → choose index.html, app.js, config.js, firestore.rules → Commit changes.

## 2. Firebase project
1. console.firebase.google.com → Add project → name it → turn Google Analytics off → Create.
2. Build → Authentication → Get started → Email/Password → Enable → Save.
3. Build → Firestore Database → Create database → Production mode → pick a nearby location → Enable.
4. Firestore → Rules tab → delete everything → paste all text of firestore.rules → Publish.
5. Project settings (gear) → Your apps → Web icon `</>` → nickname → Register app → copy apiKey, authDomain, projectId, appId.

## 3. Connect
1. GitHub → open config.js → pencil icon → replace each PASTE_HERE → Commit.
2. Repo → Settings → Pages → Branch `main`, folder `/ (root)` → Save. After 1–2 minutes your link shows: https://YOURNAME.github.io/rise-edge/

## 4. First use
1. Open the link → "First-time setup (admin only)" → enter your name and a password. Username for login is `admin`.
2. Students tab → Add batch → Add student. The app shows each student's roll (username) and password. Give it to the student; they must change it at first login.
3. Browser menu → Add to Home Screen.

## Not included yet
Teacher login, homework, requests, progress report PDF, MCQ/CQ, notice/routine, Records viewer, forgot-password. Firebase Storage and Cloud Functions need a paid plan, so CQ photos and automatic email are done differently later.
