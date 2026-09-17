import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Please enter your name.");
      return;
    }

    setMessage(`Welcome, ${name}! Your form was submitted successfully.`);
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Form;