
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from './components/Signup';
import Home from "./pages/Home";
import ProblemPage from "./pages/ProblemPage";
import Problemset from "./pages/Problemset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },{
    path:"/hello",
    element:<h1>Hello</h1>
  },
  {
    path:"*",
    element:<h1>Unknown</h1>
  },{
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/problemset/all',
    element:<Problemset/>
  },{
    path:'/problem/:id',
    element:<ProblemPage/>
  }
]);

function App() {


    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (<>
      <RouterProvider router={router} />
    {/* <div>
        Finish the assignment! Look at the comments in App.jsx as a starting point
    </div> */}
    </>
  )
}

export default App
