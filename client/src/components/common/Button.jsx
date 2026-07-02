function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-medium transition duration-300";

  const variants = {
    primary:
      "bg-lime-500 text-white hover:bg-lime-600",

    secondary:
      "border border-lime-500 text-lime-600 hover:bg-lime-50",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {text}
    </button>
  );
}

export default Button;