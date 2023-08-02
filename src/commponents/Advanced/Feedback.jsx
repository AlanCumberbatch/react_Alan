import { useState } from "react";

function Feedback() {
  const [score, setScore] = useState("10");
  const [commit, setCommit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && commit.length <= 10) {
      alert("Please provide a commit explaining why the experience was poor.")
      return;
    }
    setCommit("");
    setScore("10");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback form</h2>
        <div className="Field">
          <label htmlFor="">Score: {score}</label>
          <input
            type="range"
            min={0}
            max={10}
            value={score}
            onChange={e=>setScore(e.target.value)}
          />
        </div>
        <div className="Field">
          <label htmlFor="commit">Commit:</label>
          <textarea
            name="commit"
            id="commit"
            cols="30"
            rows="10"
            value={commit}
            onChange={ e => setCommit(e.target.value) }
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  )
}
export default Feedback;