// FormComponent.jsx
import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [balances, setBalances] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = `${date} ${time}`;
    // Validate timestamp format (YYYY-MM-DD HH:MM:SS)
    if (!/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(timestamp)) {
      setError("Invalid timestamp format. Please use YYYY-MM-DD HH:MM:SS");
      return;
    }

    try {
      const response = await axios.post(
        "https://backendcsvtask.onrender.com/asset/balance",
        {
          timestamp,
        }
      );
      if (Object.keys(response.data).length === 0) {
        setError("Date not present in database");
      } else {
        setBalances(response.data);
        setError("");
      }
    } catch (error) {
      setError("Error fetching balances");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Asset Balance Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Enter Time (HH:MM:SS):
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>Asset Balances:</h3>
      <ul>
        {Object.entries(balances).map(([asset, balance]) => (
          <li key={asset}>
            {asset}: {balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
