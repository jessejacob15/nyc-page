import React from "react";
import { useState } from "react";
import axios from "axios";
import "./EmailForm.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [conf, setConf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setConf("enter a valid email");
    }
    if (email.includes("@") == false) {
      setConf("enter a valid email");
    } else {
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
          setConf("You have been subscribed");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p2>join mailing list.</p2>
      </label>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit"> Submit </button>
      <p2>{conf}</p2>
    </form>
  );
}
