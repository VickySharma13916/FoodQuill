import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./component/ContactUs";
import Cart from "./component/Cart";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
// import About from "./component/About";
// import Grocery from "./component/Grocery";

// Code Spliting
// Chunking
// Dynamic Bundling
// Lazy Loading
// On Demand Loading

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* outlet is basically replaced by the children according to the routes. */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
