# Lexora Website

A modern, highly responsive legal and law firm portal application built with React, Vite, TypeScript, Motion, and Tailwind CSS.

## Features & Highlights

- **Hero Section & Dynamic Drawer Menu**: Smooth right-to-left slide-in navigation drawer (`1130px` width) powered by Motion (`motion/react`). Includes backdrop blur and focused background hero blurring when open.
- **Custom Typography & Design**: Typography paired with Oswald (30px Regular for headers) and Montserrat (16px Regular for body/submenus), matching the luxury aesthetic.
- **Media & Press Integration**: Fetches real-time legal news & press articles from **The Guardian Open Platform API**.
- **Responsive Media Carousel**:
  - **Desktop** (1024px+): 3 cards visible
  - **Tablet** (768px - 1023px): 2 cards visible
  - **Mobile** (<768px): 1 card visible
- **Custom Scrollbar**: Elegant gold (`#C5A059`) custom scrollbar styling replacing default browser scrollbars.

---

## Setup & Installation Instructions

1. **Clone or Download the Repository**
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Development Server**:

   ```bash
   npm run dev
   ```

   The development server will run on `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## External APIs Used

### 1. The Guardian Content API

- **Endpoint**: `https://content.guardianapis.com/search`
- **Usage**: Used in `src/components/MediaPress.tsx` to display real-time legal news, press releases, and articles.

---

## How to Get an API Key

1. Visit **The Guardian Open Platform**: [https://open-platform.theguardian.com/access/](https://open-platform.theguardian.com/access/)
2. Register for a free Developer Key.
3. Once generated, add your key to `.env` file in the root directory:
   ```env
   VITE_GUARDIAN_API_KEY=your_actual_guardian_api_key_here
   ```
4. _Note_: By default, if `VITE_GUARDIAN_API_KEY` is not provided, the application falls back to `"test"`, which works out of the box for development.

---

## Known Issues & Notes

1. **The Guardian Test Key Rate Limits**: The default `'-'` key is rate-limited by The Guardian API (approx. 12 calls/minute). If the rate limit is exceeded, an error state UI with a "Try Again" retry button will appear.
2. **Ad-Blocker Interference**: Some strict ad-blockers may flag requests to external media APIs. If news fails to load, disable ad-blockers for local testing or use the retry button.
3. **Smooth Slide Drawer**: On smaller viewports (<1130px), the navigation menu dynamically scales to 100% viewport width to ensure optimal readability on mobile and tablet devices.
