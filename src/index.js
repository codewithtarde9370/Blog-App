import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/home/home";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Blog from './views/blogPage/blog';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/blog/:id",
    element:<Blog/>,
  }
])
root.render(<RouterProvider router={router}/>);


