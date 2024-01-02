import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home.jsx";
import Menu, { loader as MenuLoader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder.jsx";
import Order, { loader as OrderLoader } from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import { action as updateOrderAction } from "./features/order/UpdateOrder.jsx";
import { updateOrder } from "./services/apiRestaurant.js";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
