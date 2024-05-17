import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import Loader from './Common/Loader'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Products_skeleton from './Pages/All_products/Products_skeleton'
import Product_details from './Pages/Product_details/Product_details'
const Home = lazy(()=>import('./Pages/Home/Home'))
const Cart = lazy(()=>import('./Pages/Account/Cart'))
const Sign_in = lazy(()=>import("./Pages/Auth/Sign_in"))
const Register = lazy(()=>import("./Pages/Auth/Register"))

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

          <Suspense fallback={<Loader/>}>


            <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/login' element={<Sign_in/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/products' element={<Products_skeleton/>}></Route>
                    <Route path='/product_details' element={<Product_details/>}></Route>
            </Routes>


          </Suspense>

       <Footer/>   
             
      </BrowserRouter>
    </>
  )
}

export default App
