import Counter from "./Counter";
import MealsList from "./MealsList";
import MealsProvider from "./MealsProvider";

function ContentAPI() {
  return (
    <>
      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>
    </>
  )
}

export default ContentAPI;