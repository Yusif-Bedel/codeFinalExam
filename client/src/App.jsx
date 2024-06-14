import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
function App() {
  const router=createBrowserRouter(ROUTES)
  const contextData={

  }
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  )
}

export default App
