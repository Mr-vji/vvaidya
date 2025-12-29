"use client";

import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      company: form.company.value,
      budget: form.budget.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen align-middle">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="p-2 border"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-2 border"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="p-2 border"
        />
        <input
          type="text"
          name="budget"
          placeholder="Budget"
          className="p-2 border"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 border"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-blue-500 text-white"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success === true && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-500">Failed to send message.</p>
        )}
      </form>
    </div>
  );
}
