const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>${price}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <img src={img} alt={name} />
    </div>
  );
};

export default CardPizza;
