import { Link } from '@tanstack/react-router'
import { NavigationMenu } from '@base-ui/react'
import logo from '/logo-tatu.png'

export default function Header() {
  return (
  <div className='flex items-center p-8'>
      <Link to='/' className='flex-1 w-fit h-fit'>
        <img src={logo} alt='Company Logo' className='max-w-208'/>
      </Link>
      <NavigationMenu.Root className='flex-2 w-fit h-fit'>
        <NavigationMenu.List className='flex flex-auto gap-14 justify-start'>
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
