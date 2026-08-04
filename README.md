# VANiL Games website — visual edition

Open `index.html` locally to preview the website.

## Main pages
- `index.html` — company homepage
- `games.html` — game catalogue
- `air-domination.html` — complete Air Domination presentation
- `contact.html` — contact page

## Rules PDFs
Add these files to `assets/rules/`:
- `air-domination-rules-en.pdf`
- `air-domination-rules-cs.pdf`
- `air-domination-rules-de.pdf`

The download buttons are already linked to those filenames.

## Video behaviour
All embedded videos are muted, looped and controlled by the browser's Intersection Observer. They start when approximately 45% visible and pause off-screen. This avoids several videos playing at once and works on mobile without forcing fullscreen.

## Hosting
This is a static website and can be hosted on Netlify, Cloudflare Pages, GitHub Pages or ordinary web hosting. Upload the complete folder without changing the internal structure.


Version 4 updates:
- Official VANiL logos added.
- English and Czech rules PDFs included.
- English, Czech and German YouTube rules videos embedded and linked.
- German PDF placeholder remains until the file is supplied.
- Main portrait-format video now displays without cropping.

## Best local preview (including YouTube)
On Windows, double-click `START-WEBSITE.bat`. This opens the website through `http://localhost:8080`, which allows embedded YouTube players to work more reliably than opening the HTML through a `file://` address. Python must be installed for this preview helper. On normal web hosting, the YouTube players work directly.


V7 updates: larger box previews and statistics images, animated mission-card rotation, and aircraft video moved beside the fighter heading.


V8 updates: redesigned Air Domination hero using EFKO Side Flight and Cover Air Domination, added VANiL hover video, expanded board component details and box views, moved token video to medal section, updated company stats/languages, catalogue description, and battlefield copy.


V13 updates: homepage studio video, catalogue wording update, and direct Alza.cz purchase link.

V14: Updated homepage hero image and title; studio animation plays once with replay button.

V17: Added production-line homepage hero, reduced hero headline by 30%, and added a compact production-stack image beneath the studio video.

V18 updates: three-line homepage headline, compact paired current/future game showcase, and German rules flag image.
