import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Loans from "./pages/Loans";
import Notices from "./pages/Notices";
import Reports from "./pages/Reports";
import Downloads from "./pages/Downloads";
import Committee from "./pages/Committee";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLayout from "./admin/AdminLayout";
import NoticesManager from "./admin/NoticesManager";


function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}


function App() {
  return (
    <Routes>

      {/* =====================================================
          PUBLIC WEBSITE
      ===================================================== */}

      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />

      <Route
        path="/services"
        element={
          <PublicLayout>
            <Services />
          </PublicLayout>
        }
      />

      <Route
        path="/loans"
        element={
          <PublicLayout>
            <Loans />
          </PublicLayout>
        }
      />

      <Route
        path="/notices"
        element={
          <PublicLayout>
            <Notices />
          </PublicLayout>
        }
      />

      <Route
        path="/reports"
        element={
          <PublicLayout>
            <Reports />
          </PublicLayout>
        }
      />

      <Route
        path="/downloads"
        element={
          <PublicLayout>
            <Downloads />
          </PublicLayout>
        }
      />

      <Route
        path="/committee"
        element={
          <PublicLayout>
            <Committee />
          </PublicLayout>
        }
      />

      <Route
        path="/gallery"
        element={
          <PublicLayout>
            <Gallery />
          </PublicLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />


      {/* =====================================================
          ADMIN LOGIN
      ===================================================== */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />


      {/* =====================================================
          PROTECTED ADMIN
      ===================================================== */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        {/* Admin Dashboard */}

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        {/* Admin Notices */}

        <Route
          path="notices"
          element={<NoticesManager />}
        />

      </Route>

    </Routes>
  );
}

export default App;