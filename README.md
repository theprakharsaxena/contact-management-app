# Contact Management App with Charts and Maps

## Description

This app is a comprehensive contact management system that allows users to **add, view, edit, and delete contacts**. Additionally, it provides a **dashboard with charts** that track COVID-19 data, including a **line graph showing case fluctuations** and an interactive **map with markers** displaying country-specific COVID-19 statistics.

The app is designed with a user-friendly interface and is responsive across devices. It includes a collapsible sidebar for easy navigation between contacts and the dashboard. This project demonstrates how to integrate powerful technologies like Redux for state management, React Query for efficient data fetching, and Leaflet for interactive maps.

## Features

- Add, view, edit, and delete contacts in a simple, intuitive interface
- COVID-19 dashboard with:
  - A **line graph** showing daily case fluctuations globally
  - An interactive **map** with markers that display the total cases, recovered cases, and deaths by country
- Collapsible sidebar for navigation (mobile-friendly)
- Persistent state using `redux-persist` to retain contact information even after page reloads

## Technologies Used

- **ReactJS** - Frontend framework
- **TypeScript** - Strongly-typed programming language for better development experience
- **TailwindCSS** - Utility-first CSS framework for styling
- **React Router v6** - For routing between contact management and dashboard views
- **React Query (Tanstack Query)** - For data fetching and caching API calls
- **Redux** - For state management
- **redux-persist** - To persist the state across page reloads
- **Leaflet** - For interactive maps
- **Chart.js** - For rendering charts and graphs

## API Endpoints

The app fetches COVID-19 data from public APIs, specifically:

- **Worldwide Data:** [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- **Country-specific Data:** [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- **Historical Data (cases with dates):** [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## How to Run

### Steps to Download and Run the App Locally:

1. **Download the ZIP File:**

   - Go to the GitHub repository for this project.
   - Click the **"Code"** button, then select **"Download ZIP"** to download the repository as a ZIP file.

2. **Extract the ZIP File:**

   - Unzip the downloaded file and extract the contents to your preferred directory.

3. **Navigate to the Project Directory:**

   Open a terminal or command prompt and navigate to the extracted project folder:

   ```bash
   cd contact-management-app
   ```

4. **Install Dependencies:**

   Before running the app, make sure you install the necessary dependencies. Run the following command:

   ```bash
   npm install
   ```

5. **Start the Development Server:**

   Once all dependencies are installed, you can start the development server:

   ```bash
   npm start
   ```

6. **Open the App:**

   After running `npm start`, the app will automatically open in your default browser. If not, you can manually open it by navigating to `http://localhost:3000`.

## Application Structure

- **Contacts Page:** Manage contacts by adding, editing, or deleting entries. All changes are stored persistently, even after reloading the page.
- **Dashboard Page:** Displays COVID-19 data with a line graph and interactive map, both dynamically updated with data from the APIs.

## Additional Features

- **Responsive Design:** The app is fully responsive, with a collapsible sidebar for easy navigation on mobile devices.
- **Persistent State:** Contact data persists even after page reloads using `redux-persist`, allowing users to continue where they left off.
- **Interactive Map:** Uses `Leaflet` for displaying COVID-19 statistics on an interactive map with custom markers.
