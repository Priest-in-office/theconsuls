import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/SignIn-Components/AuthLayout";
import InputField from "../components/SignIn-Components/InputField";
import SubmitButton from "../components/SignIn-Components/SubmitButton";
import SocialLogins from "../components/SignIn-Components/SocialLogins";
import DateField from "../components/SignIn-Components/DateField";
import { useAuth } from "../components/SignIn-Components/AuthContext";
import { useFormValidation } from "../components/SignIn-Components/FormValidation";

export default function Signup() {
  const navigate = useNavigate();
  const { signup, isLoading, error } = useAuth();

  const { values, errors, setValue, validate, getDateAsISO } = useFormValidation(
    { name: "", email: "", password: "", confirmPassword: "", dob: { day: "", month: "", year: "" } },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      password: { required: true, minLength: 8 },
      confirmPassword: { required: true, match: "password" },
      dob: { required: true, minAge: 13 },
    }
  );

  const handleSubmit = async () => {
    if (validate()) {
      const dateOfBirth = getDateAsISO("dob");
      await signup({
        email: values.email as string,
        password: values.password as string,
        name: values.name as string,
        dateOfBirth: dateOfBirth || "",
      });
      navigate("/");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google signup");
  };

  const handleAppleLogin = () => {
    console.log("Apple signup");
  };

  return (
    <AuthLayout
      title="Become a Consul today"
      subtitle="We also hate paperwork, but we will require this only this time"
      badge="Get Started"
    >
      <h2 className="text-2xl font-bold text-[#111118] dark:text-white mb-8">Create Account</h2>

      {error && (
        <div className="bg-red-500/10 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
          {error}
        </div>
      )}

      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        value={values.name as string}
        onChange={(value) => setValue("name", value)}
        error={errors.name}
      />

      <InputField
        label="Email Address"
        type="email"
        placeholder="hello@youthchurch.com"
        value={values.email as string}
        onChange={(value) => setValue("email", value)}
        error={errors.email}
      />

      <DateField
        label="Date of Birth"
        value={values.dob}
        onChange={(value) => setValue("dob", value)}
        error={errors.dob}
      />

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

      <SubmitButton text="Create Account" isLoading={isLoading} onClick={handleSubmit} />

      <SocialLogins onGoogleClick={handleGoogleLogin} onAppleClick={handleAppleLogin} />

      <p className="text-center text-[#60608a] dark:text-gray-400 font-medium">
        Already have an account?
        <Link to="/login" className="text-primary font-bold hover:underline ml-1">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}