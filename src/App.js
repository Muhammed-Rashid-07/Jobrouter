import { createBrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import Notfound from './layout/Notfound';
import Career, { careersLoader } from './pages/carriers/Career';
import CarrierDetails, { carrierDetailLoader } from './pages/carriers/CarrierDetails';
import DetailsErrors from './pages/carriers/DetailsError';
//layouts
import HelpLayout from './layout/HelpLayout';
import RootLayout from './layout/RootLayout';
import CareerLayout from './layout/CareerLayout';




const router = createBrowserRouter(
  //here we do not have to '/' in path. Because it is relative and react does it itself.
  createRoutesFromElements(
    //A parent route without a path,
    // used exclusively for grouping child routes inside a specific layout.
    
    //nested roots

    //loaders
    //loaders : json-server -p 4000 -w ./data/db.json - p(port-4000) w-watch a file
    /* Loaders: loaders are way to load data into a component.  */
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />

    <Route path='help' element={<HelpLayout/>}>
      <Route path='faq' element={<Faq/>}/>
      <Route path='contact' element={<Contact/>} action={contactAction}/>
    </Route>

    <Route path="careers" element={<CareerLayout/>} errorElement={<DetailsErrors/>}>
      <Route index element={<Career/>} loader={careersLoader}/>

      <Route path=":id" element={<CarrierDetails/>} loader={carrierDetailLoader} 
      /* the error thrown from carrier details is transferred to error element. and injecting
      that error into <Errors/> component.
      */ />
    </Route>

    <Route path='*' element={<Notfound/>}/>
    </Route>

  )
)
/* to add not found page on other routes just use path as '*'. */

function App() {
  return (
    <RouterProvider router={router} />
  );
}

/* 1.changeable section of a route 
   2. same component shown on every variation eg:products/:id
   this :column defines that the id is changeable
   this id will change.
*/

export default App;
