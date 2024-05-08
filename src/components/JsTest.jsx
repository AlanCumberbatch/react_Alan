import React from "react";

class TestClass extends React.Component {
  constructor(props) {
    console.log("constructor");

    super(props);
    this.state = {
      count: 0,
      favoriteFood:'rice',
    };

    this.handleClick = this.handleClick.bind(this);// 没有这句话事件绑定不上， this 作用域指向问题
  }


  handleClick() {
    // this.setState(prevState => ({
    //   count: prevState + 1
    // }));
    this.setState({count: this.state.count + 1})
  }

  componentDidMount() {
    /*
      Called once the component has been mounted into the DOM.
     *Typically used to:
     *    set up any necessary event listeners or timers,
     *    perform any necessary API calls or date fetching ,
     *    and perform other initialization tasks that require access to the browser's DOM API
    */
    setTimeout(() => {
      this.setState({favoriteFood: 'pizza'})
    }, 1000)
  }

  static getDerivedStateFromProps(props, state) {//  is needed !
    /*
      * props: The updated props for the component.
      * state: The current state of the component.
      * return: The method should return an object that represents the updated state of the component, or null if no state update is necessary.

      * A static method, which means it does not have access to the this keyword and cannot interact with the component's instance methods or properties.

      available in React 16.3 and later version
      invoked during the mounting and updating phase of a component
      is used to derive the state form props.

      During mounting phase:  constructor -->  getDerivedStateFromProps -->  render
                              called for every render cycle and provides an opportunity to update the component's state based on changes in props before the initial render.
    */
    console.log("getDerivedStateFromProps", props, state);
    return {favoriteFood: "111"}
  }

  render() {
    console.log("render");
    return (
      <div style={{backgroundColor:'red'}}>
        <p>favfod: {this.state.favoriteFood} </p>
        <p>Count22222222: {this.state.count} </p>
        <button onClick={this.handleClick}> Increment </button>
      </div>
    )
  }
}

export default TestClass;
