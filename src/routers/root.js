import { Suspense, lazy } from "react"; // Code splitting
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";

const Loading = <div>Loading...</div>
const Main = lazy(() => import("../pages/Main"));
const About = lazy(() => import("../pages/About"));
const TodoIndex = lazy(() => import("../pages/todos/Index"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "todos",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children: todoRouter()
    }
]);

export default root;