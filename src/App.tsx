
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

import FollowUpForm from "./components/Followup";
import OwnerSelection from "./components/OwnerSelection";
import SuccessMessage from "./components/SuccessMessage";

import { teamMembers } from "./data/mockLeads";
import type { FollowUpFormData } from "./types";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] =
    useState<FollowUpFormData | null>(null);

  const [selectedOwnerId, setSelectedOwnerId] =
    useState("");

  const [savedData, setSavedData] =
    useState<FollowUpFormData | null>(null);

  // Step 1: Follow-up form submit
  const handleContinue = (data: FollowUpFormData) => {
    setFormData(data);
    setStep(2);
  };

  // Step 2: Save follow-up with selected owner
  const handleSave = () => {
    if (!formData || !selectedOwnerId) return;

    const finalData: FollowUpFormData = {
      ...formData,
      ownerId: selectedOwnerId,
    };

    setSavedData(finalData);
    setStep(3);
  };

  // Go back to Step 1
  const handleBack = () => {
    setStep(1);
  };

  // Create another follow-up
  const handleCreateAnother = () => {
    setStep(1);
    setFormData(null);
    setSavedData(null);
    setSelectedOwnerId("");
  };

  // Step 1: Follow-up form
  if (step === 1) {
    return <FollowUpForm onSubmit={handleContinue} />;
  }

  // Step 2 and Step 3
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <LayoutDashboard size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                LeadZam
              </h1>
              <p className="text-xs text-gray-500">
                CRM Dashboard
              </p>
            </div>
          </div>

          <span className="text-sm font-medium text-gray-500">
            Follow-up Management
          </span>

        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-5 py-8">

        {/* Back Button */}
        <button
          type="button"
          onClick={
            step === 2
              ? handleBack
              : handleCreateAnother
          }
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Back to Follow-ups
        </button>

        {/* Page Heading */}
        <div className="mb-7">

          <div className="mb-2 flex items-center gap-2 text-sm text-blue-600">
            <CalendarDays size={17} />
            Lead Management
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {step === 2
              ? "Assign a follow-up owner"
              : "Follow-up Confirmation"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {step === 2
              ? "Choose who is responsible for the next action."
              : "Your follow-up has been scheduled successfully."}
          </p>

        </div>

        {/* Step 2: Owner Selection */}
        {step === 2 && (
          <OwnerSelection
            members={teamMembers}
            selectedOwnerId={selectedOwnerId}
            onSelectOwner={setSelectedOwnerId}
            onBack={handleBack}
            onSave={handleSave}
          />
        )}

        {/* Step 3: Success Message */}
        {step === 3 && savedData && (
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

            <SuccessMessage
              leadName={savedData.leadName}
              onCreateAnother={handleCreateAnother}
            />

          </div>
        )}

      </main>
    </div>
  );
}

export default App;
