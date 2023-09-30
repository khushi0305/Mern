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
import Chat from './components/Chat';
import Dev from './components/Dev';
import { useState } from 'react';
import UserAuth from './UserAuth';
import { AppProvider } from './AppContext';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { CartProvider } from './CartContext';

function App() {

  let cartItems = 30;

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Toaster position='top-right'/>
      <BrowserRouter>
      <AppProvider>
        <CartProvider>
      {/* <Link href='/login'>Login</Link><br/>
      <Link href='/signup'>Signup</Link> */}

      <Navbar mycart = {cartItems} loggedIn= {loggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/event" element={ <EventHandling /> } />
          <Route path="/state" element={ <Statemanagement /> } />
          <Route path="/todo" element={ <UserAuth> <Todo /> </UserAuth> } />
          {/* <Route path="/post" element={ <Post /> } />
          <Route path="/todo" element={ <Todo /> } /> */}
          <Route path="/list" element={ <ProductList /> } />
          <Route path="/chat" element={ <UserAuth> <Chat /> </UserAuth> } />
          <Route path="/user" element={ <UserManager /> } />
          <Route path="/updateuser/:id" element={ <UpdateUser /> } />
          {/* <Route path="/chat" element={ <Chat /> } />
          <Route path="/dev" element={ <Dev/> } /> */}
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        </CartProvider>
        </AppProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;

