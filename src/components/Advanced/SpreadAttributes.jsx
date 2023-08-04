// Spread operator (...)
function SpreadAttributes() {
  // Use the spread operator in objects
  // Spread native properties to DOM components
  // Design flexible components
  // Caveats when using the spread operator

  // Copying
  // Merging

  const Button = ({ type, children, ...buttonProps }) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
      <button className={`Button ${className}`} {...buttonProps}>{children}</button>
    )
  };
  const LoginButton = ({ children, ...buttonProps }) => {
    return (
      <Button
        type="secondary"
        {...buttonProps}
        onClick={() => { alert("Logging in!") }}
      >{children}</Button>
    )
  };

  return (
    <>
      <h1>Spread Attributes</h1>
      <Button type="primary" onClick={() => { alert("Signing Up!") }}>Sign Up</Button>
      <LoginButton type="secondary" onClick={() => { alert("Signing Up!") }}>Login</LoginButton>
    </>
  )
}
export default SpreadAttributes;