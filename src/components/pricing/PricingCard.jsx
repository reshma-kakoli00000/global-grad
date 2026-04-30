const PricingCard = ({ plan, highlight }) => {
  return (
    <div
      className={`rounded-2xl p-6 ${
        highlight
          ? "bg-blue-600 text-white shadow-lg scale-105"
          : "bg-white border border-gray-200"
      }`}
    >
      {plan.badge && (
        <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <h3 className="mt-4 text-lg font-semibold">{plan.title}</h3>

      <p className="text-3xl font-bold mt-2">
        {plan.price}
        <span className="text-sm font-normal">/month</span>
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        {plan.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full py-2 rounded-lg text-sm ${
          highlight
            ? "bg-white text-blue-600"
            : "border border-gray-300"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
};

export default PricingCard;