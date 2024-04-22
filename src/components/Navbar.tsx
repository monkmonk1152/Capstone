import { useState } from "react"
import { Link } from 'react-router-dom'
import Button from "./Button"

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
    
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-green-500 p-5 '>
        <div className="flex items-center flex-shrink-0 text-blue-600 mr-5">
            <Link to='/' className="font-semibold text-xt tracking-tight">Ilsa's Doggie Daycare</Link>
        </div>
        <div className="block">
               <button 
                onClick={dropDown}
                className="flex iteams-center px-3 py-2 text-black border rounded border-green-700
               hover:text-white  hover:border-white"
               >
            
              <i className="fa-duotone fa-bars"></i>
            </button>
        </div>
        {isVisible ? (
        <div className="w-full block flex-grow items-center">
            <div className="text-md lg:flex-grow">
                <Button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                     <Link to='/' onClick={ clicked }  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                     text-teal-200 hover:text-white mr-5 '
                     >Home</Link>
                    </div>
                </Button>
            </div>
        </div>
        ) : (
        <> </>
        )}
    </nav>
  )
}

export default Navbar