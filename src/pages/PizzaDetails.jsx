import Pizza from '../components/Pizza';
import { useParams } from 'react-router';
const PizzaDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <Pizza id={id} />;
};

export default PizzaDetails;
