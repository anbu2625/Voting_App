import React from "react";
import { useVotes } from "../context/VoteContext";

export default function Candidate({ id, name }) {
  const { votes, voteFor } = useVotes();
  const count = votes[id] || 0;

  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div className="count">Votes: {count}</div>
      <button className="btn" onClick={() => voteFor(id)}>
        Vote
      </button>
    </div>
  );
}
