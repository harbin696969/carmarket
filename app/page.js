"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AddListing() {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("listings").insert([
      {
        title,
        brand,
        model,
        price,
        year,
        mileage,
        fuel,
        transmission,
        location,
        description
      }
    ]);

    if (error) {
      console.error(error);
      setMessage("Napaka pri shranjevanju.");
    } else {
      setMessage("Oglas uspešno dodan!");
      setTitle("");
      setBrand("");
      setModel("");
      setPrice("");
      setYear("");
      setMileage("");
      setFuel("");
      setTransmission("");
      setLocation("");
      setDescription("");
    }
  }

  function handleGenerateDescription() {
    // "Lažni AI" – za demo, brez stroškov
    const parts = [];
    if (brand || model) {
      parts.push(`Prodaja se ${brand} ${model}.`);
    }
    if (year) {
      parts.push(`Letnik ${year}.`);
    }
    if (mileage) {
      parts.push(`Prevoženih približno ${mileage} km.`);
    }
    if (fuel) {
      parts.push(`Gorivo: ${fuel}.`);
    }
    if (transmission) {
      parts.push(`Menjalnik: ${transmission}.`);
    }
    parts.push("Vozilo je primerno za vsakodnevno uporabo. Ogled je možen po dogovoru.");

    setDescription(parts.join(" "));
  }

  return (
    <div>
      <h1>Dodaj oglas</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: 20, maxWidth: 500 }}>
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
          <label>Znamka:</label>
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Model:</label>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
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

        <div style={{ marginBottom: 10 }}>
          <label>Gorivo:</label>
          <input
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Menjalnik:</label>
          <input
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Lokacija:</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Opis:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            style={{ width: "100%", padding: 8 }}
          />
          <button
            type="button"
            onClick={handleGenerateDescription}
            style={{
              marginTop: 5,
              padding: "6px 10px",
              borderRadius: 4,
              border: "1px solid #0070f3",
              background: "white"
            }}
          >
            Ustvari opis (pseudo-AI)
          </button>
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

        {message && (
          <p style={{ marginTop: 20, fontWeight: "bold" }}>{message}</p>
        )}
      </form>
    </div>
  );
}
