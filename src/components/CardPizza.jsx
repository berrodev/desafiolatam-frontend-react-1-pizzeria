const CardPizza = ({ name, price, ingredients, img }) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="flex flex-col max-w-sm mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md ">
      <img src={img} alt="Pizza Image" className="object-cover w-full h-48" />
      <div className="flex flex-col flex-1 p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {nameCapitalized}
        </h2>
        <div className="flex-1 mb-4 text-gray-600">
          <span className="font-semibold">Ingredientes:</span>{' '}
          <ul className="list-disc list-inside">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <p className="mb-4 text-lg font-semibold text-gray-800">
          Precio: <span className="text-green-500">${price}</span>
        </p>
        <div className="flex justify-between mt-auto">
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
            Ver Más 👀
          </button>
          <button className="px-4 py-2 text-sm text-white bg-gray-900 rounded hover:bg-gray-600">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
