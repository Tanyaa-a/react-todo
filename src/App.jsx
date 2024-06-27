import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ToDoListPage from './components/ToDoListPage';
import NavBar from "./components/NavBar";
import UnsplashImageFetcher from "./components/UnsplashImageFetcher"
import 'normalize.css';

const App = () => {
  return (
    <>
      <UnsplashImageFetcher />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todolistpage" element={<ToDoListPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
