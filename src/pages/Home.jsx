import CardPizza from '../components/CardPizza';
import { pizzas } from '../pizzas';
const Home = () => {
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
