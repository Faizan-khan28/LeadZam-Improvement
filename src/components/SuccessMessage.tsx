import { CheckCircle2, CalendarDays } from "lucide-react";

interface SuccessMessageProps {
  leadName: string;
  onCreateAnother: () => void;
}

function SuccessMessage({
  leadName,
  onCreateAnother,
}: SuccessMessageProps) {
  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
        <CheckCircle2 size={36} className="text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900">
        Follow-up Scheduled!
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Your follow-up for{" "}
        <span className="font-semibold text-gray-800">
          {leadName}
        </span>{" "}
        has been successfully scheduled.
      </p>

      <div className="my-6 flex items-center justify-center gap-2 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
        <CalendarDays size={18} />
        Follow-up details have been saved.
      </div>

      <button
        onClick={onCreateAnother}
        className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Create Another Follow-up
      </button>
    </div>
  );
}

export default SuccessMessage;