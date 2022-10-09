// import "./Home.scss";
// // import { Route } from "react-router-dom";

// function Home() {
//   return (
//     <section>
//       <h1>test</h1>
//     </section>
//   );
// }

// export default Home;

import logo from './../logo.svg';
import './Home.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
