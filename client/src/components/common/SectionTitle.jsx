function SectionTitle({
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div
      className={`mb-16 ${
        align === "center"
          ? "text-center"
          : "text-left"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;