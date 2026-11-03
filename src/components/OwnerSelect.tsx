import { ChevronDown } from "lucide-react";
import type { TeamMember } from "../types";

interface OwnerSelectProps {
  members: TeamMember[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

function OwnerSelect({
  members,
  value,
  onChange,
  error,
}: OwnerSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">
        Assign Owner <span className="text-red-500">*</span>
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-blue-500"
        >
          <option value="">Select team member</option>

          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name} - {member.role}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export default OwnerSelect;