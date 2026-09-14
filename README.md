````md
# Dev Stack Builder

Dev Stack Builder is a responsive React and TypeScript web application that helps developers explore different technologies and build their own development stack.

Users can browse technologies by category, view their details, and add technologies to their personal stack. The application also prevents duplicate technologies and multiple selections from the same category.

## Live Demo

Add your live website link here:

https://heroic-lamington-c53031.netlify.app

## GitHub Repository

Add your GitHub repository link here:

https://github.com/AtaulHoqueShahi/assignment-5--PH.git

---

## Features

### 1. Explore Technologies

Users can explore different development technologies including:

- React
- Vue.js
- Svelte
- Next.js
- Node.js
- PostgreSQL
- Redis
- JavaScript
- TypeScript
- Java
- Tailwind CSS
- Docker

Each technology card displays:

- Technology icon
- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge

The technology data is loaded dynamically from a JSON file.

### 2. Build Your Own Stack

Users can add technologies to their personal stack by clicking the **Add to Stack** button.

The application also provides:

- Selected technology count
- Selected technology list
- Remove individual technology
- Remove all technologies
- Duplicate technology prevention
- Category-based selection restriction

Toast notifications are used to provide feedback when technologies are added, removed, or when an invalid selection is attempted.

### 3. Fully Responsive Design

The website is designed to work across different screen sizes.

It includes:

- Responsive desktop layout
- Tablet-friendly layout
- Mobile navigation
- Responsive technology cards
- Mobile-friendly stack section
- Responsive hero and footer

The UI is built using Tailwind CSS with a consistent orange, pink, and violet gradient theme.

---

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- HTML5
- JavaScript
- JSON

---

## React Concepts Used

### Components

The application is divided into reusable components such as:

- `Navbar`
- `Hero`
- `Technologies`
- `TechnologyCard`
- `YourStack`
- `Footer`

Breaking the application into components makes the code easier to maintain and reuse.

### Props

Props are used to pass data and functions from parent components to child components.

For example, `TechnologyCard` receives:

- Technology information
- Selected state
- Function for adding a technology

This allows the card component to remain reusable.

### State

React `useState` is used to manage dynamic data such as:

- Technology list
- Selected stack
- Loading state
- Mobile menu state

Whenever the state changes, React updates the UI automatically.

### useEffect

`useEffect` is used to load the technology data from the JSON file when the application starts.

Example:

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
````

### Event Handling

The application handles different user interactions such as:

* Clicking Add to Stack
* Removing a technology
* Removing all technologies
* Opening and closing the mobile menu

---

## Data Structure

Technology data is stored inside:

```text
public/technologies.json
```

Each technology object contains:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A declarative, component-based JavaScript library.",
  "icon": "https://example.com/react.svg",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

The TypeScript interface for the technology data is:

```ts
export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}
```

---

## Project Structure

```text
Assainment-5/
│
├── public/
│   └── technologies.json
│
├── src/
│   ├── assets/
│   │   ├── logo-text.png
│   │   └── banner-stack.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Technologies.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── YourStack.tsx
│   │   └── Footer.tsx
│   │
│   ├── types/
│   │   └── technology.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## How to Run Locally

### 1. Clone the repository

```bash
gh repo clone AtaulHoqueShahi/assignment-5--PH
```

### 2. Go to the project directory

```bash
cd Assainment-5
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local development URL

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

---

## Main Functionality

### Add Technology

When the user clicks **Add to Stack**, the selected technology is added to the stack.

### Duplicate Prevention

A technology cannot be added more than once.

If the user tries to add the same technology again, a warning notification is displayed.

### Category Restriction

Only one technology from each category can be selected.

For example, if React from the Frontend category is already selected, another Frontend technology cannot be added until React is removed.

### Remove Technology

Users can remove an individual technology from their stack.

### Remove All

The **Remove All** button clears the complete stack.

### Loading State

A loading message is displayed while the technology data is being loaded.

### Toast Notifications

React Toastify is used to show success, warning, and information messages.

---

## Responsive Design

The application is responsive for:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

The technology cards use a responsive grid layout, while the navigation changes into a mobile menu on smaller screens.

---

## Author

**Ataul Hoque Shahi**

Frontend Development Learner

* GitHub: https://github.com/AtaulHoqueShahi
* LinkedIn: https://linkedin.com/in/ataul-hoque-3b787a395

---

## License

This project was created for educational purposes as part of the Programming Hero Assignment 5.

```


```

