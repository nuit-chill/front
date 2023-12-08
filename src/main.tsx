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
import company_angel_en from './languages/en/company_angel.json'
import company_demon_en from './languages/en/company_demon.json'
import person_angel_en from './languages/en/person_angel.json'
import person_demon_en from './languages/en/person_demon.json'
import company_angel_fr from './languages/fr/company_angel.json'
import company_demon_fr from './languages/fr/company_demon.json'
import person_angel_fr from './languages/fr/person_angel.json'
import person_demon_fr from './languages/fr/person_demon.json'
import company_angel_de from './languages/de/company_angel.json'
import company_demon_de from './languages/de/company_demon.json'
import person_angel_de from './languages/de/person_angel.json'
import person_demon_de from './languages/de/person_demon.json'

i18next.init({
  interpolation: { escapeValue: false },
   lng: 'en',
  resources: {
   en: {
    homepage: homepage_en,
    company_angel: company_angel_en,
    company_demon: company_demon_en,
    person_angel: person_angel_en,
    person_demon: person_demon_en,
   },
   fr: {
    homepage: homepage_fr,
    company_angel: company_angel_fr,
    company_demon: company_demon_fr,
    person_angel: person_angel_fr,
    person_demon: person_demon_fr,
   },
   de: {
    homepage: homepage_de,
    company_angel: company_angel_de,
    company_demon: company_demon_de,
    person_angel: person_angel_de,
    person_demon: person_demon_de,
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
