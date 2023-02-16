import React    from 'react'
import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter, 
    Outlet,
    RouterProvider 
} from "react-router-dom"

import Bio          from "./pages/bio.js"
import Compilations from './pages/compilations.js'
import Covers       from './pages/covers.js'
import Generative1  from './pages/generative-1.js'
import Joystick     from './pages/joystick.js'
import ErrorPage    from "./pages/error.js"
import Releases     from './pages/releases.js'
import Remixes      from './pages/remixes.js'
import SlowLearner  from './pages/slow-learner.js'

import Header       from "./components/header.js"

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

const App = () => (
    <div>
        <Header />
        <Outlet />
    </div>
)

const root   = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
    {
        path:         "/",
        element:      <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:    "/bio",
                element: <Bio />
            },
            {
                path:    "/compilations",
                element: <Compilations />
            },
            {
                path:    "/covers",
                element: <Covers />
            },
            {
                path:    "/generative-1",
                element: <Generative1 />
            },
            {
                path:    "/joystick",
                element: <Joystick />
            },
            {
                path:    "/releases",
                element: <Releases />
            },
            {
                path:    "/remixes",
                element: <Remixes />
            },
            {
                path:    "/slow-learner",
                element: <SlowLearner />
            }
        ]
    }
])

root.render(
    <RouterProvider router={router} />
)