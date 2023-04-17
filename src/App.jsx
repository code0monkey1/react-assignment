import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

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
