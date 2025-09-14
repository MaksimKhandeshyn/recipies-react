export const RecipiesItem = ({
  recipe: { name, time, servings, calories, difficulty, image },
}) => {
  return (
    <li>
      <img src={image} alt={name} width={200} height={200} />
      <h2>{name}</h2>
      <p>{calories}</p>
      <p>Time: {time}</p>
      <p>Difficult: {difficulty}</p>
      <p>servings: {servings}</p>
    </li>
  );
};
