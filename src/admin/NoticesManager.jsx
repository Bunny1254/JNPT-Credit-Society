import { useEffect, useState } from "react";

import {
  addNotice,
  deleteNotice,
  getNotices,
  updateNotice,
} from "../services/noticeService";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  important: false,
  published: true,
};

function NoticesManager() {

  const [notices, setNotices] = useState([]);

  const [form, setForm] = useState(emptyForm);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");


  /*
  |--------------------------------------------------------------------------
  | Load notices
  |--------------------------------------------------------------------------
  */

  const loadNotices = async () => {

    try {

      setLoading(true);
      setError("");

      const data = await getNotices();

      setNotices(data);

    } catch (error) {

      console.error("Failed to load notices:", error);

      setError(
        "Unable to load notices. Please check your Firestore configuration and security rules."
      );

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    loadNotices();
  }, []);


  /*
  |--------------------------------------------------------------------------
  | Input handler
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {

    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  /*
  |--------------------------------------------------------------------------
  | Submit
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {

    event.preventDefault();

    setError("");

    if (!form.title.trim()) {
      setError("Please enter a notice title.");
      return;
    }

    if (!form.date) {
      setError("Please select a notice date.");
      return;
    }

    try {

      setSaving(true);

      if (editingId) {

        await updateNotice(editingId, form);

      } else {

        await addNotice(form);

      }

      setForm(emptyForm);
      setEditingId(null);

      await loadNotices();

    } catch (error) {

      console.error("Failed to save notice:", error);

      setError(
        "Unable to save notice. Please check your Firestore permissions."
      );

    } finally {

      setSaving(false);

    }
  };


  /*
  |--------------------------------------------------------------------------
  | Edit
  |--------------------------------------------------------------------------
  */

  const handleEdit = (notice) => {

    setEditingId(notice.id);

    setForm({
      title: notice.title || "",
      description: notice.description || "",
      date: notice.date || "",
      important: notice.important || false,
      published: notice.published ?? true,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /*
  |--------------------------------------------------------------------------
  | Cancel edit
  |--------------------------------------------------------------------------
  */

  const cancelEdit = () => {

    setEditingId(null);
    setForm(emptyForm);
    setError("");

  };


  /*
  |--------------------------------------------------------------------------
  | Delete
  |--------------------------------------------------------------------------
  */

  const handleDelete = async (noticeId) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmed) return;

    try {

      await deleteNotice(noticeId);

      await loadNotices();

    } catch (error) {

      console.error("Failed to delete notice:", error);

      setError(
        "Unable to delete notice. Please check your Firestore permissions."
      );
    }
  };


  /*
  |--------------------------------------------------------------------------
  | Toggle published
  |--------------------------------------------------------------------------
  */

  const togglePublished = async (notice) => {

    try {

      await updateNotice(notice.id, {
        title: notice.title,
        description: notice.description || "",
        date: notice.date,
        important: notice.important || false,
        published: !notice.published,
      });

      await loadNotices();

    } catch (error) {

      console.error("Failed to update notice:", error);

      setError("Unable to update notice.");

    }
  };


  return (
    <div className="max-w-[1400px] mx-auto">


      {/* HEADER */}

      <div className="mb-8">

        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b18b19]">
          Content Management
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-2">
          Notices
        </h1>

        <p className="mt-3 text-slate-500 max-w-2xl">
          Create and manage official announcements and notices for
          society members.
        </p>

      </div>


      {/* ERROR */}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}


      {/* FORM */}

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">

        <div className="flex items-center justify-between gap-4 mb-7">

          <div>

            <h2 className="text-xl font-bold text-[#0b1f3a]">
              {editingId ? "Edit Notice" : "Add New Notice"}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Publish important information for society members.
            </p>

          </div>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm font-semibold text-slate-500 hover:text-[#0b1f3a]"
            >
              Cancel Edit
            </button>
          )}

        </div>


        <form onSubmit={handleSubmit}>

          <div className="grid lg:grid-cols-2 gap-6">


            {/* TITLE */}

            <div className="lg:col-span-2">

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Notice Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter notice title"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0b1f3a]/20 focus:border-[#0b1f3a]"
                required
              />

            </div>


            {/* DATE */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Notice Date
              </label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0b1f3a]/20 focus:border-[#0b1f3a]"
                required
              />

            </div>


            {/* DESCRIPTION */}

            <div className="lg:col-span-2">

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="5"
                placeholder="Write the notice details..."
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-y focus:ring-2 focus:ring-[#0b1f3a]/20 focus:border-[#0b1f3a]"
              />

            </div>


            {/* OPTIONS */}

            <div className="lg:col-span-2 flex flex-wrap gap-6">

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  name="important"
                  checked={form.important}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#0b1f3a]"
                />

                <span className="text-sm font-medium text-slate-700">
                  Mark as important
                </span>

              </label>


              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  name="published"
                  checked={form.published}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#0b1f3a]"
                />

                <span className="text-sm font-medium text-slate-700">
                  Publish immediately
                </span>

              </label>

            </div>

          </div>


          <div className="mt-7 flex justify-end">

            <button
              type="submit"
              disabled={saving}
              className="btn-primary disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Notice"
                : "Publish Notice"}
            </button>

          </div>

        </form>

      </section>


      {/* NOTICE LIST */}

      <section>

        <div className="flex items-center justify-between mb-5">

          <div>

            <h2 className="text-xl font-bold text-[#0b1f3a]">
              Existing Notices
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              {notices.length} notice
              {notices.length === 1 ? "" : "s"} available.
            </p>

          </div>

        </div>


        {loading ? (

          <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">

            <div className="w-8 h-8 border-4 border-slate-200 border-t-[#0b1f3a] rounded-full animate-spin mx-auto" />

            <p className="text-sm text-slate-500 mt-4">
              Loading notices...
            </p>

          </div>

        ) : notices.length === 0 ? (

          <div className="bg-white border border-dashed border-slate-300 rounded-xl p-12 text-center">

            <p className="text-slate-500">
              No notices have been added yet.
            </p>

            <p className="text-sm text-slate-400 mt-1">
              Create your first notice using the form above.
            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {notices.map((notice) => (

              <div
                key={notice.id}
                className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6"
              >

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      {notice.important && (
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                          Important
                        </span>
                      )}

                      <span
                        className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                          notice.published
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {notice.published ? "Published" : "Draft"}
                      </span>

                    </div>

                    <h3 className="text-xl font-semibold text-[#0b1f3a] mt-3">
                      {notice.title}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2">
                      {notice.date}
                    </p>

                    {notice.description && (
                      <p className="text-sm text-slate-500 leading-6 mt-3 max-w-3xl whitespace-pre-line">
                        {notice.description}
                      </p>
                    )}

                  </div>


                  <div className="flex flex-wrap gap-2 shrink-0">

                    <button
                      type="button"
                      onClick={() => togglePublished(notice)}
                      className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-[#0b1f3a] hover:text-[#0b1f3a]"
                    >
                      {notice.published ? "Unpublish" : "Publish"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEdit(notice)}
                      className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-[#0b1f3a] hover:text-[#0b1f3a]"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(notice.id)}
                      className="px-3 py-2 rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default NoticesManager;