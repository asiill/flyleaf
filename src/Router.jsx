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
            path: "/flyleaf/",
            element: <Home />,
        },
        {
            path: "/flyleaf/trash",
            element: <Trash />,
        },
        {
            path: "/flyleaf/newNote",
            element: <NewNote />,
        },
        {
            path: "/flyleaf/newNotebook",
            element: <NewNotebook />,
        },
        {
            path: "/flyleaf/:notebookId",
            element: <Notebook />,
        },
        {
            path: "/flyleaf/:notebookId/edit",
            element: <EditNotebook />,
        },
        {
            path: "/flyleaf/:noteId",
            element: <Note />,
        },
        {
            path: "/flyleaf/:noteId/edit",
            element: <EditNote />,
        },
        {
            path: "*",
            element: <Navigate to="/flyleaf/" />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;