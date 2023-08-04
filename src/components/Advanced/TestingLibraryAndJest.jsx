// Manual test
// Automation tests

// things from video:
// Testing importance
// Testing best practice
// Introduction to Jest and React Testing Library
// Example of component testing

// Best practice
// 1. Avoid including implementation details
// 2. Work with DOM nodes
// 3. Resemble software usage
// 4. Maintainability

// Endorses library:
// 1. Jest
// 2. React Testing Library
function Hello({ name }) {
  return <div>Hello, {name}!</div>;
}

function TestingLibraryAndJest({ name }) {
  return (
    <>
      <h2>TestingLibraryAndJest</h2>
      {/* <div>
        <a href="https://littlelemon.com" className="App-link">
          Little Orange Restaurant
        </a>
      </div> */}
      <div>Hello, {name}!</div>
    </>
  )
}
export default TestingLibraryAndJest;