import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import Loader from './Common/Loader'
import Navbar from './Common/Navbar'
const Home = lazy(()=>import('./Pages/Home/Home'))
const Cart = lazy(()=>import('./Pages/Account/Cart'))

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

          <Suspense fallback={<Loader/>}>


            <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
            </Routes>


          </Suspense>
             
      </BrowserRouter>
    </>
  )
}

export default App
