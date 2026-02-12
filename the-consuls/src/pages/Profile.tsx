import { useAuth } from "../components/SignIn-Components/AuthContext";
import BottomNav from "../components/BottomNav";

export default function Profile() {
const { user, logout } = useAuth();

const handleLogout = async () => {
  await logout();
}

return (
  <>
    <h1>Hi {user?.name}</h1>
    <button onClick={handleLogout}>Logout</button>
    <BottomNav />
  </>
)
}