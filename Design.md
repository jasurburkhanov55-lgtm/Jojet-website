# Jojet International University Website Design

## Overview
- **Motion Style**: Professional academic elegance with smooth transitions
- **Animation Intensity**: Moderate - Professional and smooth
- **Technology Stack**: React + TypeScript + Vite + Tailwind CSS

## Brand Foundation

### Colors (from original website)
- **Primary Blue**: #1b3b86 (main brand color)
- **Secondary Blue**: #2a4a9c
- **Accent Gold**: #996600
- **Light Gold**: #c9a227
- **White**: #FFFFFF
- **Black**: #000000
- **Gray Dark**: #333333
- **Gray Medium**: #666666
- **Gray Light**: #999999
- **Background Gray**: #f7f7f7
- **Border Gray**: #ebebeb

### Typography
- **Primary Font**: 'Open Sans', sans-serif
- **Heading Font**: 'Noto Serif', serif
- **Body Size**: 14px
- **Heading Sizes**: H1: 32px, H2: 24px, H3: 18px

### Core Message
Jojet International University - Excellence in Education, Innovation in Research

---

## Website Structure

### Pages
1. **Home** - Hero, Statistics, News, Quick Links, Campus Gallery
2. **About** - University Overview, Vision, History, Leadership
3. **Academics** - Programs, Faculties, Research
4. **Admissions** - How to Apply, Requirements, Deadlines
5. **Student Life** - Campus, Housing, Activities
6. **News & Events** - Latest News, Upcoming Events
7. **Contact** - Contact Form, Locations, Map

### Languages
- English (EN)
- Uzbek (UZ)
- Russian (RU)

---

## Global Motion System

### Animation Timing
- **Fast**: 200ms (hover states)
- **Normal**: 300ms (transitions)
- **Slow**: 500ms (page transitions)

### Easing Functions
- **Standard**: cubic-bezier(0.4, 0, 0.2, 1)
- **Enter**: cubic-bezier(0, 0, 0.2, 1)
- **Exit**: cubic-bezier(0.4, 0, 1, 1)

---

## Section 1: Header/Navigation

### Layout
- Fixed position header
- Top bar with language switcher and quick links
- Main navigation with dropdown menus
- Mobile hamburger menu

### Content
- Logo: Jojet International University
- Nav Items: Home, About, Academics, Admissions, Student Life, News, Contact
- Language Switcher: EN | UZ | RU

### Motion
- Header becomes sticky on scroll
- Dropdown menus slide down smoothly
- Mobile menu slides in from right

---

## Section 2: Hero

### Layout
- Full-width banner
- Overlay gradient
- Call-to-action buttons

### Content
- Headline: "Shaping Future Leaders"
- Subheadline: "World-class education for a global community"
- CTA: "Apply Now", "Learn More"

### Images
**Hero Background:**
- Resolution: 1920x600
- Aspect Ratio: 16:5
- Transparent Background: No
- Visual Style: Modern university campus
- Subject: University building with students
- Color Palette: Blue sky, modern architecture
- Generation Prompt: "Modern international university campus building, students walking, blue sky, professional photography, wide angle shot, natural lighting, contemporary architecture"

---

## Section 3: Statistics

### Layout
- 4-column grid on desktop
- 2-column on tablet
- 1-column on mobile

### Content
- 15+ Programs
- 5000+ Students
- 300+ Faculty
- 50+ Countries

### Motion
- Numbers count up when in view
- Staggered fade-in animation

---

## Section 4: News Section

### Layout
- Featured news card (large)
- 4 smaller news cards in grid

### Content
- Section Title: "Latest News"
- News items with images, titles, dates

### Images
**News Images:**
- Resolution: 800x600
- Aspect Ratio: 4:3
- Transparent Background: No
- Visual Style: Event photography, campus life

---

## Section 5: Quick Links

### Layout
- User type selector tabs
- Grid of quick link buttons

### Content
- Question: "Are you...?"
- User Types: Prospective Student, Current Student, Faculty, Alumni
- Links: Admissions, Programs, Library, Student Portal, etc.

---

## Section 6: Campus Gallery

### Layout
- Image carousel/slider
- Thumbnail navigation
- Location captions

### Content
- Campus images with descriptions
- Navigation buttons

### Images
**Campus Images:**
- Resolution: 1200x600
- Aspect Ratio: 2:1
- Transparent Background: No
- Visual Style: Campus photography

---

## Section 7: Footer

### Layout
- 4-column grid
- Logo and social links
- Campus addresses
- Quick links

### Content
- Logo
- Copyright
- Campus addresses
- Social media links
- Quick navigation links

---

## Page Designs

### About Page
- Hero banner
- University overview text
- Vision/Mission section
- History timeline
- Leadership profiles

### Academics Page
- Program listings
- Faculty information
- Research highlights

### Admissions Page
- Application process
- Requirements
- Important dates
- Online application link

### Student Life Page
- Campus facilities
- Housing information
- Student activities
- Support services

### News & Events Page
- News listing
- Events calendar
- Pagination

### Contact Page
- Contact form
- Campus locations with maps
- Contact information

---

## Technical Implementation

### State Management
- useState for page navigation
- useState for language selection
- useState for mobile menu

### Animations
- CSS transitions for hover effects
- Framer Motion for page transitions (optional)
- Intersection Observer for scroll animations

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus indicators
- Reduced motion support
