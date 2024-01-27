import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewNote from "./pages/NewNote.jsx";
import Trash from "./pages/Trash.jsx";
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
            path: "/flyleaf/new",
            element: <NewNote />,
        },
        {
            path: "/flyleaf/trash",
            element: <Trash />,
        },
        {
            path: "/flyleaf/shelf/:notebookId",
            element: <Notebook />,
        },
        {
            path: "/flyleaf/shelf/:notebookId/edit",
            element: <EditNotebook />,
        },
        {
            path: "/flyleaf/shelf/:notebookId/:noteId",
            element: <Note />,
        },
        {
            path: "/flyleaf/shelf/:notebookId/:noteId/edit",
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