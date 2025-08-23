"use client";

import { useState } from "react";

export default function VolunteerForm({
  programTitles,
}: {
  programTitles: string[];
}) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");
  const [resumeName, setResumeName] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const file = fd.get("resume");
    if (file instanceof File && file.size > 10 * 1024 * 1024) {
      setStatus("error");
      setMessage("Resume file is too large. Please upload a file under 10MB.");
      return;
    }

    try {
      const res = await fetch("/api/volunteer", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thanks for registering! We'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {message && (
        <div
          className={`mt-6 rounded-minimal border px-4 py-3 text-sm ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : status === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-gray-200 bg-white"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
        encType="multipart/form-data"
        noValidate
      >
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-800">
            Name <span className="text-red-600">(Required)</span>
          </label>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                name="firstName"
                placeholder="First"
                required
                className="w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
              />
            </div>
            <div>
              <input
                name="lastName"
                placeholder="Last"
                required
                className="w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-600">(Required)</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-600">(Required)</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Emergency Contact Info
          </label>
          <input
            name="emergencyContact"
            className="mt-1 w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
          />
        </div>

        {/* Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Availability (Days/Times)
            </label>
            <input
              name="availability"
              placeholder="e.g., Weekdays 9am–2pm"
              className="mt-1 w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Time Commitment
            </label>
            <input
              name="commitment"
              placeholder="weekly, monthly, one-time events"
              className="mt-1 w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
            />
          </div>
        </div>

        {/* Prior Experience */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            Have you volunteered before?
          </legend>
          <div className="flex items-center gap-6">
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="priorExperience"
                value="yes"
                className="accent-csag-primary"
                required
              />
              Yes
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="priorExperience"
                value="no"
                className="accent-csag-primary"
              />
              No
            </label>
          </div>
        </fieldset>

        {/* Interests */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            What volunteering opportunities are you interested in?
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-800">
            {programTitles.map((t) => (
              <label key={t} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="interests"
                  value={t}
                  className="accent-csag-primary"
                />
                {t}
              </label>
            ))}
          </div>
        </fieldset>

        {/* About */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tell us about your strengths and skills (to help us match you)
          </label>
          <textarea
            name="about"
            rows={6}
            className="mt-1 w-full border border-gray-300 rounded-minimal px-3 py-2 focus:outline-none focus:ring-1 focus:ring-csag-primary"
          />
        </div>

        {/* Resume */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resume & Cover Letter
          </label>
          <div className="mt-1 flex items-center gap-3">
            <input
              id="resume"
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const f = e.target.files?.[0];
                setResumeName(f ? f.name : "");
              }}
              className="sr-only"
            />
            <label
              htmlFor="resume"
              className="inline-flex cursor-pointer items-center bg-csag-accent hover:bg-csag-accent-light text-white font-semibold px-4 py-2 rounded-minimal"
            >
              Browse…
            </label>
            <span className="text-sm text-gray-600 truncate">
              {resumeName || "No file selected."}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">Max. file size: 10MB.</p>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full md:w-auto min-w-[200px] inline-flex items-center justify-center bg-csag-primary hover:bg-csag-primary/90 text-white font-semibold px-6 py-3 rounded-minimal disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}
