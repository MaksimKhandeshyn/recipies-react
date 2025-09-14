import { RecipiesItem } from "../RecipiesItem/RecepiesItem";
import recipies from "../../data/recipies.json";
export const RecipiesList = () => {
  console.log(recipies);
  return (
    <ul>
      {recipies.map((recipe) => {
        console.log(recipe);
        return <RecipiesItem recipe={recipe} />;
      })}
    </ul>
  );
};
