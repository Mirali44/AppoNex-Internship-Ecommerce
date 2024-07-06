import MealItem from './MealItem.jsx';
import Error from './error.jsx';
import { useSelector } from 'react-redux'; 

export default function Meals() {
  const mealsData = useSelector((state) => state.meal.items)
  const filteredMealsData = useSelector((state) => state.meal.filteredItems)
  const length = Object.keys(filteredMealsData).length

  return (
    <ul id="meals">
      {/* {(length > 0 ? filteredMealsData : mealsData).map((meal) => ( */}
        {filteredMealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}