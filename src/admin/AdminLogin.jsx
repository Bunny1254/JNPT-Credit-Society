import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/dashboard");

    } catch (error) {
      console.error(error);

      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo / Heading */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-900 text-white flex items-center justify-center text-xl font-bold">
            JN
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Admin Panel
          </h1>

          <p className="mt-2 text-gray-500">
            JNPT Employees Co-op. Credit Society
          </p>

        </div>


        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-xl font-semibold text-gray-900">
            Admin Login
          </h2>

          <p className="text-gray-500 text-sm mt-2 mb-6">
            Sign in to manage the society website.
          </p>


          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-5">

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />

            </div>


            {/* Password */}
            <div className="mb-5">

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />

            </div>


            {/* Error */}
            {error && (
              <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                {error}
              </div>
            )}


            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;