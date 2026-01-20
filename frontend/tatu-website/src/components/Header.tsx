import { Link } from '@tanstack/react-router'
import { NavigationMenu } from '@base-ui/react'
import logo from '../../public/logo-tatu.png'

export default function Header() {
  return (
   <div className='grid grid-cols-2 items-center p-6'>
      <Link to='/' className='col-span-1 max-w-208 max-h-165'>
        <img src={logo} alt='Company Logo'/>
      </Link>
      <NavigationMenu.Root className='col-span-1'>
        <NavigationMenu.List className='flex flex-auto gap-10 justify-center'>
          <NavigationMenu.Item>
            <Link to='/'>Home</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to='.'>Loja</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to='/about'>Sobre</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to='.'>Contato</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div> 
  )
}
