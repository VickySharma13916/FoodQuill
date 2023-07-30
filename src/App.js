import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./component/ContactUs";
import Cart from "./component/Cart";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Shimmer from "./component/Shimmer";
import About from "./component/About";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
// Code Spliting
// Chunking
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import
const Grocery = lazy(() => import("./component/Grocery"));

const App = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const dummyData = {
      name: "Vicky",
    };
    setUsername(dummyData.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ user: username, setUsername }}>
        <div className="app">
          <Header />
          {/* outlet is basically replaced by the children according to the routes. */}
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <About />,
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
          <Suspense fallback={<Shimmer />}>
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

// Props Drilling
// Lifting the state up
// Managing the Data and UI layer
