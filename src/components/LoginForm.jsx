import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // Clear the error message when the user starts typing
    setError(null);
    // Update the form data
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the password is at least 6 characters
    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    // If the passwords match, log the form data
    console.log(formData);
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <form
      className="p-4 mx-auto border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
        Login
      </h2>
      <div className="mb-5">
        <label
          htmlFor="login-email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="login-email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@example.com"
          required
          onChange={handleChange}
          value={formData.email}
          autoComplete="email"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="login-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          name="password"
          type="password"
          id="login-password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={handleChange}
          value={formData.password}
          minLength={6}
        />
      </div>

      <div className="min-h-10">
        {error && (
          <div className="my-2 text-sm text-center text-red-500">{error}</div>
        )}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
