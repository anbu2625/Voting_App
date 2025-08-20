import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VotingPage from "./pages/VotingPage";
import ResultsPage from "./pages/ResultsPage";
import { VoteProvider } from "./context/VoteContext";
import "./styles/App.css";

function App() {
  return (
    <VoteProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/vote">Vote</Link>
          <Link to="/results">Results</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vote" element={<VotingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </VoteProvider>
  );
}

export default App;
