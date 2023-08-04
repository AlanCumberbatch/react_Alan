import { UserProvider, useUser } from "./ContextCreator";

const innerStyle = {
  color: 'orange',
  fontWeight:'800',
}
const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p style={{ position: 'absolute', right: '70px', top: '0' }}>Hello <span style={innerStyle}>{ user.name }</span></p>
  )
};
const Header = () => {
  return (
    <header style={{position:'relative'}}>
      <h2 style={{width:'80vw'}}>Blog App</h2>
      <LoggedInUser/>
    </header>
  )
};
const Page = () => {
  const { user } = useUser();
  return (
    <div style={{padding:'10px'}}>
      <h2>What is Lorem ipsum?</h2>
      <p style={{textAlign:'start'}}>
        If you like this project, please consider helping out. All contributions are welcome as well as donations to Opencollective, or in crypto BTC: 36fuguTPxGCNnYZSRdgdh6Ea94brCAjMbH, ETH: 0x6E3f79Ea1d0dcedeb33D3fC6c34d2B1f156F2682.
      </p>
      <p style={{textAlign:'start'}}>written by <span style={innerStyle}>{ user.name }</span></p>
    </div>
  )
};
function Context() {
  return (
    <div>
      <UserProvider>
        <Header/>
        <Page />
      </UserProvider>
    </div>
  )
}
export default Context;