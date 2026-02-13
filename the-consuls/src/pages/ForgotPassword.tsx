import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthLayout from "../components/SignIn-Components/AuthLayout";
import InputField from "../components/SignIn-Components/InputField";
import SubmitButton from "../components/SignIn-Components/SubmitButton";
import { useFormValidation } from "../components/SignIn-Components/FormValidation";
const API_URL = import.meta.env.VITE_API_URL;

type Step = "email" | "verification" | "reset";

async function sendResetCode(email: string) {
  const response = await fetch(`${API_URL}/password-recovery/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.message || "Failed to send reset code");
  }
}

async function verifyCode(email: string, code: string) {
  const response = await fetch(`${API_URL}/password-recovery/verify-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });
  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.message || "Failed to verify code");
  }
}

async function resetPassword(email: string, code: string, new_password: string) {
  const response = await fetch(`${API_URL}/password-recovery/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code, new_password }),
  });
  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.message || "Failed to reset password");
  }
}

export default function ForgotPassword() {
  const [step, setStep] = useState<Step>("email");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState("");
  const { values, errors, setValue, validate } = useFormValidation(
    { password: "", confirmPassword: "" },
    { password: { required: true, minLength: 8 }, confirmPassword: { required: true, match: "password" } }
  );

  // Mask Email
  const maskEmail = (email: string) => {
    const [local, domain] = email.split("@");
    const maskedLocal = local.length <= 6 ? local[0] + "*".repeat(local.length - 2) + local[local.length - 1] : local.slice(0, 3) + "*".repeat(local.length - 6) + local.slice(-3);
    return `${maskedLocal}@${domain}`;
  }

  // Email form validation
  const emailForm = useFormValidation(
    { email: "" },
    { email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } }
  );

  // Verification code validation
  const codeForm = useFormValidation(
    { code: "" },
    { code: { required: true, minLength: 6 } }
  );

  useEffect(() => {
    setError(null);
    setMessage(null);
  }, [step]);

  const handleEmailSubmit = async () => {
    if (emailForm.validate()) {
      setIsLoading(true);
      setError(null);
      
      try {
        await sendResetCode(emailForm.values.email);
        setUserEmail(emailForm.values.email);
        setStep("verification");
      } catch (err) {
        setError("Email not found. Please check and try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCodeSubmit = async () => {
    if (codeForm.validate()) {
      setIsLoading(true);
      setError(null);
      
      try {
        await verifyCode(userEmail, codeForm.values.code);
        setStep("reset");
      } catch (err) {
        setError("Invalid code. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleResetPassword = async () => {
    const isValid = validate();

    if (!isValid) return;

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    setError(null);
    
    try {
      await resetPassword(userEmail, codeForm.values.code, values.password);
      setMessage('Password reset successful. Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleResendCode = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await sendResetCode(userEmail);
    } catch (err) {
      setError("Failed to resend code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle={step === "email" 
        ? "No worries! Enter your email below and we'll send you a code to reset your password." 
        : step === "verification"
          ? "Check your inbox for the verification code."
          : "Enter your new password."}
      badge="Password Recovery"
    >
      <h2 className="text-2xl font-bold text-[#111118] dark:text-white mb-2">
        {step === "email" ? "" : step === "verification" ? "Enter Verification Code" : "Reset Password"}
      </h2>
      
      <p className="text-[#60608a] dark:text-gray-400 text-sm mb-8">
        {step === "email" 
          ? ""
          : step === "verification"
            ? <>We've sent a 6-digit code to <span className="text-primary font-semibold">{maskEmail(userEmail)}</span></>
            : "Enter your new password."
        }
      </p>

      {error && (
        <div className="bg-red-500/10 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
          {error}
        </div>
      )}
      {message && (
        <div className="bg-green-500/10 text-green-500 px-4 py-3 rounded-xl mb-6 text-sm">
          {message}
        </div>
      )}

      {step === "email" ? (
        <>
          <InputField
            label="Email Address"
            type="email"
            placeholder="hello@youthchurch.com"
            value={emailForm.values.email}
            onChange={(value) => emailForm.setValue("email", value)}
            error={emailForm.errors.email}
          />

          <SubmitButton 
            text="Send Reset Code" 
            isLoading={isLoading} 
            onClick={handleEmailSubmit} 
          />
        </>
      ) : step === "verification" ? (
        <>
          {/* Code Input Boxes */}
          <div className="mb-6">
            <label className="block text-[#111118] dark:text-gray-300 text-sm font-semibold ml-1 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="000000"
              value={codeForm.values.code}
              onChange={(e) => codeForm.setValue("code", e.target.value.replace(/\D/g, ""))}
              className={`w-full rounded-full border bg-white dark:bg-[#252545] h-14 px-6 text-center text-2xl font-bold tracking-[0.5em] text-[#111118] dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-[#60608a] placeholder:tracking-[0.5em]
                ${codeForm.errors.code ? "border-red-500" : "border-[#dbdbe6] dark:border-gray-700"}`}
            />
            {codeForm.errors.code && (
              <span className="text-red-500 text-xs mt-1 ml-1 block">{codeForm.errors.code}</span>
            )}
          </div>

          <SubmitButton 
            text="Verify Code" 
            isLoading={isLoading} 
            onClick={handleCodeSubmit} 
          />

          <div className="flex justify-center mb-8">
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isLoading}
              className="text-primary text-sm font-semibold hover:underline disabled:opacity-50"
            >
              Didn't receive the code? Resend
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setStep("email");
              setError(null);
              codeForm.setValue("code", "");
            }}
            className="w-full text-center text-[#60608a] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors"
          >
            â† Use a different email
          </button>
        </>
      ) : step === "reset" ? (
        <>
          <InputField
            label="Password"
            type="password"
            placeholder="At least 8 characters"
            value={values.password as string}
            onChange={(value) => setValue("password", value)}
            error={errors.password}
          />
          
          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            value={values.confirmPassword as string}
            onChange={(value) => setValue("confirmPassword", value)}
            error={errors.confirmPassword}
          />

          <SubmitButton 
            text="Reset Password" 
            isLoading={isLoading} 
            onClick={handleResetPassword} 
          />
        </>
      ) : null}
    </AuthLayout>
  );
}

