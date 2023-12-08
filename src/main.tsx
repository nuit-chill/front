import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/error-page.js'
import { HomePage } from './pages/home-page.js'
import { Provider } from 'react-redux'
import store from './store.js'
import { GamePage } from './pages/game-page.js'
import homepage_en from './languages/en/homepage.json'
import homepage_fr from './languages/fr/homepage.json'
import homepage_de from './languages/de/homepage.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue: false },
   lng: 'en',
  resources: {
   en: {
    homepage: homepage_en,
   },
   fr: {
    homepage: homepage_fr,
   },
   de: {
    homepage: homepage_de,
   }
  },
 })
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
