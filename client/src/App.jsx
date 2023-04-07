import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from './pages/Home';
import ListStudents from './pages/ListStudents';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ListStudents /> },
      /*
      {
        path: "aboutme",
        element: <About Me />,
      },
      */
      {
        path: "api/students",
        element: <ListStudents />,
      },
    ],
  },
  {
    path: "api/students",
    element: <ListStudents />,    
  },
]);
/*
function App() {

  return (
    <div className="App">
      <MyNavBar />
      <ListStudents />

    </div>
  )
}
*/

function App(){
  return <RouterProvider router={router}/>;
  }
  export default App;

//export default App
