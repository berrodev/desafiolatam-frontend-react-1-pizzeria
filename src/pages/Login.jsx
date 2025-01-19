import LoginForm from '../components/LoginForm';

const Login = ({ mySwal }) => {
  return (
    <section className="max-w-6xl p-4 mx-auto">
      <LoginForm mySwal={mySwal} />
    </section>
  );
};

export default Login;
