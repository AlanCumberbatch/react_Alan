import { useEffect, useState } from "react";
import {LiveOrders} from "./ManipulatingChildrenDynamicallyInJSX"
console.log('%c [ LiveOrders ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', LiveOrders)

const DataSource = {
  getOrders: () => {
    return
  }
}
function CrossCuttingConcerns() {
  // Cross-cutting concerns in applications
  // Components and reusing behavior
  // Patterns for common functionality in React

  // Higher-oder component(HOC)
  // eg:
  const withSubscription = (WrappedComponent, selectedData) => {
    return (props) => {
      const [data, setData] = useState([]);

      useEffect(() => {
        const handleChange = () => {
          const newData = selectedData(DataSource, props);
          setData(newData);
        };

        DataSource.addListener(handleChange);
        return () => {
          DataSource.removeListener(handleChange);
        };
      }, []);

      return <WrappedComponent data={ data } {...props} />
    }
  }
  // HOC usage
  const LiveOrdersListWithSubscription = withSubscription(LiveOrders, () => DataSource.getOrders());
  // const UserSubscribedWithSubscription = withSubscription(UserList, () => DataSource.getSubscribers());

  return (
    <>
      <h1>Cross-Cutting Concerns</h1>
      <p>see the detial code</p>
    </>
  )
}
export default CrossCuttingConcerns;