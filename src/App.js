import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const tasksState = useSelector(state => state.task)

  return (
    <div className="App">
     <h2>HOlas</h2>
     <h3>as</h3>
    </div>
  );
}

export default App;
