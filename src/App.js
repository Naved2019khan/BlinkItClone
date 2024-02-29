import "./App.css";
import Home from "./pages/home/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyProvider from "./ContextAPI/MyProvider";
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";


// import {
//   createBrowserRouter,
//   RouterProvider,
  
// } from "react-router-dom";

// // File Import
// import MyCart from './components/myCart/MyCart';

// import MainContent from './components/mainContent/MainContent';
// import GridContent from './components/mainContent/GridContent';
// import ItemPage from './pages/home/itemPage/ItemPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:    <Home />,
//     children: [
//       {
//         index: true,
//         element: <MainContent />,
//       },
//       {
//         path: "products/:id",
//         element: <GridContent />,
//       },
//       {
//         path: "item/:id",
//         element: <ItemPage />,
//       },
//       {
//         path: "cart",
//         element: <MyCart />,
//       },
//     ],
//   },
  
// ]);


function App() {
  return (
    
    <MyProvider>
      {/* <ScrollToTop /> */}
      {/* <ScrollRestoration /> */}
         <ScrollRestoration
          getKey={(location, matches) => {
            const paths = ["item/id:"];
            return paths.includes(location.pathname)
              ? // home and notifications restore by pathname
                location.pathname
              : // everything else by location like the browser
                 location.key;
          }}
         
         />

     {/* <RouterProvider router={router}>
    <ScrollRestoration
          getKey={(location, matches) => {
            const paths = [ "item/:id"];
            return paths.includes(location.pathname)
              ? // home and notifications restore by pathname
                location.pathname
              : // everything else by location like the browser
                 location.key;
          }}
         
         />
      
    </RouterProvider> */}
    <Home />
   
    </MyProvider>
  );
}

export default App;
