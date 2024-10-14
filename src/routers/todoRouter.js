import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const List = lazy(() => import("../pages/todos/List"));
const Todo = lazy(() => import("../pages/todos/Todo"));
const Save = lazy(() => import("../pages/todos/Save"));
const Update = lazy(() => import("../pages/todos/Update"));

const todoRouter = () => {
    return [
        {
            path: "",
            element: <Navigate replace to="list" />
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><List /></Suspense>
        },
        {
            path: ":id",
            element: <Suspense fallback={Loading}><Todo /></Suspense>
        },
        {
            path: "save",
            element: <Suspense fallback={Loading}><Save /></Suspense>
        },
        {
            path: "update/:id",
            element: <Suspense fallback={Loading}><Update /></Suspense>
        }
    ];
}

export default todoRouter;