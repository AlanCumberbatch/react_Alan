import { useEffect } from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
}
const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/dessarts"
      render={(data) => <p>{data.length} dessarts</p>}
    />
  )
};
const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  )
};
function RenderProps() {
  return (
    <>
      <h2>RenderProps</h2>
      <DessertsCount/>
      <DrinksCount/>
    </>
  )
}
export default RenderProps;