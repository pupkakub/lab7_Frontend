import { Link } from 'react-router-dom';
import Header from '../components/task1/Header';
import Content from '../components/task1/Content';
import Image from '../components/task1/Image';
import '../styles/Task1.css';

function Task1Page() {
  return (
    <div className="task1-page">
      <Header />
      <Content />
      <Image />
    </div>
  );
}

export default Task1Page;