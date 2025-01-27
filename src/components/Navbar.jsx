const Navbar = () => {
  return (
    <nav className="flex justify-between w-full px-4 text-white bg-gray-900">
      <div className="flex gap-2">
        <a href="/">🍕Home</a>
        <a href="/profile">🔒Profile</a>
        <a href="/logout">🔒Logout</a>
        <a href="/login">🔐Login</a>
        <a href="/register">🔐Register</a>
      </div>
      <a href="/total">🛒Total: $</a>
    </nav>
  );
};

export default Navbar;
