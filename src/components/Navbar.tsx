import { useState } from "react"
import { Link } from 'react-router-dom'


function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
    
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-400 p-6'>
        <div className="flex items-center flex-shrink-0 text-blue-700 mr-5">
            <Link to='/' className="font-bold text-3xl tracking-tight text-center">Isla's Doggie Daycare</Link>
        </div>
        <div className="block">
               <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-black border rounded border-blue-600
               hover:text-white  hover:border-white"
               >
            
            <i className="fa-sharp fa-solid fa-bars"></i>
            </button>
        </div>
        {isVisible ? (
        <div className="w-full block flex-grow items-center">
            <div className="text-md lg:flex-grow">
                <button className="p-1 m-3  justify-center  text-black"  >
                    <div>
                     <Link to='/' onClick={ clicked }  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                     text-blue-600 hover:text-white mr-5 '
                     >Home</Link>
                    </div>
                </button>
                <button className="p-2 m-3  justify-center"  >
                    <div>
                     <Link to='/about' onClick={ clicked }  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                     text-blue-600 hover:text-white mr-5 '
                     >About</Link>
                    </div>
                </button>
                <button className="p-2 m-3  justify-center   text-black"  >
                    <div>
                     <Link to='/services' onClick={ clicked }  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                     text-blue-600 hover:text-white mr-5 '
                     >Services</Link>
                    </div>
                </button>
                <button className="p-2 m-3  justify-center " name={undefined} >
                    <div>
                     <Link to='/contact' onClick={ clicked }  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                     text-blue-600 hover:text-white mr-5 '
                     >Contact</Link>
                    </div>
                </button>
                <button className="p-2 m-3  justify-center " name={undefined} >
                    <div>
                     <Link to='/Dashboard' onClick={ clicked }  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                     text-blue-600 hover:text-white mr-5 '
                     >DashBoard</Link>
                    </div>
                </button>
            </div>
        </div>
        ) : (
        <> </>
        )}
    </nav>
  )
}

export default Navbar