const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={img} alt="Pizza Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Ingredientes:</span>{' '}
          {ingredients.join(', ')}
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Precio: <span className="text-green-500">${price}</span>
        </p>
        <div className="flex justify-between">
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
            Ver Más 👀
          </button>
          <button className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
