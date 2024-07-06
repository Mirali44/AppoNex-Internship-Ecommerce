import { mealActions } from "./meal-slice";


export const fetchMeals = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/meals"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch places");
      }

      const resData = await response.json();
      return resData;
    };

    try {
      const mealData = await fetchData();
      dispatch(
        mealActions.replaceMeals({
          items: mealData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
