import React from "react";
import { useState } from "react";
import axios from "axios";
import "./EmailForm.css";
// import "../GoogleSpreadSheet/GoogleSpreadSheet";

//import saveData from "./some-other-file";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // appendSpreadSheet(email);
    e.preventDefault();
    const data = {
      Email: email,
    };
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/b0eb6f40-4e71-4a67-815e-601c50279145",
        data
      )
      .then((response) => {
        console.log(response);
        setEmail("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <code>join mailing list</code>
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit"> Submit </button>
    </form>
  );
}

//sheet id = 1GxhI084xF1wYFwu2RpnRyb_B1wgPSmY4u_YHrb3wr1U
