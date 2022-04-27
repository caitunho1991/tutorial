import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './common/Header';
import Footer from './common/Footer';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
