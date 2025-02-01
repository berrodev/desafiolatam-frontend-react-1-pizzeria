import { useState, useEffect } from 'react';

const URL_ENDPOINT = 'http://localhost:5000/api/pizzas/p003';

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(URL_ENDPOINT)
      .then((res) => res.json())
      .then(({ name, ...data }) => {
        setPizza({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          ...data,
        });
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col-reverse w-full gap-6 p-12 tracking-wide sm:flex-row">
      <div className="flex flex-col w-full gap-4 sm:gap-2 sm:w-1/2 justify-evenly">
        <h2 className="text-4xl tracking-widest">{pizza.name}</h2>
        <ul className="flex flex-wrap justify-between bg-[#e5d7d7]">
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient} className="italic font-light">
              {ingredient}
            </li>
          ))}
        </ul>
        <p>{pizza.desc}</p>
        <span className="text-3xl font-normal tracking-widest italic bg-[#e5d7d7] w-fit px-4">
          ${pizza.price}
        </span>
      </div>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="object-fill h-auto sm:w-1/2 rounded-2xl aspect-video"
      />
    </div>
  );
};
export default Pizza;
