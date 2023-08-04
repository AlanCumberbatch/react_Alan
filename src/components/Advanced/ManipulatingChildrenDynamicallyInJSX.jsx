import { Children, cloneElement } from 'react'

  // 1.
  // React.cloneElement :  React.cloneElement(element,[props]) // props in react are immutable objects !
  // const buttonElement = {
  //   type: SubmitButton,
  //   props: {
  //     color: "green",
  //     children: "Submit!",
  //   },
  // };
  // const output = React.cloneElement(buttonElement, { disabled: false });
  /*
    output:
    {
      type: SubmitButton,
      props: {
        color: "green",
        children: "Submit!",
        disabled: false,
      },
    }
  */

  // React.Children
  // React.Children.map(children, callback)
  // 2. Manipulate render output dynamically


const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };
  return (
    <div className="Row">
      {/* {children} */}
      {Children.map(children, (child, index) => {// React.Children.map: Manipulation children
        // return child;
        return cloneElement(child, {// React.cloneElement: Clones and returns a new element
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {})
          }
        });
      })}
    </div>
  );
}

export function LiveOrders() {
  return (
    <div className="App_">
      <Row spacing={32}>
        <span>Pizza Margarita</span>
        <span>2</span>
        <span>305</span>
        <span>18:39</span>
        <span>John</span>
      </Row>
    </div>
  )
}

function ManipulatingChildrenDynamicallyInJSX() {


  return (
    <div>
      <h1>Manipulating Children Dynamically In JSX</h1>
      <LiveOrders/>
    </div>
  )
}

export default ManipulatingChildrenDynamicallyInJSX;
