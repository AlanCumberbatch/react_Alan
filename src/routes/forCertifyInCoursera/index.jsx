// forCertifyInCoursera

const subnoteClassName = "text-xs font-light";
const contentClassName = " w-full m-2";

function Titles(props) {
  const currentName = props.classN;
  const children = props.children;
  return children.map(item => {
    return (
      <>
        <div className={`${currentName}`}>{item.value}<span className={`${subnoteClassName}`}>{item.note ? '(' + item.note + ')' : ''}</span></div>
        <div className={`${contentClassName}`}>{item.content ?  item.content : ''}</div>
      </>
    )
  })
}

function ForCertifyInCoursera() {
  const firstTitleClassName = "pl-2 text-xl font-medium text-blue-500 underline";
  const secondTitleClassName = "pl-4 text-lg font-normal text-blue-300";
  const thirdTitleClassName = "pl-6 text-base font-light";
  const fourthTitleClassName = "pl-8 text-sm font-light";
  const toDoClassName = "text-xs font-light text-green-500 inline-block";

  const Module_1 = [
    {value:'1. what React is and where it is used.'},
    {value:'2. how to set up your coding environment so that you have as productive a learning experience as possible.'},
    {value:'3. how to build components', note:'Components are one of the foundations of React. In React, everything revolves around components.'},
    {value:'4. how to structure and customize your React projects.'},
    {value:'5. how to compose layouts by importing components into other components.'},
    {value:'6. passing data from one component to another.'},
    {value:'7. JSX syntax in React.'},
    {value:'8. how to use JSX syntax to structure and style your components.'},
    {value:'By the end of this module you will be able to:'},
  ];
  const Module_1_By_the_end = [
    {value:'Explain the concepts behind React and component architecture.'},
    {value:'Describe how to use assets within an app to apply styling and functional components.'},
    {value:'Create a component to service a specific purpose.'},
    {value:'Create a folder and demonstrate how to create and import files within that folder.'},
    {value:'Use and manipulate props and components to effect visual results.'},
  ];

  const Module_2 = [
    {value:'1. how events work in React.'},
    {value:'2. how you can handle them in React.'},
    {value:'3. dealing with errors related to events in React.' },
    {value:'By the end of this module you will be able to:'},
  ];
  const Module_2_By_the_end = [
    {value:'Use common methods to manage state in React.'},
    {value:'Detail the concept and nature of state and state change.'},
    {value:'Describe the hierarchical flow of data in React.'},
    {value:'Describe how data flows in both stateful and stateless components.'},
    {value:'Use an event to dynamically change content on a web page.'},
    {value:'Describe some common errors associated with events and the syntax required to handle them.'},
  ];

  const Module_3 = [
    {value:'1. routing and navigation in React.'},
    {value:'2. how to render partial views in your React apps.'},
    {value:'3. how to update routes in your React apps.'},
    { value: '4. understand how assets are used, bundled and embedded.' },
    {value:'By the end of this module you will be able to:'},
  ];
  const Module_3_By_the_end = [
    {value:'Use media assets, such as audio and video, with React.'},
    {value:'Demonstrate how to manipulate image assets using reference paths.'},
    {value:'Explain the folder structure of a React project in terms of embedded or referenced assets.'},
    {value:'Demonstrate the conditional implementation and rendering of multiple components.'},
    {value:'Create and implement a route in the form of a navbar.'},
    {value:'Describe navigation design in React, with a focus on single and multi-page navigation.'},
  ];

  const Module_4 = [
    {value:"1. you'll have coded your own mini project in React, as a starting point for building your React portfolio."},
    {value:'By the end of this module you will be able to:'},
  ];
  const Module_4_By_the_end = [
    {value: 'Synthesize the skills from this course to create and style a React component.'},
    {value: "Reflect on this course's content and on the learning path that lies ahead."},
  ];
  /*
    可以搞一个 标题的组件
    动态创建多个三级标题的组件
  */
  return (
    <div className=" w-screen pt-[32px] text-start bg-blue-500/50 text-white">
      {/* 我想搞一下拉菜单-----但是这个新手教学，还不如直接搞一个 类似 markdown 的文档的感觉了 */}
      <h1 className={`${firstTitleClassName}`}># React Basics</h1>
      <p className={`${secondTitleClassName}`}>Styling React apps</p>
      <div id="Styling React apps"></div>
      <p className={`${secondTitleClassName}`}>Event handling</p>
      <p className={`${secondTitleClassName}`}>Navigation and assets</p>
      <p className={`${secondTitleClassName}`}>Portfolio project</p>
      <p className={`${firstTitleClassName} inline-block`}># Course content  </p><span className={`${toDoClassName}`}>  [Will leave an answer after i finish]</span>
      <div id="Course content" className={`${contentClassName}`}>
        This course is an introduction to React development.
        You will learn enough basic concepts to empower you ti build simple user interfaces in React.<br/>
        This course consists of four modules. They cover the following topics.<br />
        <p className={`${secondTitleClassName} `}>Module 1: Anatomy of React: In this introductory module, you'll learn about what React is and where it is used. </p>
        <Titles classN={thirdTitleClassName} children={Module_1}/>
        <Titles classN={fourthTitleClassName} children={Module_1_By_the_end}/>
        <p className={`${secondTitleClassName} `}>Module 2: Data and State: The second module of this course deals with working with events and errors in React. </p>
        <Titles classN={thirdTitleClassName} children={Module_2}/>
        <Titles classN={fourthTitleClassName} children={Module_2_By_the_end}/>
        <p className={`${secondTitleClassName} `}>Module 3: Navigation Updating and Assets in React: In this module, you'll learn about routing and navigation in React. </p>
        <Titles classN={thirdTitleClassName} children={Module_3}/>
        <Titles classN={fourthTitleClassName} children={Module_3_By_the_end}/>
        <Titles classN={thirdTitleClassName} children={Module_3}/>
        <Titles classN={fourthTitleClassName} children={Module_3_By_the_end}/>
        <p className={`${secondTitleClassName} `}>Module 4: Portfolio Mini-Project (Calculator App):This module is focused on a practical mini project of building a calculator app in React. </p>
        <Titles classN={thirdTitleClassName} children={Module_4}/>
        <Titles classN={fourthTitleClassName} children={Module_4_By_the_end}/>
      </div>

    </div>
  )
}

export default ForCertifyInCoursera;