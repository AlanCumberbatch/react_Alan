import { useEffect, useState } from "react";
import { LiveOrders } from "./ManipulatingChildrenDynamicallyInJSX"

// Demo
const DataSource = {
  getOrders: () => {
    return
  }
}
function LiveOrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handleNewOrders = () => {
      const newOrders = DataSource.getOrders();
      setOrders(newOrders);
    }
    DataSource.addListener(handleNewOrders);

    return () => {
      DataSource.removeListener(handleNewOrders);
    }
  }, []);

  return <LiveOrders orders={orders}/>
}
function NewsletterList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleNewUsers = () => {
      const newUsers = DataSource.getSubscribers();
      setUsers(newUsers);
    }
    DataSource.addListener(handleNewUsers);

    return () => {
      DataSource.removeListener(handleNewUsers);
    }
  }, []);

  return <UserList users={users}/>
}
// |
// |
// |
// V
/*
- Key point:
  - one of the key points of cross-cutting concerns in application development is to efficiently collect and deal with data or functionality that is scattered across different parts of the application.** Cross-cutting concerns involve aspects that touch multiple modules or components and often require consistent management throughout the application. This can include data, logic, or behavior that needs to be applied uniformly across various parts of the codebase.
  - Similarly, **security** is another cross-cutting concern. Implementing security measures like authentication and authorization may involve multiple parts of the application. By managing these security aspects centrally, you can enforce a consistent security policy and reduce the risk of vulnerabilities caused by inconsistent implementation.
  - Other cross-cutting concerns, such as error handling, caching, validation, and internationalization, follow a similar principle of centralizing management to ensure consistency and maintainability.
  In summary,
    the key point of cross-cutting concerns is to address data or functionality
    that is spread across various parts of an application by managing them centrally.
    This approach enhances code organization, maintainability, and the overall quality of the software.
*/
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

  // Practice
  // 1. Using Higher Order Component(HOC) to track the cursor position
  // 2. Presenting data using presentational components
  const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) { return null; }
    return (
      <div className="BasicTracker">
        <p>Mouse position:</p>
        <div>
          <span>x:{mousePosition.x}</span>
          <span>y:{mousePosition.y}</span>
        </div>
      </div>
    )
  };
  const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) { return null; }
    return (
      <p>{mousePosition.x},{mousePosition.y}</p>
    )
  }
  /*
    template:
    const HOC = (WrappedComponent)=>{
      return (props)=>{

        deal with data here.

        <WrappedComponent/ {...props} {add extra props here}>
      }
    }
  */
  const withMousePosition = (WrappedComponent) => {
    return (props) => {
      const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
      });

      useEffect(() => {
        const handleMousePositionChange = (e) => {
          setMousePos({
            x: e.clientX,
            y: e.clientY,
          })
        };
        window.addEventListener("mousemove", handleMousePositionChange);
        return () => {
          window.removeEventListener("mousemove",handleMousePositionChange);
        }
      }, []);

      return (
        <WrappedComponent {...props} mousePosition={mousePos} />
      )
    }
  }

  const PanelMouseTracker = withMousePosition(PanelMouseLogger);
  const PointMouseTracker = withMousePosition(PointMouseLogger);
  return (
    <>
      <h1>Cross-Cutting Concerns(HOC)</h1>
      <PanelMouseTracker />
      <PointMouseTracker/>
    </>
  )
}
export default CrossCuttingConcerns;