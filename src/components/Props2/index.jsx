function Props2(props) {
  return (
    <>
      <nav style={{ "backgroundColor": 'skyblue', }}>
        <ul>
          <li>{props.first}</li>
          <li>{props.second}</li>
          <li>{props.third}</li>
        </ul>
      </nav>
    </>
  )
}

export default Props2;