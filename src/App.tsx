import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ContactsPage from "./pages/ContactsPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex items-start">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
