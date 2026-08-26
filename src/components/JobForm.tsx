"use client";

import { useState } from "react";
import { submitUniversityScrape } from "../services/scraping/scraping";

const SOURCES = [
  { id: "oxford", name: "Oxford" },
  { id: "unimelb", name: "University of Melbourne" },
  { id: "nus", name: "National University of Singapore" },
  // Add more sources here
];

export default function JobForm({ onJobCreated }) {
  const [jobType, setJobType] = useState("scrape_universities");
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function toggleSource(sourceId) {
    setSources((currentSources) =>
      currentSources.includes(sourceId)
        ? currentSources.filter((id) => id !== sourceId)
        : [...currentSources, sourceId]
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (jobType === "scrape_universities" && sources.length === 0) {
      setError("Please select at least one source.");
      return;
    }

    setLoading(true);

    try {
      let response;

      switch (jobType) {
        case "scrape_universities":
          response = await submitUniversityScrape(sources);
          break;

        case "schedule_work":
          setError("Schedule work is not implemented yet.");
          setLoading(false);
          return;

        case "other":
          setError("This job type is not implemented yet.");
          setLoading(false);
          return;

        default:
          throw new Error("Invalid job type.");
      }

      setMessage("Job submitted successfully!");
      setSources([]);

      // Refresh the jobs table in Dashboard
      if (onJobCreated) {
        await onJobCreated(response);
      }
    } catch (err) {
      console.error("Failed to submit job:", err);

      setError(
        err.response?.data?.detail ||
          err.message ||
          "Failed to submit job."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Submit New Job
        </h2>

        <p className="mt-1 text-base text-gray-500">
          Configure and submit a background job.
        </p>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <label className="mb-2 block text-base font-medium text-gray-700">
          Job Type
        </label>

        <select
          value={jobType}
          onChange={(e) => {
            setJobType(e.target.value);
            setMessage("");
            setError("");
          }}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none focus:border-gray-900"
        >
          <option value="scrape_universities">
            Scrape University Data
          </option>

          <option value="schedule_work">
            Schedule Work
          </option>

          <option value="other">
            Other
          </option>
        </select>
      </div>

      {/* Sources */}
      {jobType === "scrape_universities" && (
        <div className="mb-6">
          <label className="mb-3 block text-base font-medium text-gray-700">
            Sources
          </label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SOURCES.map((source) => (
              <label
                key={source.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                  sources.includes(source.id)
                    ? "border-gray-900 bg-gray-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={sources.includes(source.id)}
                  onChange={() => toggleSource(source.id)}
                  className="h-4 w-4"
                />

                <span className="text-base text-gray-800">
                  {source.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Success Message */}
      {message && (
        <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-base text-green-700">
          {message}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-base text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gray-900 px-5 py-3 text-base font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Submitting Job..." : "Submit Job"}
      </button>
    </form>
  );
}