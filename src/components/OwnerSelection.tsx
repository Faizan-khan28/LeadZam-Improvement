
import { useMemo, useState } from "react";

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
  Search,
  AlertCircle,
  Bell,
  Eye,
  ArrowLeft,
  HelpCircle,
  Check,
} from "lucide-react";

import type { TeamMember } from "../types";

interface OwnerSelectionProps {
  members: TeamMember[];
  selectedOwnerId: string;
  onSelectOwner: (id: string) => void;
  onBack: () => void;
  onSave: () => void;
}

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

function OwnerSelection({
  members,
  selectedOwnerId,
  onSelectOwner,
  onBack,
  onSave,
}: OwnerSelectionProps) {
  const [search, setSearch] = useState("");
  const [notification, setNotification] =
    useState("Email notification");
  const [visibility, setVisibility] =
    useState("Team only");
  const [error, setError] = useState("");

  const filteredMembers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query)
    );
  }, [members, search]);

  const handleSave = () => {
    if (!selectedOwnerId) {
      setError("Select one team member to continue.");
      return;
    }

    setError("");
    onSave();
  };

  const renderNavigationItems = () =>
    navigation.map((item) => {
      const Icon = item.icon;
      const active = item.label === "Follow-ups";

      return (
        <button
          key={item.label}
          type="button"
          aria-current={active ? "page" : undefined}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl transition ${
            active
              ? "bg-blue-50 font-semibold text-blue-600"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          <Icon size={20} strokeWidth={1.8} />

          <span className="whitespace-nowrap text-[10px]">
            {item.label}
          </span>
        </button>
      );
    });

  return (
    <div className="min-h-screen w-full bg-[#f3f6fb] text-slate-800">

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-5 md:left-[76px] md:px-8">

        <div className="flex min-w-0 items-center gap-2 text-xs sm:gap-3 sm:text-sm">
          <Home size={17} className="shrink-0 text-slate-500" />

          <ChevronRight size={14} className="shrink-0 text-slate-400" />

          <span className="text-slate-500">
            Follow-ups
          </span>

          <ChevronRight size={14} className="shrink-0 text-slate-400" />

          <span className="truncate font-semibold text-slate-900">
            Assign owner
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">

          <button
            type="button"
            className="hidden items-center gap-1.5 text-sm text-slate-500 sm:flex"
          >
            <HelpCircle size={16} />
            Help
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 sm:h-9 sm:w-9">
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
                aria-current={active ? "page" : undefined}
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

        <div className="mx-auto w-full max-w-[1200px]">

          {/* PAGE HEADING */}
          <div className="mb-5">

            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Assign a follow-up owner
            </h1>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Choose who is responsible for the next action.
            </p>

            <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold text-blue-600">
              STEP 2 OF 3
            </span>

          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid min-w-0 grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.8fr)]">

            {/* OWNER SELECTION CARD */}
            <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              {/* PROGRESS STEPS */}
              <div className="mb-7 flex items-center gap-2 text-[10px] sm:gap-3 sm:text-xs">

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Check size={13} />
                  </span>

                  <span className="font-semibold text-blue-600">
                    Details
                  </span>
                </div>

                <div className="h-px min-w-2 flex-1 bg-slate-200" />

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500 text-blue-600">
                    2
                  </span>

                  <span className="font-semibold text-blue-600">
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

              <h2 className="text-base font-bold text-slate-900">
                Who should own this follow-up?
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                An owner keeps reminders visible and accountable.
              </p>

              {/* SEARCH */}
              <div className="mt-6">

                <label
                  htmlFor="owner-search"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-500"
                >
                  Follow-up Owner
                </label>

                <div
                  className={`relative rounded-lg border ${
                    error
                      ? "border-red-400"
                      : "border-slate-200 focus-within:border-blue-500"
                  }`}
                >

                  <Search
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="owner-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search team members by name or email..."
                    className="w-full rounded-lg bg-slate-50 py-3 pl-9 pr-3 text-xs outline-none"
                  />

                </div>
              </div>

              {/* TEAM MEMBERS */}
              <div className="mt-2 rounded-lg border border-slate-200 p-2">

                {filteredMembers.length > 0 ? (

                  filteredMembers.map((member) => {
                    const selected =
                      selectedOwnerId === member.id;

                    return (
                      <button
                        key={member.id}
                        type="button"
                        onClick={() => {
                          onSelectOwner(member.id);
                          setError("");
                        }}
                        aria-pressed={selected}
                        className={`flex w-full items-center gap-3 rounded-lg px-2 py-3 text-left transition sm:px-3 ${
                          selected
                            ? "bg-blue-50"
                            : "hover:bg-slate-50"
                        }`}
                      >

                        {/* Avatar */}
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[9px] font-bold text-blue-500">
                          {member.initials}
                        </div>

                        {/* Member details */}
                        <div className="min-w-0 flex-1">

                          <p className="text-xs font-bold text-slate-800">
                            {member.name}
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-500">
                            {member.role}
                          </p>

                        </div>

                        {/* Email */}
                        <span className="hidden truncate text-[10px] text-slate-500 sm:block">
                          {member.email}
                        </span>

                        {/* Selection check */}
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            selected
                              ? "bg-blue-500 text-white"
                              : "border border-slate-200"
                          }`}
                        >
                          {selected && <Check size={12} />}
                        </span>

                      </button>
                    );
                  })

                ) : (

                  <p className="p-5 text-center text-xs text-slate-500">
                    No team members found.
                  </p>

                )}

              </div>

              {/* VALIDATION */}
              {error && (
                <p className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-red-600">
                  <AlertCircle size={13} />
                  {error}
                </p>
              )}

              {!selectedOwnerId && !error && (
                <p className="mt-3 text-[10px] font-semibold text-red-500">
                  Select one team member to continue.
                </p>
              )}

              {/* NOTIFICATION AND VISIBILITY */}
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="owner-notification"
                    className="mb-2 flex items-center gap-1 text-[10px] font-bold uppercase text-slate-500"
                  >
                    <Bell size={12} />
                    Notify Owner
                  </label>

                  <select
                    id="owner-notification"
                    value={notification}
                    onChange={(event) =>
                      setNotification(event.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option>Email notification</option>
                    <option>No notification</option>
                  </select>

                </div>

                <div>

                  <label
                    htmlFor="owner-visibility"
                    className="mb-2 flex items-center gap-1 text-[10px] font-bold uppercase text-slate-500"
                  >
                    <Eye size={12} />
                    Visibility
                  </label>

                  <select
                    id="owner-visibility"
                    value={visibility}
                    onChange={(event) =>
                      setVisibility(event.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs outline-none focus:border-blue-500"
                  >
                    <option>Team only</option>
                    <option>Everyone</option>
                  </select>

                </div>

              </div>

              {/* FOOTER BUTTONS */}
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">

                <button
                  type="button"
                  onClick={onBack}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <ArrowLeft size={14} />
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600"
                >
                  <Check size={14} />
                  Save follow-up
                </button>

              </div>

            </section>

            {/* RIGHT INFORMATION PANELS */}
            <aside className="min-w-0 space-y-4">

              {/* BEFORE YOU CONTINUE */}
              <div className="min-h-[205px] rounded-xl border border-slate-200 bg-white p-5">

                <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Before you continue
                </h3>

                {selectedOwnerId ? (

                  <div className="mt-4 rounded-lg bg-green-50 p-3">

                    <p className="flex items-center gap-2 text-xs font-bold text-green-700">
                      <Check size={14} />
                      Owner selected
                    </p>

                    <p className="mt-2 text-[10px] leading-4 text-slate-500">
                      This team member is responsible for the reminder.
                    </p>

                  </div>

                ) : (

                  <div className="mt-4 rounded-lg bg-red-50 p-3">

                    <p className="flex items-center gap-2 text-xs font-bold text-red-800">
                      <AlertCircle size={14} />
                      Owner required
                    </p>

                    <p className="mt-2 text-[10px] leading-4 text-slate-500">
                      Select a team member to assign responsibility for this reminder.
                    </p>

                  </div>

                )}

              </div>

              {/* WHY ASSIGN AN OWNER */}
              <div className="rounded-xl bg-blue-50 p-5">

                <h3 className="text-[10px] font-bold uppercase tracking-wide text-blue-600">
                  Why assign an owner?
                </h3>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  The owner receives the reminder and can track the next step from their queue.
                </p>

              </div>

            </aside>

          </div>
        </div>
      </main>

      {/* Mobile bottom navigation is fixed above this screen's content */}
    </div>
  );
}

export default OwnerSelection;
