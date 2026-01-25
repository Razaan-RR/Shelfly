# Shelfly

## Project Description
Shelfly is a modern, responsive web application built with Next.js and Firebase that allows users to explore and browse curated items/books. It features smooth animations, a beautiful UI, and Firebase Authentication for login. Users can view items and navigate seamlessly between pages.

---

## Route Summary

| Route         | Description                                | Auth Required |
| ------------- | ------------------------------------------ | ------------- |
| `/`           | Landing page with hero, features, steps, testimonials, FAQ, CTA | No            |
| `/login`      | Login page using Firebase Auth             | No            |
| `/items`      | Browse all items                            | No            |
| `/items/[id]` | Item detail page                             | No            |

---

## Implemented Features

- **Responsive Navbar:** Fixed top, collapsible on mobile, shows user icon when logged in.  
- **Hero Section:** Engaging landing section with title, subtitle, and CTA.  
- **Features Section:** Highlights app features with animations.  
- **Steps Section:** Interactive steps on how Shelfly works.  
- **Testimonials Section:** Animated testimonials with background shapes.  
- **FAQ Section:** Accordion-style frequently asked questions.  
- **Items Page:** Displays a grid of items/cards with images, names, descriptions, and prices.  
- **Item Details Page:** Dynamic route for each item with full details.  
- **Firebase Authentication:** Email/password login with real-time UI changes and logout.  
- **Animations:** Smooth animations using Framer Motion throughout the site.  
- **Mobile-first Design:** Fully responsive and visually appealing.

---

## Brief Feature Explanation

- **Authentication:** Users log in with Firebase Auth; logged-in users see a profile icon with logout option.  
- **Items Display:** Items are displayed with hover effects, dynamic scaling, and smooth transitions.  
- **Responsive Layout:** All sections are designed to look good on mobile, tablet, and desktop.  
- **Dynamic Routes:** Clicking on an item navigates to a dynamic page showing full item details.  
- **Reusable Components:** Sections like Hero, Steps, Testimonials, and FAQ are built as reusable components.

---

## Technologies Used

- Next.js 16 (App Router)  
- React 18  
- Tailwind CSS  
- Framer Motion (Animations)  
- Firebase Authentication  
- React Icons  

---

## Demo Login

Use these credentials for testing:

- Email: `demo@shelfly.com`  
- Password: `demo1234`  

---

