import google from "../../assets/Home/google.png";
import "../../App.css";

const Sign_in = () => {
  return (
    <div className="footer-wrapper h-[100vh] flex items-center justify-center">
      <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-xl py-2 md:p-8'>
          
        <div className='col-span-1 flex justify-center md:justify-start'>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="h-[30vh] md:h-[60vh]"
            alt="Phone image"
          />
        </div>
          
        <div className='col-span-1  md:px-10 '>
          <form className='flex flex-col items-center justify-center'>
            <h1 className="text-blue-600 text-3xl font-bold mb-2">Sign In</h1>
            <p className="text-sm mb-5">Already have account ? 
            <button className="px-2 py-1 bg-blue-200 rounded-md text-sm mx-2 hover:bg-blue-500 hover:text-white">Register</button></p>
            <input
              placeholder='Enter email'
              className="border-2 mb-4 border-gray-500 w-full rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              type='email'
              required
            />

            <input
              placeholder='Enter the password'
              className="border-2 mb-4 border-gray-500 w-full rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              type='password'
              required
            />

            <button type="submit" className="bg-blue-500 w-full mb-2 text-white font-semibold py-2 px-8 rounded-xl hover:bg-blue-600 transition duration-300">Sign In</button>
             
             <div className="flex w-full justify-between">
                 <div className="flex items-center">
                 <input type="checkbox"/><label className="text-md mx-2">Remember me</label>
                 </div>

                 <div>
                  <button className="text-sm hover:text-blue-500">Forgotten Password ? </button>
                 </div>
             </div>

            <div className="flex flex-col gap-2 justify-center items-center text-center mt-5">
            <p className="text-gray-600">or sign in with</p>
            <button className="px-8 py-1 flex items-center justify-center gap-2 border-2 border-gray-400 rounded-lg hover:scale-110 transition duration-300">
              <img src={google} className="h-6" alt="Google logo"/>
              <p className="text-md">Countinue with google</p>
            </button>
          </div>

          </form>

          
        </div>
      </div>
    </div>
  )
}

export default Sign_in;
