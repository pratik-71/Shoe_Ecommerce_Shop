import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"

const Footer = () => {
  return (
    <div>
      <div className=' grid grid-cols-2 md:grid-cols-4 px-10 py-5 gap-3 w-full bg-gray-200 text-center' >
          
          <div className='col-span-1 '>
             <h6><strong>FIND A STORE</strong></h6>
                <ul>
                <li>News</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Sneakers</li>
                </ul>
          </div>


          <div className='col-span-1'>
          <h6><strong>SERVICES</strong></h6>
              <ul>
                <li>News</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Sneakers</li>
              </ul>
          </div>

          <div className='col-span-1'>
          <h6><strong>SHOP BY CATEGORY</strong></h6>
              <ul>
                <li>Premium</li>
                <li>Men shoes</li>
                <li>Women wear</li>
                <li>Kids collection</li>
                <li>Mercurial</li>
              </ul>
          </div>


          <div className='col-span-1' >
          <h6><strong>Social Media</strong></h6>
              <ul className="flex flex-col gap-2 items-center">
                <li><button className='px-5 py-1 flex items-center rounded-md bg-gray-500 text-white gap-2'><BsGithub/>Github</button></li>
                
                <li><button className='px-5 py-1 flex items-center rounded-md bg-blue-500 text-white gap-2'><FaLinkedin/>Linkedin</button></li>
                <li><button className='px-5 py-1 flex items-center rounded-md bg-green-500 text-white gap-2'><BiLogoGmail/>Gmail</button></li>

              </ul>
          </div>

           
      </div>
    </div>
  )
}

export default Footer
