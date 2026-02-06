import { useState } from "react";

interface InputFieldProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  marginBottom?: string;
}

export default function InputField({ label, type, placeholder, value, onChange, error, marginBottom = "mb-6" }: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <>
      <div className={marginBottom}>
        <label className="flex flex-col gap-2">
          <span className="text-[#111118] dark:text-gray-300 text-sm font-semibold ml-1">{label}</span>
          <div className="relative flex items-center">
            <input 
              className={`w-full rounded-full border border-[#dbdbe6] dark:border-gray-700 bg-white dark:bg-[#252545] h-14 px-6 text-[#111118] dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-[#60608a]
              ${isPassword ? "pr-14" : ""}
              ${error ? "border-red-500" : "border-[#dbdbe6] dark:border-gray-700"}`} 
              placeholder={placeholder} 
              type={isPassword && !showPassword ? "password" : "text"}
              value={value}
              onChange={e => onChange(e.target.value)}
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 text-[#60608a] hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            )}
          </div>
          {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
        </label>
      </div>
    </>
  )
}