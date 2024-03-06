import './App.css';
import Calculator from './components/calculator/calculator';
import Colours from './components/colours/colours';
import Elements from './components/elements/elements';
import Navigation from './components/navigation/navigation';
import TodoList from './components/todoList/todoList';

function App() {

  return (
    <div className='app'>
      <div className='cheat-sheet'>
        <Elements />
        <Colours />
      </div>
      <div className='container'>
        <h1>Opgaver</h1>
        <ul>
          <li>Todo list</li>
          <li>Calculator</li>
          <li>Navigation</li>
        </ul>
      </div>

      <TodoList />
      <Calculator />
      <Navigation />



    </div >
  )
}

export default App;