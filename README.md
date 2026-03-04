# 🚖 Cabsfortirupatitours — Angular 19 Website

A modern, fully responsive cab booking website built with **Angular 19** (standalone components, signals, lazy loading).

## ✨ Design Highlights

- **Aesthetic**: Refined luxury with Saffron & Crimson palette — inspired by Tirupati's spiritual heritage
- **Typography**: `Playfair Display` (headings) + `DM Sans` (body) — elegant pairing
- **Animations**: CSS-only slide hero, hover card reveals, smooth transitions
- **Unique Design Features**:
  - Auto-sliding hero with 3 cinematic gradient slides
  - Inline cab booking bar with pickup/drop/date fields
  - Animated stats bar (10+ years, 5000+ customers, 24/7, 50+ vehicles)
  - Vehicle fleet with filter tabs (All / Sedan / SUV / Minivan)
  - 6 service cards with hover color reveals
  - Pre-planned tour packages with gradient headers
  - Testimonials grid with star ratings
  - Booking form with success state animation
  - Floating WhatsApp + Call buttons
  - Dark footer with route links

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20+ 
- **npm** 10+

### Installation

```bash
# 1. Navigate to the project folder
cd tirupati-balaji-cabs

# 2. Install dependencies
npm install

# 3. Start development server
npm start
# → Open http://localhost:4200
```

### Build for Production

```bash
npm run build
# Output in /dist/tirupati-balaji-cabs/browser/
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Sticky navbar with mobile menu
│   │   ├── hero/            # Auto-slideshow hero + booking bar
│   │   ├── services/        # 6 service cards
│   │   ├── about/           # About section with visual cards
│   │   ├── fleet/           # Vehicle grid with filter tabs
│   │   ├── packages/        # Tour packages grid
│   │   ├── testimonials/    # Customer reviews + CTA banner
│   │   ├── contact/         # Booking form with validation
│   │   └── footer/          # Multi-column footer
│   ├── pages/
│   │   ├── home/            # All sections composed
│   │   ├── services-page/   # Services + Fleet + Contact
│   │   ├── packages-page/   # Packages + Testimonials + Contact
│   │   └── contact-page/    # Contact form + Map
│   ├── app.component.ts     # Root with floating CTAs
│   ├── app.config.ts        # Angular providers
│   └── app.routes.ts        # Lazy-loaded routes
├── styles.scss              # Global design system (CSS variables, utilities)
└── index.html               # Google Fonts + FA Icons loaded
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--saffron` | `#e07b39` | Primary brand color |
| `--saffron-dark` | `#c8922a` | Gradient endpoints |
| `--crimson` | `#8b1a1a` | Accent for packages |
| `--charcoal` | `#1a1a2e` | Dark backgrounds |
| `--ivory` | `#fdf8f0` | Section backgrounds |

---

## 📞 Contact Details (Pre-filled in site)

- **Phone**: +91 96666 50595
- **Email**: cabsfortirupatitours@gmail.com
- **Address**: Motor Works Colony, Padmavathi Puram, Tirupati, AP 517501

---

## 🛠 Angular 19 Features Used

- ✅ Standalone components (no NgModule)
- ✅ Signals (`signal()`, `.update()`)  
- ✅ New `@for`, `@if`, `@else` control flow syntax
- ✅ Lazy-loaded routes (`loadComponent`)
- ✅ `withViewTransitions()` for smooth page changes
- ✅ `HostListener` for scroll events
- ✅ `FormsModule` with template-driven forms

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| < 480px | Single column, call button icon only |
| < 600px | Form columns collapse |
| < 768px | Mobile nav, hero adjusts |
| < 900px | 2-column grid → single column |
| 1200px+ | Full desktop layout |

---

*Built with ❤️ for Cabsfortirupatitours*
