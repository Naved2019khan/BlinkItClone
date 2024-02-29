import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,

} from "react-router-dom";

// File Import
import MyCart from './components/myCart/MyCart';
import App from './App';
import MainContent from './components/mainContent/MainContent';
import GridContent from './components/mainContent/GridContent';
import ItemPage from './pages/home/itemPage/ItemPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      <Route path="" element={<MainContent />} />
      <Route path="products/:id" element={<GridContent />} />
      <Route path="item/:id" element={<ItemPage />} />
      <Route path="cart" element={<MyCart />} />
    </Route>
  )
  // {
  //   path: "/",
  //   element:    <App />,
  //   children: [
  //     {
  //       index: true,
  //       element: <MainContent />,
  //     },
  //     {
  //       path: "products/:id",
  //       element: <GridContent />,
  //     },
  //     {
  //       path: "item/:id",
  //       element: <ItemPage />,
  //     },
  //     {
  //       path: "cart",
  //       element: <MyCart />,
  //     },
  //   ],
  // },
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

