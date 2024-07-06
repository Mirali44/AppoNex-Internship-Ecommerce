import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { useDispatch } from "react-redux";
import { fetchMeals } from "./store/meal-action.js";
import DropdownSlider from './components/UI/priceRange.jsx'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMeals())
  }, [dispatch]);

  return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
