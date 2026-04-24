# Arid Baker: The Smart Sourdough Hydration Assistant

## Project Overview

Baking sourdough in the desert is a completely different game. **Arid Baker** is a specialized React application designed to take the guesswork out of fermentation in high-temperature, low-humidity environments. By integrating real-time weather data, the app helps bakers adjust hydration levels and fermentation schedules to ensure a perfect loaf, even in the 100°F+ Arizona heat.

This project serves as my Final Engineering Project, demonstrating my ability to build a data-driven frontend that solves a highly specific, real-world environmental problem.

## The Tech Stack

- **Frontend:** React, React Router (HashRouter), Context API (for Temperature Unit state).

- **API Integration:** OpenWeatherMap API for live environmental tracking.

- **Routing:** Configured with HashRouter to ensure seamless navigation on GitHub Pages without 404 errors.

- **Design:** Built using a mobile-first approach, following BEM methodology to ensure a clean and scalable CSS architecture.

## Key Features

- **Environmental Awareness:** The app automatically detects location and fetches live temperature and humidity to inform your baking session.

- **Dynamic Hydration Logic:** Provides specific guidance based on current atmospheric conditions, helping to prevent the dough from drying out in arid climates.

- **Unit Toggle:** A global temperature toggle (F°/C°) managed via React Context, ensuring your preferences persist across the entire application.

- **Resource Library:** A dedicated section for sourdough fundamentals and specialized tips for high-heat baking.

- **Seamless Navigation:** Fully functional routing for Recipes, Resources, and optimized for static hosting.

## Deployment

This project is deployed using GitHub Pages.

[https://thetanos24.github.io/se_final_project/](https://thetanos24.github.io/se_final_project/)

## How to Run Locally

1. Clone the repository.

2. Install dependencies using `npm install`.

3. Start the development server with `npm run dev`.

4. _Note: You will need an OpenWeatherMap API key saved in a .env file to fetch live weather data._

## Links

- [GitHub Repository](https://github.com/thetanos24/se_final_project)
