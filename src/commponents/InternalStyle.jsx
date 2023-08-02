function InternalStyle(props) {
  const internalStyle_ = {
    backgroundColor: "green",
    fontSize: "16px",
    color:"pink"
  };
  return (
    <>
      <h1 style={internalStyle_}>Internal Style Demo</h1>
    </>
  )
}

export default InternalStyle;