import { Link } from 'react-router-dom';
import GoodsList from '../components/task2/GoodsList';
import '../styles/Task2.css';

function Task2Page() {
  return (
    <div className="task2-page">
      <h1>Галерея товарів</h1>
      <GoodsList />
    </div>
  );
}

export default Task2Page;