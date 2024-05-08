function InterviewPage(props) {
  const mainElement = [
    "React Core Concepts",// "I have a solid understanding of core React concepts such as components, state management, and lifecycle methods."
    "React Router",// "I am experienced in using React Router for client-side navigation within applications."
    "State Management",// "I have practical experience with state management solutions like Redux or MobX, depending on project requirements."
    "Hooks",// "I am proficient in using React Hooks and can effectively incorporate them into functional components for state and side effect management."
    "Project Experience",// "Over the past three years, I have actively contributed to and led the development of complex React projects. This includes organizing components, handling asynchronous operations, and optimizing performance."
    "Middleware and Libraries",// "I am familiar with using middleware and libraries in the React ecosystem to enhance functionality. For instance, integrating middleware for API calls and employing libraries for responsive design."
    "Optimization Techniques",// "I am well-versed in optimization techniques, ensuring smooth rendering and responsiveness in React applications."
    "React Hooks",// "I leverage React Hooks extensively, making functional components a powerful and concise tool in my development workflow."
    "Testing",// "I have experience in writing unit tests for React components, ensuring code reliability and maintainability."
    "Tools and Build Process",// "I am proficient in using tools like Webpack and Babel to manage the build process and enhance the development workflow."
    "Ecosystem Awareness",// "Beyond React itself, I am aware of and have used various tools and libraries in the broader React ecosystem to address specific project needs."
    "Collaboration and Teamwork",// "I have collaborated with cross-functional teams and effectively communicated with designers and backend developers to deliver cohesive and high-quality applications."
  ];
  const ReactCoreConcepts_QS = [

  ];

  const titleClass = "p-[10px] border-b-2 font-bold";
  const subTitleClass = "text-start";
  const GetTitleArray = ({ data }) => {
    return (
      <ul>
        {data.map((value) => (<div className={titleClass} key={value}>{value}</div>) )}
      </ul>
    )
  }
  const GetSubTitleArray = ({ data }) => {
    return (
      <ul>
        {data.map((value) => (<div className={subTitleClass} key={value}>{value}</div>) )}
      </ul>
    )
  }

  return (
    <div className="bg-white w-screen h-screen pt-[32px] text-black-500 flex flex-row xs:flex-row">
      {/*
        To show that u know react very well. That's ALL !!!
      */}

      {/* <GetContentArray data={ mainElement }  /> */}
      <ul>
        <div className={titleClass}>React Core Concepts</div>
          {/* <GetSubTitleArray data={ ReactCoreConcepts_QS }  /> */}
        <div className={titleClass}>React Router</div>
        <div className={titleClass}>State Management</div>
        <div className={titleClass}>State Management</div>
        <div className={titleClass}>Hooks</div>
        <div className={titleClass}>Project Experience</div>
        <div className={titleClass}>Middleware and Libraries</div>
        <div className={titleClass}>Optimization Techniques</div>
        <div className={titleClass}>React Hooks</div>
        <div className={titleClass}>Testing</div>
        <div className={titleClass}>Tools and Build Process</div>
        <div className={titleClass}>Ecosystem Awareness</div>
        <div className={titleClass}>Collaboration and Teamwork</div>
      </ul>

    </div>
  )
}

export default InterviewPage;