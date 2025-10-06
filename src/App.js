import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Task1Page from './pages/Task1Page';
import Task2Page from './pages/Task2Page';

function App() {
  return (
    <BrowserRouter basename="/lab7_Frontend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1Page />} />
        <Route path="/task2" element={<Task2Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
