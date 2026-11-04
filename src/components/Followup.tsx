
import { useState } from "react";
import type { FormEvent } from "react";

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

const initialFormData: FollowUpFormData = {
  leadName: "Aarav Sharma",
  followUpType: "Call",
  priority: "Medium",
  date: "2026-11-05",
  time: "10:30",
  reminder: "15 minutes before",
  notes: "Discuss pricing and arrange a demo",
  ownerId: "",
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

function FollowUpForm({ onSubmit }: FollowUpFormProps) {
  const [formData, setFormData] =
    useState<FollowUpFormData>(initialFormData);

  const [error, setError] = useState("");

  const handleChange = (
    field: keyof FollowUpFormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.date || !formData.time) {
      setError("Please select follow-up date and time.");
      return;
    }

    setError("");
    onSubmit(formData);
  };

  const handleCancel = () => {
    setFormData({
      ...initialFormData,
      notes: "",
    });
    setError("");
  };

  return (
    <div className="min-h-screen w-full bg-[#f3f6fb] text-slate-800">

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-5 md:left-[76px] md:px-8">

        <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
          <Home size={17} className="shrink-0 text-slate-500" />

          <ChevronRight size={14} className="shrink-0 text-slate-400" />

          <span className="text-slate-500">
            Follow-ups
          </span>

          <ChevronRight size={14} className="shrink-0 text-slate-400" />

          <span className="font-semibold text-slate-900">
            New follow-up
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">

          <button
            type="button"
            className="hidden items-center gap-1.5 text-sm text-slate-500 sm:flex"
          >
            <HelpCircle size={16} />
            Help
          </button>

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 sm:h-9 sm:w-9">
            FA
          </div>

        </div>
      </header>

      {/* DESKTOP SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-[76px] flex-col items-center border-r border-slate-200 bg-white md:flex">

        {/* Logo */}
        <div className="mb-5 mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
          L
        </div>

        {/* Desktop navigation */}
        <nav
          aria-label="Desktop navigation"
          className="flex w-full flex-1 flex-col items-center gap-1 px-2"
        >
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.label === "Follow-ups";

            return (
              <button
                key={item.label}
                type="button"
                className={`flex w-full flex-col items-center gap-1 rounded-xl py-2.5 transition ${
                  active
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <Icon size={20} strokeWidth={1.8} />

                <span className="text-[10px]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Profile */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          FA
        </div>

      </aside>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 flex h-[72px] items-center gap-1 overflow-x-auto border-t border-slate-200 bg-white px-2 shadow-[0_-2px_10px_rgba(15,23,42,0.04)] md:hidden"
      >
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = item.label === "Follow-ups";

          return (
            <button
              key={item.label}
              type="button"
              aria-current={active ? "page" : undefined}
              className={`flex min-w-[68px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 transition ${
                active
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Icon size={19} strokeWidth={1.8} />

              <span className="whitespace-nowrap text-[9px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-0 min-h-screen w-full px-4 pb-28 pt-24 md:ml-[76px] md:w-[calc(100%-76px)] md:px-8 md:pb-10">

        <div className="mx-auto w-full max-w-[1120px]">

          {/* PAGE HEADING */}
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

          {/* FORM AND LEAD OVERVIEW */}
          <div className="grid min-w-0 grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.9fr)]">

            {/* FORM CARD */}
            <form
              onSubmit={handleSubmit}
              className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-7"
            >

              {/* PROGRESS */}
              <div className="mb-7 flex items-center gap-2 text-[10px] sm:gap-3 sm:text-xs">

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500 text-blue-600">
                    1
                  </span>

                  <span className="font-semibold text-blue-600">
                    Details
                  </span>
                </div>

                <div className="h-px min-w-2 flex-1 bg-slate-200" />

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                    2
                  </span>

                  <span className="text-slate-500">
                    Owner
                  </span>
                </div>

                <div className="h-px min-w-2 flex-1 bg-slate-200" />

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                    3
                  </span>

                  <span className="text-slate-500">
                    Confirmation
                  </span>
                </div>

              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Follow-up details
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Choose the activity, date and reminder for this lead.
              </p>

              {/* LEAD */}
              <div className="mt-6 space-y-2">

                <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Lead
                </label>

                <input
                  value={`${formData.leadName} · Website inquiry`}
                  readOnly
                  className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs text-slate-700 outline-none"
                />

              </div>

              {/* FOLLOW-UP TYPE AND PRIORITY */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="min-w-0 space-y-2">

                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Follow-up Type
                  </label>

                  <select
                    value={formData.followUpType}
                    onChange={(event) =>
                      handleChange("followUpType", event.target.value)
                    }
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="Call">Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Email">Email</option>
                  </select>

                </div>

                <div className="min-w-0 space-y-2">

                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Priority
                  </label>

                  <select
                    value={formData.priority}
                    onChange={(event) =>
                      handleChange("priority", event.target.value)
                    }
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>

                </div>

              </div>

              {/* DATE AND TIME */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="min-w-0 space-y-2">

                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Date
                  </label>

                  <input
                    type="date"
                    min="2026-11-04"
                    value={formData.date}
                    onChange={(event) =>
                      handleChange("date", event.target.value)
                    }
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  />

                </div>

                <div className="min-w-0 space-y-2">

                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Time
                  </label>

                  <input
                    type="time"
                    value={formData.time}
                    onChange={(event) =>
                      handleChange("time", event.target.value)
                    }
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  />

                </div>

              </div>

              {/* REMINDER AND NOTES */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="min-w-0 space-y-2">

                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Reminder
                  </label>

                  <select
                    value={formData.reminder}
                    onChange={(event) =>
                      handleChange("reminder", event.target.value)
                    }
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option>At the time of follow-up</option>
                    <option>5 minutes before</option>
                    <option>15 minutes before</option>
                    <option>30 minutes before</option>
                    <option>1 hour before</option>
                    <option>1 day before</option>
                  </select>

                </div>

                <div className="min-w-0 space-y-2">

                  <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Notes (Optional)
                  </label>

                  <input
                    value={formData.notes}
                    onChange={(event) =>
                      handleChange("notes", event.target.value)
                    }
                    placeholder="Add follow-up notes..."
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  />

                </div>

              </div>

              {/* VALIDATION ERROR */}
              {error && (
                <p className="mt-4 text-xs font-medium text-red-600">
                  {error}
                </p>
              )}

              {/* FOOTER BUTTONS */}
              <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">

                <button
                  type="button"
                  onClick={handleCancel}
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

            {/* RIGHT SIDE */}
            <aside className="min-w-0 space-y-4">

              {/* LEAD OVERVIEW */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">

                <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Lead Overview
                </h3>

                <div className="mt-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                    AS
                  </div>

                  <div className="min-w-0">
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

                    <p className="mt-1 break-all text-xs text-slate-700">
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

              {/* HELPFUL TIP */}
              <div className="rounded-xl bg-blue-50 p-5">

                <h3 className="flex items-center gap-2 text-xs font-bold text-blue-600">
                  <Info size={15} />
                  A useful follow-up
                </h3>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Add a clear note so the next action is easy for anyone on
                  your team to pick up.
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
