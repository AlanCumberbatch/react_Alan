import { useMealsListContext } from "./MealsProvider";
import MealsProvider from "./MealsProvider";

/*
  当我们在React应用中需要在多个组件之间共享数据时，可以使用React Context Provider。
  Context提供了一种在组件树中共享数据的方式，而不必通过逐层传递props。
*/
const Counter = () => {
  const { meals } = useMealsListContext();
  console.log("MealsProvider.Consumer", MealsProvider.Consumer);// undefined
  return (
    <div style={{backgroundColor:'blue'}}>
      <h3>Number of meals today: {meals.length}</h3>
      {/* <MealsProvider.Consumer>
        {theme => (
          <button className={theme} />
        )}
        React.js
      </MealsProvider.Consumer> */}
    </div>
  );
}
export default Counter;