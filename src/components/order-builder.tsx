"use client";

import { useMemo, useState, type FormEvent, type MouseEvent } from "react";
import {
  EMAIL,
  INSTAGRAM_DM,
  buildOrderMessage,
  occasions,
  orderItems,
} from "@/lib/site";

const TOAST = "Message copied, just paste it in the DM";

export function OrderBuilder() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  const [fallback, setFallback] = useState("");
  const [dmBlocked, setDmBlocked] = useState(false);

  function toggleItem(item: string) {
    setItems((current) =>
      current.includes(item)
        ? current.filter((entry) => entry !== item)
        : [...current, item],
    );
  }

  function currentMessage() {
    return buildOrderMessage({
      name,
      occasion,
      date,
      guests,
      items,
      note,
    });
  }

  function validate() {
    if (!occasion) return "Choose an occasion.";
    if (!date) return "Add the date.";
    if (!guests || Number(guests) < 1) return "Add a guest count.";
    if (items.length === 0) return "Pick at least one thing for the table.";
    return "";
  }

  function onInstagram(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setFallback("");
    setDmBlocked(false);
    const message = currentMessage();
    const pending = navigator.clipboard?.writeText(message);
    const opened = window.open(INSTAGRAM_DM, "_blank", "noopener,noreferrer");
    if (!opened) setDmBlocked(true);
    if (!pending) {
      setFallback(message);
      setToast(false);
      return;
    }
    pending
      .then(() => {
        setToast(true);
        window.setTimeout(() => setToast(false), 4200);
      })
      .catch(() => {
        setToast(false);
        setFallback(message);
      });
  }

  function onEmail(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    const message = currentMessage();
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent("A party with Little Bites")}&body=${encodeURIComponent(message)}`;
    window.location.href = href;
  }

  return (
    <form className="order-form" onSubmit={onInstagram} noValidate>
      <div className="field">
        <label htmlFor="guest-name">Your name</label>
        <input
          id="guest-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Optional"
        />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            required
          >
            <option value="">Choose one</option>
            {occasions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="party-date">Date</label>
          <input
            id="party-date"
            name="date"
            type="date"
            min={today}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="guests">Guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            inputMode="numeric"
            min={1}
            max={1000}
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            placeholder="How many"
            required
          />
        </div>
      </div>
      <fieldset className="item-picks">
        <legend>What sounds good</legend>
        <div className="chips">
          {orderItems.map((item) => {
            const checked = items.includes(item);
            return (
              <label key={item} className={checked ? "chip is-on" : "chip"}>
                <input
                  type="checkbox"
                  name="items"
                  value={item}
                  checked={checked}
                  onChange={() => toggleItem(item)}
                />
                {item}
              </label>
            );
          })}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="note">Anything else</label>
        <textarea
          id="note"
          name="note"
          rows={3}
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Theme, timing, or tastes to keep in mind"
        />
      </div>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <div className="form-actions">
        <button className="btn btn-solid" type="submit">
          Copy note and open Instagram
        </button>
        <button className="btn btn-line" type="button" onClick={onEmail}>
          Email this note instead
        </button>
      </div>
      <p className="form-hint">
        Instagram opens a chat with us. Paste the note, send it, and we will
        shape a menu around your day.
      </p>
      {dmBlocked ? (
        <p className="form-hint">
          If the chat did not open,{" "}
          <a href={INSTAGRAM_DM}>message Little Bites on Instagram</a>.
        </p>
      ) : null}
      {fallback ? (
        <label className="field fallback">
          Copy this note, then paste it in the chat
          <textarea readOnly value={fallback} rows={8} />
        </label>
      ) : null}
      {toast ? (
        <div className="toast" role="status" aria-live="polite">
          {TOAST}
        </div>
      ) : null}
    </form>
  );
}
