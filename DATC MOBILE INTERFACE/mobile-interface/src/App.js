import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import StartingPage from "./pages/StartingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<StartingPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
