import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pokemons from './pages/pokemons.jsx'
import Elements from './pages/elements.jsx'
import EggGroups from './pages/egg_groups.jsx'
import Gigans from './pages/gigans.jsx'
import About from './pages/about.jsx'
import ErrorRoute from './pages/error.jsx'
import PokemonDetail from './pages/detail/pokemonDetail.jsx'
import Forms from './pages/forms.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [{
      path: '/',
      element: <Pokemons />
    }, {
      path: '/elements',
      element: <Elements />
    }, {
      path: '/egg_groups',
      element: <EggGroups />
    }, {
      path: '/gigans',
      element: <Gigans />
    }, {
      path: '/forms',
      element: <Forms />
    }, {
      path: '/about',
      element: <About />
    }, {
      path: '/detail/pokemonDetail/:id',
      element: <PokemonDetail />
    }]

  }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
