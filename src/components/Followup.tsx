import { useState } from "react";
import {
  Home,
  Plus,
  Users,
  Phone,
  MessageCircle,
  BarChart3,
  Diamond,
  Workflow,
  Settings,
  CalendarDays,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Info,
  X,
} from "lucide-react";

import type { FollowUpFormData } from "../types";

interface FollowUpFormProps {
  onSubmit: (data: FollowUpFormData) => void;
}

function FollowUpForm({ onSubmit }: FollowUpFormProps) {
  const [formData, setFormData] = useState<FollowUpFormData>({
    leadName: "Aarav Sharma",
    followUpType: "Call",
    priority: "Medium",
    date: "2026-11-05",
    time: "10:30",
    reminder: "15 minutes before",
    notes: "Discuss pricing and arrange a demo",
    ownerId: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    field: keyof FollowUpFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      setError("Please select follow-up date and time.");
      return;
    }

    setError("");
    onSubmit(formData);
  };

  const navigation = [
    { label: "Add Lead", icon: Plus },
    { label: "Dashboard", icon: Diamond },
    { label: "All Leads", icon: Users },
    { label: "Follow-ups", icon: CalendarDays },
    { label: "Calls", icon: Phone },
    { label: "WhatsApp", icon: MessageCircle },
    { label: "Reports", icon: BarChart3 },
    { label: "Lead Sources", icon: Diamond },
    { label: "Automations", icon: Workflow },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800">

      {/* Top navigation */}
      <header className="fixed left-0 right-0 top-0 z-20 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-5 md:left-19 md:px-8">
        <div className="flex items-center gap-3 text-xs">
          <Home size={15} className="text-slate-500" />

          <ChevronRight size={13} className="text-slate-400" />

          <span className="text-slate-500">Follow-ups</span>

          <ChevronRight size={13} className="text-slate-400" />

          <span className="font-semibold text-slate-800">
            New follow-up
          </span>
        </div>

        <div className="flex items-center gap-5">
          <button className="hidden items-center gap-1 text-xs text-slate-500 sm:flex">
            <HelpCircle size={14} />
            Help
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
            FA
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed bottom-0 left-0 top-0 z-30 hidden w-19 flex-col items-center border-r border-slate-200 bg-white md:flex">
        <div className="mb-4 mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
          L
        </div>

        <nav className="flex w-full flex-1 flex-col items-center gap-1 px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.label === "Follow-ups";

            return (
              <button
                key={item.label}
                type="button"
                className={`flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-[9px] transition ${
                  active
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <Icon size={17} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          FA
        </div>
      </aside>

      {/* Main */}
      <main className="ml-0 px-4 pb-10 pt-20 md:ml-19 md:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Schedule a follow-up
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Create a clear next step and make sure no lead gets missed.
            </p>

            <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold text-blue-600">
              STEP 1 OF 3
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,2.1fr)_minmax(240px,0.8fr)]">

            {/* Form card */}
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >

              {/* Progress */}
              <div className="mb-7 flex items-center gap-3 text-xs">

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500 text-blue-600">
                    1
                  </span>
                  <span className="font-semibold text-blue-600">
                    Details
                  </span>
                </div>

                <div className="h-px flex-1 bg-slate-200" />

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                    2
                  </span>
                  <span className="text-slate-500">Owner</span>
                </div>

                <div className="h-px flex-1 bg-slate-200" />

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                    3
                  </span>
                  <span className="text-slate-500">Confirmation</span>
                </div>

              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Follow-up details
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Choose the activity, date and reminder for this lead.
              </p>

              {/* Lead */}
              <div className="mt-6 space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Lead
                </label>

                <input
                  value={`${formData.leadName} · Website inquiry`}
                  readOnly
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs text-slate-700 outline-none"
                />
              </div>

              {/* Follow-up type and priority */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Follow-up Type
                  </label>

                  <select
                    value={formData.followUpType}
                    onChange={(e) =>
                      handleChange("followUpType", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="Call">Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Email">Email</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Priority
                  </label>

                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      handleChange("priority", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>

              </div>

              {/* Date and time */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Date
                  </label>

                  <input
                    type="date"
                    min="2026-11-03"
                    value={formData.date}
                    onChange={(e) =>
                      handleChange("date", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Time
                  </label>

                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      handleChange("time", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {/* Reminder and notes */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Reminder
                  </label>

                  <select
                    value={formData.reminder}
                    onChange={(e) =>
                      handleChange("reminder", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option>At the time of follow-up</option>
                    <option>5 minutes before</option>
                    <option>15 minutes before</option>
                    <option>30 minutes before</option>
                    <option>1 hour before</option>
                    <option>1 day before</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Notes (Optional)
                  </label>

                  <input
                    value={formData.notes}
                    onChange={(e) =>
                      handleChange("notes", e.target.value)
                    }
                    placeholder="Add follow-up notes..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {error && (
                <p className="mt-4 text-xs font-medium text-red-600">
                  {error}
                </p>
              )}

              {/* Footer buttons */}
              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      leadName: "Aarav Sharma",
                      followUpType: "Call",
                      priority: "Medium",
                      date: "2026-11-05",
                      time: "10:30",
                      reminder: "15 minutes before",
                      notes: "",
                      ownerId: "",
                    });
                    setError("");
                  }}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <X size={14} />
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600"
                >
                  Continue
                  <ArrowRight size={15} />
                </button>

              </div>
            </form>

            {/* Right sidebar */}
            <aside className="space-y-4">

              <div className="rounded-xl border border-slate-200 bg-white p-5">

                <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Lead Overview
                </h3>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                    AS
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Aarav Sharma
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Website inquiry
                    </p>
                  </div>
                </div>

                <div className="my-4 h-px bg-slate-100" />

                <div className="space-y-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 text-xs text-slate-700">
                      aarav.sharma@gmail.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase text-slate-400">
                      Phone
                    </p>
                    <p className="mt-1 text-xs text-slate-700">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

              </div>

              <div className="rounded-xl bg-blue-50 p-5">
                <h3 className="flex items-center gap-2 text-xs font-bold text-blue-600">
                  <Info size={15} />
                  A useful follow-up
                </h3>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Add a clear note so the next action is easy for anyone on your team to pick up.
                </p>
              </div>

            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}

export default FollowUpForm;