import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default Router