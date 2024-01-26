import Cart from '../assets/cart.png'
import Icon from '../assets/icon.png'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-[#222222]
    ">
      <div className='flex justify-center items-center'>
        <img src={`${Icon}`} alt="Logo" className="h-35 w-35"/>
      </div>
      <div className='flex flex-col'>

      <nav className="flex space-x-4 items-center">
        <Link to={`/computer`} className="text-white">Computadores</Link>
        <Link to={`/hardware`} className="text-white">Hardware</Link>
        <Link to={`/peripherals`} className="text-white">Periféricos</Link>
        <img src={`${Cart}`} alt="" width={30} height={30}/>
        <button className="bg-red-600 p-2 rounded text-white">Login</button>
      </nav>
      <div className="mt-4">
        <input type="text" placeholder="Pesquisar..." className="p-2 px-12 rounded"/>
      </div>
      </div>
    </header>
  )
}
