import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from "react-router-dom";
import Sharts from './Pages/Sharts.jsx';
import Subscriptions from './Pages/Subscriptions';
import Profile from './Pages/profile';
import Home from './Pages/Home';
import Header from './Components/Header';



function App() {
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header/>}>
       <Route index element={< Home/>} />
         <Route path="Profile" element={<Profile />} />
         <Route path="Subscriptions" element={<Subscriptions />} />
         <Route path="Sharts" element={<Sharts />} />
         {/* <Route path="Navigation" element={<Navigation />} />
         <Route path="Support" element={<Support />} />
         <Route path="Subscrips" element={<Subscrips />} />
         <Route path="Settings" element={<Settings />} /> */}
      </Route>
    )
  );

    return <RouterProvider router={router} />;
  
}

export default App
