# Mahboob — محبوب

The official website for **Mahboob**, a streetwear label built around kindness. *Mahboob* is Arabic for "beloved."

Collection 1 drops **November 13, 2026 — World Kindness Day.**

## What's in this repo

```
mahboob-website/
├── index.html                 The whole site (one page)
├── css/styles.css             Colors, fonts and layout
├── js/main.js                 Countdown, colorway/size pickers, bag, FAQ, waitlist
├── assets/
│   ├── mahboob-wordmark.png   The محبوب logo
│   └── favicon.svg            Browser tab icon
└── .nojekyll                  Tells GitHub Pages to serve files as-is
```

It's plain HTML, CSS and JavaScript — no build step, no installs.

## Put it online with GitHub Pages

1. Create a new **public** repository on GitHub (for example `mahboob-website`).
2. Upload everything in this folder to the repository (drag and drop on the repo page, or use `git push`).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two, your site is live at `https://YOUR-USERNAME.github.io/mahboob-website/`.

To use your own domain (like `mahboob.com`), add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Preview it on your computer

Double-click `index.html` to open it in your browser.

## Before you launch

Search the site for `[` to find every placeholder that still needs real content:

- [ ] Founder story and name (“Why we started”)
- [ ] Giving percentage and the named act of kindness it funds
- [ ] Size chart
- [ ] Shipping regions, rates and delivery times
- [ ] Returns and exchange policy
- [ ] Instagram and TikTok handles (footer)
- [ ] Contact email
- [ ] Privacy policy and terms of service pages

## What's a demo and what's real

The **bag** and **waitlist** work on the page but don't save anything yet:

- **Checkout:** connect a store — for example a Shopify *Buy Button*, or move the site onto Shopify.
- **Waitlist:** connect an email tool such as Klaviyo, Mailchimp or Formspree and point the form in `index.html` at it.

The launch countdown and "out now" switch happen automatically based on the date in `js/main.js` (`2026-11-13`).

## Brand colors

| Name | Hex |
| --- | --- |
| Mahboob red | `#D8183B` |
| Print pink | `#F9ACB9` |
| Ink | `#141414` |
| Paper | `#ECE9E4` |

Fonts: Big Shoulders Display (headlines), Work Sans (body), Noto Kufi Arabic (Arabic) — all from Google Fonts.

---

© 2026 Mahboob. All rights reserved. The Mahboob name and محبوب wordmark are brand assets and are not licensed for reuse.
