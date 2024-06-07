import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/home/home";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import BlogPage from './views/blogPage/blog';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/blog",
    element:<BlogPage/>,
  }
])
root.render(<RouterProvider router={router}/>);


