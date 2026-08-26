"use client";

import { useEffect, useState } from "react";
import { getJobs } from "../../../services/jobs/jobs";
import JobTable from "../../../components/JobTable";
import JobForm from "../../../components/JobForm";
import { useAuth } from "../../../providers/authContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
  const { user, adminLogout } = useAuth();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    if(!user || user.role !== "admin") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-lg text-gray-500">Please log in to access the dashboard.</p>
            </div>
        );
    }

    

  async function fetchJobs() {
    try {
      const data = await getJobs();

      setJobs(data);
      setError("");
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setError("Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    adminLogout();
    router.push("/admin/login");
  }

  useEffect(() => {
    fetchJobs();

    const interval = setInterval(() => {
      fetchJobs();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

          {/* Brand */}
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Study Abroad Admin
            </h1>

            <p className="text-sm text-gray-500">
              Job Management Dashboard
            </p>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-5">

            <div className="hidden text-right sm:block">
              <p className="text-base font-medium text-gray-900">
                {user?.username || user?.fullName || "Admin"}
              </p>

              <p className="text-sm text-gray-500">
                {user?.email}
              </p>
            </div>

            <button
              onClick={logout}
              className="rounded-lg border border-red-200 px-4 py-2 text-base font-medium text-red-600 transition hover:bg-red-50"
            >
              Logout
            </button>

          </div>
        </div>
      </nav>


      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10">

        {/* Page Heading */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Dashboard
          </h2>

          <p className="mt-2 text-base text-gray-600">
            Submit and monitor scraping jobs.
          </p>
        </div>


        {/* Job Submit Form */}
        <section className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl">
            <JobForm onJobCreated={fetchJobs} />
          </div>
        </section>


        {/* Jobs Section */}
        <section>

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                All Jobs
              </h2>

              <p className="mt-1 text-base text-gray-500">
                Monitor submitted and running jobs.
              </p>
            </div>

            <div className="text-sm text-gray-400">
              Auto-refreshes every 3 seconds
            </div>
          </div>


          {loading ? (
            <div className="rounded-xl border bg-white p-10 text-center text-lg text-gray-500">
              Loading jobs...
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-base text-red-600">
                  {error}
                </div>
              )}

              <JobTable jobs={jobs} />
            </>
          )}

        </section>

      </main>
    </div>
  );
}