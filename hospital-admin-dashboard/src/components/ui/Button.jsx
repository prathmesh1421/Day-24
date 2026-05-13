function Button({ title }) {
  return (
    <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
      {title}
    </button>
  );
}

export default Button;
