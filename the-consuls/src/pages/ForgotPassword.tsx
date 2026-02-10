import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/SignIn-Components/AuthLayout";
import InputField from "../components/SignIn-Components/InputField";
import SubmitButton from "../components/SignIn-Components/SubmitButton";
import { useFormValidation } from "../components/SignIn-Components/FormValidation";

type Step = "email" | "verification";

export default function ForgotPassword() {
  const [step, setStep] = useState<Step>("email");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState("");

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

  const handleEmailSubmit = async () => {
    if (emailForm.validate()) {
      setIsLoading(true);
      setError(null);
      
      try {
        // TODO: Backend call to check if email exists and send code
        // await checkEmailAndSendCode(emailForm.values.email);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
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
        // TODO: Backend call to verify code
        // await verifyCode(userEmail, codeForm.values.code);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // TODO: Navigate to reset password page or handle success
        console.log("Code verified for:", userEmail);
      } catch (err) {
        setError("Invalid code. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // TODO: Backend call to resend code
      // await resendCode(userEmail);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Show success message or toast
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
        : "Check your inbox for the verification code."}
      badge="Password Recovery"
    >
      <h2 className="text-2xl font-bold text-[#111118] dark:text-white mb-2">
        {step === "email" ? "" : "Enter Verification Code"}
      </h2>
      
      <p className="text-[#60608a] dark:text-gray-400 text-sm mb-8">
        {step === "email" 
          ? ""
          : <>We've sent a 6-digit code to <span className="text-primary font-semibold">{userEmail}</span></>
        }
      </p>

      {error && (
        <div className="bg-red-500/10 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
          {error}
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
      ) : (
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
            ← Use a different email
          </button>
        </>
      )}

      <div className="mt-8 pt-6 border-t border-[#dbdbe6] dark:border-gray-700">
        <p className="text-center text-[#60608a] dark:text-gray-400 font-medium">
          Remember your password?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
