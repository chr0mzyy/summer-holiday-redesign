"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";

export default function ContactMailForm() {
  const [status, setStatus] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Zapytanie ze strony Summer Holiday — ${name}`);
    const body = encodeURIComponent(`Imię i nazwisko: ${name}\nKontakt: ${contact}\n\nWiadomość:\n${message}`);

    setStatus("Otwieramy wiadomość w Twoim programie pocztowym.");
    window.location.href = `mailto:summerholiday@onet.pl?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-form glass">
      <span className="eyebrow eyebrow--blue">Napisz do nas</span>
      <h2>W czym możemy pomóc?</h2>
      <p>Uzupełnij dane, a przygotujemy wiadomość do Summer Holiday w Twoim programie pocztowym. Możesz też napisać bezpośrednio na summerholiday@onet.pl.</p>
      <form onSubmit={prepareEmail}>
        <label><span>Imię i nazwisko</span><input name="name" autoComplete="name" placeholder="Jan Kowalski" required /></label>
        <label><span>Telefon lub e-mail</span><input name="contact" autoComplete="email" placeholder="Twój kontakt" required /></label>
        <label><span>Wiadomość</span><textarea name="message" rows={5} placeholder="Opowiedz krótko o planowanym wyjeździe" minLength={14} required /></label>
        <button className="button" type="submit"><Mail /> Przygotuj e-mail</button>
        <small className="form-notice" role="status">{status || "Dane nie są zapisywane na stronie."}</small>
      </form>
    </div>
  );
}
