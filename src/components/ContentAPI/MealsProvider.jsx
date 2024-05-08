import { createContext, useContext, useState } from "react";

const MealsContext = createContext();
const todayMeals = ['Baked Beans', 'Baked Sweet Potatoes', 'Baked Potatoes'];

const MealsProvider = ({children}) => {
  const [meals, setMealsList] = useState(todayMeals);

  return (
    <MealsContext.Provider value={{meals}}>
      {children}
    </MealsContext.Provider>
  )
}

export const useMealsListContext = () => useContext(MealsContext);// Whats this for ? --> to avoiding props drilling(passing props through multiple layers and components) and making global states or values accessible to components deep in the component tree

export default MealsProvider;