# AI Operator Archive V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Zhang Xu's personal site into a Sac-inspired AI Operator Archive with artistic hero visual, particle cursor, magazine sections, code-editor build motion, and scroll impact.

**Architecture:** Keep the existing Vite + React single-page architecture. Modify the homepage and global theme only, add one project-local hero image asset, and keep GitHub Pages root publishing flow unchanged.

**Tech Stack:** React, Vite, Tailwind CSS v4, framer-motion, lucide-react, static PNG hero asset.

---

### Task 1: Project Asset

**Files:**
- Create: `silence_digital_nexus_deploy/client/public/images/ai-operator-archive-hero.png`

- [ ] Copy generated hero image into the Vite public image folder.

Run:
```bash
cp /Users/aaronz/.codex/generated_images/019f1c1c-72dd-7773-a5cd-cff092504790/ig_0ecabe874f4f7fd2016a483ff220948195b4639999cb004c03.png silence_digital_nexus_deploy/client/public/images/ai-operator-archive-hero.png
```

Expected: file exists and can be referenced at `/images/ai-operator-archive-hero.png`.

### Task 2: Homepage Rewrite

**Files:**
- Modify: `silence_digital_nexus_deploy/client/src/pages/Home.tsx`

- [ ] Replace current homepage with these units:
  - Hero: giant serif `Zhang Xu`, particle-reactive portrait panel, archive meta labels.
  - About: dossier card plus signal table.
  - Writing: one featured note plus ranked notes with right-top tags.
  - Build: terminal/editor panel, commit timeline, progress meter.
  - Impact: dark cinematic section.
  - Contact: large `Let's build.` panel.

Expected: homepage content matches Zhang Xu's AI one-person company OS positioning.

### Task 3: Layout Navigation

**Files:**
- Modify: `silence_digital_nexus_deploy/client/src/components/Layout.tsx`

- [ ] Update navigation anchors to match the new sections: About, Writing, Build, Contact.
- [ ] Keep mode switcher, but remove any old tool-navigation language.

Expected: header scrolls to the new archive sections.

### Task 4: Global Theme

**Files:**
- Modify: `silence_digital_nexus_deploy/client/src/index.css`

- [ ] Add archive tokens: paper background, serif display class, fine-grid texture, particle animation, breathing section reveal, code-editor styles.
- [ ] Preserve accessibility: readable text, focus states, reduced motion.

Expected: visual system supports paper archive, magazine typography, dark impact band, and cursor particles.

### Task 5: Build And Verify

**Files:**
- Modify root publish artifacts after build: `index.html`, `assets/*`

- [ ] Run:
```bash
cd silence_digital_nexus_deploy
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/vite build
```

Expected: both commands exit 0.

- [ ] Sync build output:
```bash
cp -R silence_digital_nexus_deploy/dist/public/. .
```

Expected: root `index.html` references the new hash assets.

- [ ] Browser verify desktop and mobile against local root server.

Expected: title renders, hero image loads, no console errors, page remains usable on mobile.
