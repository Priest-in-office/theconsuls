import { useRef } from "react";
import type { DateValue } from "./FormValidation";

interface DateFieldProps {
  label: string;
  value: DateValue;
  onChange: (value: DateValue) => void;
  error?: string;
  marginBottom?: string;
}

export default function DateField({ label, value, onChange, error, marginBottom = "mb-6" }: DateFieldProps) {
  const dayRef = useRef<HTMLInputElement>(null);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  const getDisplayValue = () => {
    if (value.day && value.month && value.year) {
      const monthName = months[parseInt(value.month) - 1];
      return `${monthName} ${value.day}, ${value.year}`;
    }
    return "";
  };

  const getInputValue = () => {
    if (value.day && value.month && value.year && value.year.length === 4) {
      return `${value.year}-${value.month.padStart(2, '0')}-${value.day.padStart(2, '0')}`;
    }
    return "";
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    if(dateValue) {
      const [year, month, day] = dateValue.split("-");
      onChange({ day, month, year });
    } else {
      onChange({ day: "", month: "", year: "" });
    }
  };

  const openCalendar = () => {
    dayRef.current?.showPicker();
  };

  return (
    <div className={marginBottom}>
      <label className="flex flex-col gap-2">
        <span className="text-[#111118] dark:text-gray-300 text-sm font-semibold ml-1">
          {label}
        </span>
        <div className="relative">
          <input
            ref={dayRef}
            type="date"
            value={getInputValue()}
            onChange={handleDateChange}
            max={new Date().toISOString().split("T")[0]}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          {/* Styled display field */}
          <div
            onClick={openCalendar}
            className={`w-full rounded-full border bg-white dark:bg-[#252545] h-14 px-6 flex items-center justify-between cursor-pointer transition-all ${
              error ? "border-red-500" : "border-[#dbdbe6] dark:border-gray-700"
            }`}
          >
            <span className={`${getDisplayValue() ? "text-[#111118] dark:text-white" : "text-[#60608a]"}`}>
              {getDisplayValue() || "Select your date of birth"}
            </span>
            <span className="material-symbols-outlined text-[#60608a]">
              calendar_month
            </span>
          </div>
        </div>
        {error && <span className="text-red-500 text-xs ml-1">{error}</span>}
      </label>
    </div>
  )
}