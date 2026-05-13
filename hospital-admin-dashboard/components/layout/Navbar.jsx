function Navbar() {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Hospital Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="admin"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h2 className="font-semibold">Admin</h2>
          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
