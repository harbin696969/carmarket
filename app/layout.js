"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";


export default function AddListing() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("listings").insert([
      {
        title,
        price,
        year,
        mileage
      }
    ]);

    if (error) {
      console.error(error);
      setMessage("Napaka pri shranjevanju.");
    } else {
      setMessage("Oglas uspešno dodan!");
      setTitle("");
      setPrice("");
      setYear("");
      setMileage("");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dodaj oglas</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Naslov oglasa:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Cena (€):</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            type="number"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Letnik:</label>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            type="number"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Kilometri:</label>
          <input
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
            type="number"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button
          type="submit"
          style={{
            background: "#0070f3",
            color: "white",
            padding: "10px 20px",
            borderRadius: 5,
            border: "none"
          }}
        >
          Shrani oglas
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 20, color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
}
