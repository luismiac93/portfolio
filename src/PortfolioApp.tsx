import { RouterProvider } from "react-router";
import { router } from "./router/router";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
