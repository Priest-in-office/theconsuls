import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../components/SignIn-Components/AuthLayout";
import InputField from "../components/SignIn-Components/InputField";
import SubmitButton from "../components/SignIn-Components/SubmitButton";
import SocialLogins from "../components/SignIn-Components/SocialLogins";
import { useAuth } from "../components/SignIn-Components/AuthContext";
import { useFormValidation } from "../components/SignIn-Components/FormValidation";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading, error } = useAuth();
  const successMessage = location.state?.message || null;
  const { values, errors, setValue, validate } = useFormValidation(
    { email: "", password: "" },
    {
      email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      password: { required: true, minLength: 6 },
    }
  );

  const handleSubmit = async () => {
    if (validate()) {
      await login(values.email, values.password);
      navigate("/");
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth
    console.log("Google login");
  };

  const handleAppleLogin = () => {
    // Implement Apple OAuth
    console.log("Apple login");
  };

  return (
    <AuthLayout
      title="Your Story Starts Here"
      subtitle="Sign in to continue"
    >
      {successMessage && (
        <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl mb-4 text-sm">
          {successMessage}
        </div>
      )}

      <h2 className="text-2xl font-bold text-[#111118] dark:text-white mb-8">Sign In</h2>

      {error && (
        <div className="bg-red-500/10 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
          {error}
        </div>
      )}

      <InputField
        label="Email Address"
        type="email"
        placeholder="hello@youthchurch.com"
        value={values.email}
        onChange={(value) => setValue("email", value)}
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={(value) => setValue("password", value)}
        error={errors.password}
        marginBottom="mb-2"
      />

      <div className="flex justify-end mb-8">
        <Link to="/forgot-password" className="text-primary text-sm font-semibold hover:underline">
          Forgot Password?
        </Link>
      </div>

      <SubmitButton text="Sign In" isLoading={isLoading} onClick={handleSubmit} />

      <SocialLogins onGoogleClick={handleGoogleLogin} onAppleClick={handleAppleLogin} />

      <p className="text-center text-[#60608a] dark:text-gray-400 font-medium">
        New here?
        <Link to="/signup" className="text-primary font-bold hover:underline ml-1">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}