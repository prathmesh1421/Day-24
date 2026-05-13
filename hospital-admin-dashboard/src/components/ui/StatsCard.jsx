function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-gray-500 text-lg mb-2">
        {title}
      </h3>

      <h1 className="text-3xl font-bold text-secondary">
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;
