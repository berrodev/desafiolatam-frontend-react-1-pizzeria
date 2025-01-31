import { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzaData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPizzaData();
  }, []);

  return (
    <section className="grid grid-cols-1 gap-4 m-4 md:grid-cols-3">
      {pizzas.map(({ id, name, price, ingredients, img, desc }) => (
        <CardPizza
          key={id}
          name={name}
          price={price}
          ingredients={ingredients}
          img={img}
          desc={desc}
        />
      ))}
    </section>
  );
};

export default Home;
