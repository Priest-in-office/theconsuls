import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { useAuth, type User } from "../components/SignIn-Components/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;
const PROFILE_ENDPOINT = "/profile";

interface ProfileData {
  name: string;
  email: string;
  dateOfBirth?: string;
  role?: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
}

function formatDate(date?: string) {
  if (!date) return "Not set";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getInitials(name?: string) {
  if (!name?.trim()) return "U";
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function mapUserToProfile(user: User | null): ProfileData {
  return {
    name: user?.name || "Your Name",
    email: user?.email || "your@email.com",
    dateOfBirth: user?.dateOfBirth,
  };
}

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState<ProfileData>(mapUserToProfile(user));
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [profileError, setProfileError] = useState<string | null>(null);

  useEffect(() => {
    setProfile((prev) => ({
      ...prev,
      ...mapUserToProfile(user),
    }));
  }, [user]);

  useEffect(() => {
    const loadProfile = async () => {
      setIsLoadingProfile(true);
      setProfileError(null);

      try {
        const response = await fetch(`${API_URL}${PROFILE_ENDPOINT}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data.");
        }

        const data = await response.json();
        const userData = data.user;
        setProfile((prev) => ({
          ...prev,
          ...userData,
        }));
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load profile data.";
        setProfileError(message);
      } finally {
        setIsLoadingProfile(false);
      }
    };

    void loadProfile();
  }, []);

  const initials = useMemo(() => getInitials(profile.name), [profile.name]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background-light pb-32 pt-6 text-[#111118] dark:bg-background-dark dark:text-white">
      <div className="absolute inset-x-0 top-0 h-64 gradient-bg" />
      <div className="absolute inset-x-0 top-0 h-64 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <section className="relative z-10 mx-auto w-[92%] max-w-[680px]">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Profile</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">Your Account</h1>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Logout
          </button>
        </div>

        <article className="rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-[#1a1a2e]">
          {isLoadingProfile ? (
            <div className="space-y-4">
              <div className="h-24 animate-pulse rounded-2xl bg-black/5 dark:bg-white/10" />
              <div className="h-16 animate-pulse rounded-2xl bg-black/5 dark:bg-white/10" />
              <div className="h-16 animate-pulse rounded-2xl bg-black/5 dark:bg-white/10" />
            </div>
          ) : (
            <>
              {profileError && (
                <div className="mb-5 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  {profileError}
                </div>
              )}

              <div className="mb-6 flex items-center gap-4">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.name} profile avatar`}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    {initials}
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#111118] dark:text-white">
                    {profile.name}
                  </h2>
                  <p className="text-sm text-[#60608a] dark:text-gray-400">{profile.email}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ececf4] bg-[#fafafe] p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#60608a] dark:text-gray-400">Date of Birth</p>
                  <p className="mt-1 text-sm font-semibold text-[#111118] dark:text-white">{formatDate(profile.dateOfBirth)}</p>
                </div>

                <div className="rounded-2xl border border-[#ececf4] bg-[#fafafe] p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#60608a] dark:text-gray-400">Role</p>
                  <p className="mt-1 text-sm font-semibold text-[#111118] dark:text-white">{profile.role || "Member"}</p>
                </div>

                <div className="rounded-2xl border border-[#ececf4] bg-[#fafafe] p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#60608a] dark:text-gray-400">Phone</p>
                  <p className="mt-1 text-sm font-semibold text-[#111118] dark:text-white">{profile.phone || "Not set"}</p>
                </div>

                <div className="rounded-2xl border border-[#ececf4] bg-[#fafafe] p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#60608a] dark:text-gray-400">Location</p>
                  <p className="mt-1 text-sm font-semibold text-[#111118] dark:text-white">{profile.location || "Not set"}</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[#ececf4] bg-[#fafafe] p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#60608a] dark:text-gray-400">Bio</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1d1d31] dark:text-gray-200">
                  {profile.bio || "Not set"}
                </p>
              </div>
            </>
          )}
        </article>
      </section>

      <BottomNav />
    </main>
  );
}
