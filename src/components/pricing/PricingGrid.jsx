import PricingCard from "./PricingCard";

const PricingGrid = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      features: ["Basic Tracker", "500MB Vault", "Standard Support"],
      cta: "Get Started",
    },
    {
      title: "Scholar",
      price: "$12",
      badge: "MOST POPULAR",
      features: [
        "Advanced Analytics",
        "10GB Vault",
        "Unlimited Checks",
        "Priority Support",
      ],
      cta: "Go Scholar",
      highlight: true,
    },
    {
      title: "Institution",
      price: "$49",
      features: [
        "Dashboard",
        "Unlimited Vault",
        "API Access",
        "Manager Support",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      {plans.map((plan, i) => (
        <PricingCard key={i} plan={plan} highlight={plan.highlight} />
      ))}
    </section>
  );
};

export default PricingGrid;