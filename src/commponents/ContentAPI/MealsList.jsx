import { useMealsListContext } from "./MealsProvider";

const MealsList = () => {
  const { meals }  = useMealsListContext();// {meals: Array(3)}
  return (
    <>
      <h2 >title: Meals List using Context API</h2>
      {meals.map((meal, index) => (<h3 key={index} style={{backgroundColor:'skyblue'}}>{meal}</h3>))}
    </>
  )
};

export default MealsList;