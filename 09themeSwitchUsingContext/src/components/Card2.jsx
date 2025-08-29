import useTheme from "../contexts/theme";

export default function Card2() {
  const { themeMode } = useTheme();

  return (
    <div
      className={`w-full rounded-lg shadow p-4 max-w-sm mx-auto transition-colors duration-300
        ${themeMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <h2 className="text-xl font-bold mb-2">Card Title</h2>
      <p className="text-sm">
        This is a sample card. Theme toggling now works without a config file!
      </p>
    </div>
  );
}
