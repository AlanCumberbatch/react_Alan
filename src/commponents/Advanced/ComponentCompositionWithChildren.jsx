function ComponentCompositionWithChildren() {
  // importance of component composition
  // Use and appreciate the children prop
  // Containment and specialization
    // Containment: refers to the fact that some components don't know their children ahead of time
    // Specialization: defines components as being special cases of other components
  function Dialog(props) {
    return (
      <div className="modal">{props.children}</div>
    )
  }
  function ConfirmDialog() {
    return (
      <Dialog color="blue">
        <h1 className="Dialog-title">Thanks!</h1>
        <p className="Dialog-message">We'll process your order in less than 24 hours.</p>
      </Dialog>
    )
  }
  // another demo:
  const Button = ({ children,backgroundColor }) => {
    return <button style={{ backgroundColor }}>{children}</button>;
  };
  const Alert = ({children, backgroundColor}) => {
    return (
      <div style={{backgroundColor}}>
        <div className="overlay"></div>
        <div className="Alert">{children}</div>
      </div>
    );
  }
  const DeleteBtn = () => {
    return <Button backgroundColor="red">Delete</Button>;
  }
  // Robust and reusable component
  return (
    <div>
      <h1>Component Composition With Children</h1>
      <ConfirmDialog />
      {/* another demo: */}
      <Alert backgroundColor="green">
        <h4>Delete Account</h4>
        <p>some words.</p>
        <DeleteBtn/>
      </Alert>
    </div>
  )
}

export default ComponentCompositionWithChildren;