# 🍴Forkify Application
Forkify allows users to search for over 1,000,000 recipes, adjust serving sizes, bookmark favorites, and even upload their own custom recipes, currently not an API but a Json file in the data folder. This application simulates API calls.

## ✨Features
- Recipe Search: Search for thousands of recipes from a Json file.
- Dynamic Servings: Adjust the number of servings, and all ingredient quantities update automatically.
- Bookmarking: Save your favorite recipes to local storage for future access.
- Custom Recipe Upload: Users can add their own recipes, which are then integrated into the app's UI and marked as user-generated.
- Advanced UI/UX: Features smooth transitions, error handling, loading spinners, and pagination.
- Architecture: Built using the MVC (Model-View-Controller) design pattern to ensure clean, maintainable, and scalable code.

## 🛠️Tech Stack
- JavaScript (ES6+): Modern syntax, including async/await, modules, and classes.
- Sass (SCSS): Advanced CSS for styling.
- Parcel: Used as the module bundler for development and production builds.
- Fracty: For handling fraction conversions in ingredient quantities.
- Regenerator Runtime: To support async/await in older browsers.

## 🚀Getting Started
Follow these instructions to set up the project locally.

### 1. Prerequisites
Make sure you have Node.js installed on your system.

### 2. Installation
Clone the repository:
```shell
git clone https://github.com/szabolcsstefan/forkify.git
```
Navigate to the project folder:
```shell
cd forkify
```
Install the dependencies:
```shell
npm install
```
### 3. Usage
To start the development server with Parcel:
```shell
npm run start
```
The app will be available at http://localhost:1234.

(Optional) To build the project for production:
```shell
npm run build
```

## 🧠Core Concepts Learned
- MVC Architecture: Decoupling the business logic (Model) from the UI (View) using a Controller.
- Publisher-Subscriber Pattern: Implementing a clean way for the View to communicate with the Controller without direct dependencies.
- Local Storage: Persisting user data (bookmarks) locally in the browser.
