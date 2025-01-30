import { useEffect } from 'react';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../pizzas';

const getPizzaData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/pizzas');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const Home = () => {
  useEffect(() => {
    getPizzaData();
  }, []);

  return (
    <section className="grid grid-cols-1 gap-4 m-4 md:grid-cols-3">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))}
    </section>
  );
};

export default Home;
