import Counter from "./Counter";
import MealsList from "./MealsList";
import MealsProvider from "./MealsProvider";

function ContentAPI() {
  return (
    <>
      <MealsProvider>
        <MealsList/>
        <Counter/>
        {/* <MealsProvider.Consumer>
          {value => <div>11</div> }
        </MealsProvider.Consumer> */}
      </MealsProvider>
    </>
  )
}

export default ContentAPI;