import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Insight from "./pages/Insight";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import InsightPlacement from "./components/InsightsComponents/InsightPlacement";
import InsightInternship from "./components/InsightsComponents/InsightInternship";
import Footer from "./components/HomeComponents/Footer";
import Contact from "./components/HomeComponents/Contact";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/Admin_Dashboard";
import AddPlacementCompany from './pages/AddPlacementCompany';
import PlacementRecuiter from "./components/PlacementRecruiters/PlacementRecuiter";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/admin_dashboard" exact element={<AdminDashboard />}></Route>
        <Route path="/add_placement_company" exact element={<AddPlacementCompany />}></Route>
        <Route path="/admin_register" exact element={<AdminRegister />}></Route>
        <Route path="/admin_login" exact element={<AdminLogin />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/placementr"
            exact
            element={<PlacementRecuiter />}
          ></Route>
          <Route path="/insight" exact element={<Insight />}></Route>
          <Route
            path="/insight/placement"
            exact
            element={<InsightPlacement />}
          ></Route>
          <Route
            path="/insight/internship"
            exact
            element={<InsightInternship />}
          ></Route>
          <Route path="/stats" exact element={<Stats />}></Route>
        
          <Route path="*" exact element={<>Not found</>}></Route>
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}
