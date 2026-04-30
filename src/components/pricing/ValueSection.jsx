const ValueSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
      
      <div className="bg-blue-50 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold">Unmatched Accuracy</h3>
        <p className="text-gray-500 mt-2">
          Our system updates admission data continuously.
        </p>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold">Global Scale</h3>
        <p className="text-gray-500 mt-2">
          Supporting students worldwide.
        </p>
      </div>

    </section>
  );
};

export default ValueSection;