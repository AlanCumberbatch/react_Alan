import { useEffect, useState } from "react";

function FetchDemo() {
  const [user, setUser] = useState([]);

  function fetchDate() {
    console.log("AAAAAAAAAAAAAAAAAAAAAA")
    // Browser API ---> belongs to side effect===> so should be used i useEffect
    fetch('https://developer.nvidia.com/cuda-zone').then((res) => {
      console.log("res", res);
      setUser(res.user);// 只是demo， 对应的link并没有任何数据
    }).catch(
      err => console.log('err', err)
    )
    console.log("BBBBBBBBBBBBBBBBBB")
  }

  useEffect(() => {
    fetchDate();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      {/* <button onClick={fetchDate}>FetchDemo</button> */}
      <h1>Data returned</h1>
      <h2>First name:{user.result[0].name.first}</h2>
      <h2>Last name:{user.result[0].name.last}</h2>
    </div>
  ) : (
    <h1>Date pending...</h1>
  );
}
export default FetchDemo;