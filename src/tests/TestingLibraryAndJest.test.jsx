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


// Using Jest  ---- not work here
/*

//
// import React from 'react';
import TestingLibraryAndJest from "./components/Advanced/TestingLibraryAndJest"
import { render, screen } from "@testing-library/react"// npm i -D @testing-library/react
// render
// screen
// npm install jest @testing-library/react @testing-library/jest-dom --save-dev

// test is from Jest // npm i jest
// test("renders a link that points to Little Lemon webpage", () => {
//   render(<TestingLibraryAndJest/>);
//   const linkElement = screen.getByText("Little Lemon Restaurant");
//   expect(linkElement).toBeInTheDocument();// expect is from Jest
// })

test('renders the Hello component with the provided name', () => {
    const { getByText } = render(<TestingLibraryAndJest name="Alice" />);
    const helloElement = getByText(/hello, alice/i);
    expect(helloElement).toBeInTheDocument();
});

// 需要 ：
// 1. npm install--save - dev @babel/preset-react， 不然 不识别JSX 语法
// 2. if .babelrc file, and add " --- 用了这个还是不对， 继续往下看
// {
//   "presets": ["@babel/preset-react"]
// }
// "
// if babel.config.js file, then add " --- 一开始用的这个，完全不对
// module.exports = {
//   presets: ['@babel/preset-react'],
// };
// "

// 继续。 配置 Babel
// npm install --save-dev @babel/preset-env @babel/preset-react


// A:
// npx jest
// B:
// add "test":"jest" in package.json's scripts,
// then, npm test
*/
// Using Vitest ---
/*
  1. Install Vitest (as a dev dependency):
    npm install -D vitest
  2. Installing the testing dependecies
    npm i -D jsdom @testing-library/react
  3. update the vite.config.ts file (Vitest Configuration)
      / into this
      import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'

      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [react()],
          test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/test/setup.ts',
            coverage: {
              reporter: ['text', 'json', 'html'],
            }
          }
      })
  4. Adding the test script:
    "scripts": {
      "preview": "vite preview",
      "test": "vitest",
      "test:ui": "vitest --ui",
      "coverage": "vitest run --coverage"
    },
  5. Creating UseCounter Hook : all in "./useCounter.jsx"
  6. Creating the unit test using vitest for Use Counter Hook: all in "./useCounter.test.jsx"
*/
function Test() {
  return (
    <div>test</div>
  )
}
export default Test