import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="Field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button disabled={!name} type="submit">Submit</button>
      </fieldset>
    </form>
  )
}
export default ControlledComponent;