import RegisterForm from '../components/RegisterForm';

const Register = ({ mySwal }) => {
  return (
    <section className="max-w-6xl p-4 mx-auto">
      <RegisterForm mySwal={mySwal} />
    </section>
  );
};

export default Register;
