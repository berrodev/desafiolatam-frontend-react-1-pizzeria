import { useState, useEffect } from 'react';

const DUMB_PIZZA = {
  desc: 'La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.',
  id: 'p001',
  img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
  ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
  name: 'napolitana',
  price: 5950,
};
const URL_ENDPOINT = 'http://localhost:5000/api/pizzas/p001';

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(URL_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2 className="text-2xl font-bold text-center">{pizza.name}</h2>
      <div className="flex items-center">
        <img
          src={pizza.img}
          alt={pizza.name}
          className="object-cover w-48 h-48 mr-4 rounded-lg shadow-lg"
        />
        <div>
          <p>{pizza.desc}</p>

          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{pizza.price}</p>
        </div>
      </div>
    </>
  );
};
export default Pizza;
