import logo from './logo.svg';
import './App.css';
import Sum from './pages/sum/Sum';
import Home from './pages/home/Home';
import { Counter } from './pages/counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>React JS Unit Test By Jest, Enzyme</h1>
      {/* <Sum /> */}
      <Home />
      <h2>Counter App</h2>
      <Counter />
    </div>
  );
}

export default App;
