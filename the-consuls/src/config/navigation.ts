export interface NavItem {
  path: string;
  icon: string;
  label: string;
}

export const navItems: NavItem[] = [
  { path: "/", icon: "home", label: "Home" },
  { path: "/groups", icon: "group", label: "Groups" },
  { path: "/live", icon: "play_circle", label: "Live" },
  { path: "/profile", icon: "person", label: "Profile" },
];
