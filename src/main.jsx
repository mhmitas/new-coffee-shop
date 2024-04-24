import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import Home from './components/home/Home';
import AddCoffee from './components/coffee/AddCoffe';
import UpdateCoffee from './components/coffee/UpdateCoffee';
import CoffeDetail from './components/coffee/CoffeDetail';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import AuthProvider from './components/authentication/provider/Provider';
import CoffeeProvider from './components/authentication/provider/CoffeeProvider';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
      },
      {
        path: "/coffeeDetail/:id",
        element: <CoffeDetail></CoffeDetail>,
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:3000/users')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CoffeeProvider>
        <RouterProvider router={router} />
      </CoffeeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
