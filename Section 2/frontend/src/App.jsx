import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Statemanagement from './components/Statemanagement';
import Post from './components/Post';
import Todo from './components/Todo';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <h1>My React App</h1>

      <BrowserRouter>

      {/* <Link href='/login'>Login</Link><br/>
      <Link href='/signup'>Signup</Link> */}

      <Navbar/>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/event" element={ <EventHandling /> } />
          <Route path="/state" element={ <Statemanagement /> } />
          <Route path="/post" element={ <Post /> } />
          <Route path="/todo" element={ <Todo /> } />
          <Route path="/list" element={ <ProductList /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

