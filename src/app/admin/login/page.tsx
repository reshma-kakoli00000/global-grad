"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {useAuth} from "@/providers/authContext";

export default function Login() {
  const router = useRouter();



    const { adminLogin } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await adminLogin(username, password);

      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Study Abroad
        </h1>

        <p className="text-gray-500 mt-1 mb-6">
          Admin Dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-lg py-2.5 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}