import React from "react";
import Candidate from "../components/Candidate";
import { useVotes } from "../context/VoteContext";
import { Link } from "react-router-dom";

export default function VotingPage() {
  const { candidates, totalVotes, leading, resetVotes } = useVotes();

  return (
    <section>
      <h2>Cast Your Vote</h2>
      <p className="meta">
        Total Votes: <strong>{totalVotes}</strong> |
        {" "}Leading: <strong>{leading.label}</strong>
      </p>

      <div className="grid">
        {candidates.map((c) => (
          <Candidate key={c.id} id={c.id} name={c.name} />
        ))}
      </div>

      <div className="actions">
        <Link className="link" to="/results">Go to Results →</Link>
        <button className="btn-outline" onClick={resetVotes}>Reset All</button>
      </div>
    </section>
  );
}

