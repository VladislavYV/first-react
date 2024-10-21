import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { PageCreateSet } from './pages/pageCreateSet/PageCreateSet';
import { PageSelectSet } from './pages/pageSelectSet/PageSelectSet';
import { PageViewSet } from './pages/pageViewSet/PageViewSet';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set/:id" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} />
        <Route path='*' element={<PageSelectSet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
