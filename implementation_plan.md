# Implementation Plan - Single Page Portfolio

## Goal Description
Refactor the existing multi-page portfolio into a single-page application (SPA) with smooth scrolling sections. Integrate the user's provided profile image with professional edits.

## Proposed Changes

### Assets
- **Image**: Process `uploaded_image_1764028194240.jpg` to create a professional profile picture and save as `src/assets/profile.jpg`.

### Components

#### [MODIFY] src/components/Navbar.jsx
- Replace `NavLink` (react-router) with anchor links (`#home`, `#projects`, `#about`).
- Implement smooth scrolling behavior (CSS `scroll-behavior: smooth` in global styles or JS handler).

#### [MODIFY] src/pages/Home.jsx
- Structure:
  - `<section id="home">` (Hero)
  - `<section id="projects">` (Projects Component)
  - `<section id="about">` (About Component)
- Import `Projects` and `About` components directly.

#### [MODIFY] src/pages/Projects.jsx & src/pages/About.jsx
- Ensure these components export content that fits well within a section.
- Remove page-specific container styles that might conflict with the single-page layout (e.g., full-screen height if not needed).

#### [MODIFY] src/App.jsx
- Remove `Routes` and `Route` for subpages.
- Render `Layout` -> `Home`.

### Global Styles
- Add `html { scroll-behavior: smooth; }` to `index.css`.
- Adjust padding/margins to account for fixed navbar during scrolling.

## Verification Plan
- **Manual**:
  - Click Navbar links -> Scroll to correct section.
  - Verify Profile Image appearance.
  - Check Mobile responsiveness.
