
const styles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
};

export default function Button({ variant = "primary", children }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg transition cursor-pointer ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
