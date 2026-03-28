# Kindera – Child Therapist & Psychologist Website
### Angular 20 + Bootstrap 5.3

A pixel-faithful clone of the Kindera ThemeForest template, built with Angular 20 standalone components and Bootstrap 5.3.

---

## 🎨 Theme Colors

| Token | Hex | Usage |
|---|---|---|
| `--kindera-primary` | `#FF7A3D` | Buttons, accents, highlights |
| `--kindera-secondary` | `#FFBA49` | Stars, warm accents |
| `--kindera-accent` | `#5DC4C4` | Teal highlights |
| `--kindera-purple` | `#8B7FD4` | Soft purple accents |
| `--kindera-pink` | `#F47BBF` | Pink accents |
| `--kindera-green` | `#6CC97B` | Green accents |
| `--kindera-light` | `#FFF8F3` | Warm background |
| `--kindera-dark` | `#2D2D3A` | Footer, headings |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ → https://nodejs.org
- Angular CLI 20

### 1. Install Angular CLI
```bash
npm install -g @angular/cli@latest
```

### 2. Install Dependencies
```bash
cd Macawscdc
npm install
```

### 3. Start Dev Server
```bash
ng serve
```

Open → **http://localhost:4200**

### 4. Build for Production
```bash
ng build
```
Output goes to `dist/Macawscdc/`

---

## 📁 Project Structure

```
Macawscdc/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Sticky navbar with scroll effect
│   │   │   ├── hero/            # Hero section with floating cards
│   │   │   ├── about/           # About section with stats
│   │   │   ├── services/        # 6 service cards + CTA banner
│   │   │   ├── team/            # 4 therapist cards
│   │   │   ├── testimonials/    # 6 parent reviews + rating summary
│   │   │   ├── faq/             # Interactive accordion FAQ
│   │   │   ├── contact/         # Booking form + contact info
│   │   │   └── footer/          # Full footer with newsletter
│   │   ├── pages/
│   │   │   └── home/            # Home page (assembles all sections)
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles.css               # Global styles + CSS variables
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🧩 Sections Included

| Section | Component | Features |
|---|---|---|
| Navbar | `app-navbar` | Sticky, scroll-aware, mobile hamburger |
| Hero | `app-hero` | Animated blobs, floating cards, stats |
| About | `app-about` | Image card with badges, feature list |
| Services | `app-services` | 6 cards + gradient CTA banner |
| Team | `app-team` | 4 therapist cards with social links |
| Testimonials | `app-testimonials` | 6 reviews + rating summary |
| FAQ | `app-faq` | Click-to-expand accordion |
| Contact | `app-contact` | Booking form with success state |
| Footer | `app-footer` | Newsletter, links, badges |

---

## 🛠️ Customization

### Change colors
Edit `src/styles.css` CSS variables at the top:
```css
:root {
  --kindera-primary: #FF7A3D;   /* Change this for a new brand color */
}
```

### Add real images
Replace the emoji placeholders in components with `<img>` tags:
```html
<img src="assets/images/hero-child.jpg" alt="Child therapy" class="img-fluid rounded-xl">
```

### Add a real backend
The contact form in `contact.component.ts` uses `submitForm()` — wire it to your API:
```typescript
submitForm() {
  this.http.post('/api/contact', this.form).subscribe(() => {
    this.submitted = true;
  });
}
```

---

## 📦 Dependencies

- **@angular/core** ^20.0.0
- **bootstrap** ^5.3.3
- **bootstrap-icons** ^1.11.3
- **Google Fonts**: Nunito + Quicksand

---

## 📄 License
Built for educational/portfolio use. Original design by Kindera on ThemeForest.
