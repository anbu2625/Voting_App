import React from "react";
import { useVotes } from "../context/VoteContext";
import { Link } from "react-router-dom";

export default function ResultsPage() {
  const { candidates, votes, totalVotes, leading } = useVotes();

  return (
    <section>
      <h2>Results</h2>
      <p className="meta">
        Total Votes: <strong>{totalVotes}</strong> |
        {" "}Leading: <strong>{leading.label}</strong>
      </p>

      <ul className="list">
        {candidates.map((c) => (
          <li key={c.id} className="list-item">
            <span>{c.name}</span>
            <span className="badge">{votes[c.id] || 0}</span>
          </li>
        ))}
      </ul>

      <div className="actions">
        <Link className="link" to="/">← Back to Voting</Link>
      </div>
    </section>
  );
}
