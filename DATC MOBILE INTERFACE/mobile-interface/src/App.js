import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import StartingPage from "./pages/StartingPage";
import UserProfile from "./pages/UserProfile";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<StartingPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<UserProfile />} />
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
// serviceWorkerRegistration.register();
// reportWebVitals();
export default App;
