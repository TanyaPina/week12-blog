import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from './pages/Home';
import ListStudents from './pages/ListStudents';
import AboutMe from './pages/AboutMe';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ListStudents /> },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
    ],
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
