# 🚀 Our React Application

Welcome to our React-based web application! This app is built using a modern tech stack featuring React, React Router, and sleek UI components that together create a smooth, user-friendly experience. Below you'll find an overview of our app, key features, and how to get started. Let's dive in! 👇

---

## 🏆 Features

- Dynamic Routing: Multiple pages like Login, Signup, Dashboard, Pinboard, Playlistboard, and more!
- State Management: Using React hooks like useState and useEffect for efficient state handling.
- Form Handling: Integrated forms with validation through React Hook Form and Zod schema.
- UI Components: Reusable, consistent UI components for layout, inputs, buttons, and cards.
- Responsive Design: Built with Tailwind CSS to provide an amazing mobile-first experience.
- Error Handling: Custom 404 page and route guards to ensure a polished user experience.

---

## 📍 Key Pages

- Landing Page (/): The entry point of our app where it all begins! 🎉
- Login Page (/login): User login form with email and password validation.
- SignUp Page (/signup): The page for creating an account with a strong password policy 🔒.
- Dashboard (/app/dashboard): The main dashboard where users can manage their data and features 📊.
- Pinboard (/app/pins): A page where users can pin their favorite links 🖇.
- Playlistboard (/app/playlists/:playlistId): A dynamic page to view and manage individual playlists 🎶.

---

## 🛠 Technologies Used

- React: For building dynamic, component-based UIs. ⚛️
- React Router: Declarative routing for smooth navigation 🔀.
- Tailwind CSS: A utility-first CSS framework for a responsive and modern UI 💅.
- React Hook Form: Handling forms efficiently with validation 📋.
- Zod: Type-safe schema validation library 🔐.
- React Icons: Adding beautiful vector icons to enhance the UI 🌟.

---

## 📝 How to Run

To get our application up and running locally, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/CSC105-2024/G17-Lynk.git
   cd G17-Lynk
   npm install
   npm run dev
   ```

🔑 Features in Detail
🎨 Theming
Our app supports both light and dark themes! 🌞🌙

The theme can be dynamically toggled using the ThemeProvider component, making it easy for users to choose their preferred mode.

🔒 Authentication
Login and Signup pages handle user authentication 🔑.

Form validation ensures that users have strong passwords, including:

Uppercase letters

Numbers

Special characters

This ensures secure account creation and login.

🔗 Pinboard & Playlistboard
Pinboard: Users can pin their favorite links, which are dynamically displayed in a neat list 📌.

Playlistboard: Users can view and manage playlists, with dynamic routing based on playlistId 🎧.

⚠️ Error Handling
Our app includes a custom 404 Not Found page that informs users if they try to access an undefined route ❌.

🔄 Routing
React Router is used for seamless navigation between pages. Key routes include:

/app/dashboard: Main dashboard 🏠

/app/pins: Pinboard for favorite links 📍

/app/playlists/:playlistId: Dynamic playlist page 🎼

/login: User login page 🔑

/signup: Account creation page 📝

\*: Catches all unmatched routes and displays the 404 page 🚫

🤝 Contributing
We love contributions! If you find any bugs or have suggestions for improvements, feel free to help us enhance the project by following these steps:

Fork the repository 🔄.

Create a feature branch (git checkout -b feature-branch) ✨.

Commit your changes (git commit -am 'Add new feature') 📜.

Push to your branch (git push origin feature-branch) 🚀.

Open a pull request to merge your changes into our project 👥.

Thanks for checking out our project! 🙏 If you have any questions or feedback, feel free to reach out. Let's build something amazing together! 🚀
