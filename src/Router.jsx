import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Trash from "./pages/Trash.jsx";
import NewNotebook from "./pages/NewNotebook.jsx";
import NewNote from "./pages/NewNote.jsx";
import Notebook from "./pages/Notebook.jsx";
import EditNotebook from "./pages/EditNotebook.jsx";
import Note from "./pages/Note.jsx";
import EditNote from "./pages/EditNote.jsx";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/trash",
            element: <Trash />,
        },
        {
            path: "/newNote",
            element: <NewNote />,
        },
        {
            path: "/newNotebook",
            element: <NewNotebook />,
        },
        {
            path: "/:notebookId",
            element: <Notebook />,
        },
        {
            path: "/:notebookId/edit",
            element: <EditNotebook />,
        },
        {
            path: "/:noteId",
            element: <Note />,
        },
        {
            path: "/:noteId/edit",
            element: <EditNote />,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;