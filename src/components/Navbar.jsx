const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between w-full px-4">
      <div className="flex gap-2">
        <a href="/">🍕Home</a>
        <a href="/profile">🔒Profile</a>
        <a href="/logout">🔒Logout</a>
        <a href="/login">🔐Login</a>
        <a href="/register">🔐Register</a>
      </div>
      <a href="/total">🛒Total: $20.000</a>
    </nav>
  );
};

export default Navbar;
