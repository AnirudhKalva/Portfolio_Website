import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-1 rounded-md text-sm font-medium bg-[#00E0FF] text-black hover:bg-[#6A11CB] transition"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;

