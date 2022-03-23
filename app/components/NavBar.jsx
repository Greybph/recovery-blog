import {Link} from 'remix'

function NavBar() {
  return (
    <nav className='font-mont font-medium absolute top-0 flex items-center justify-between w-full px-4 py-4 bg-transparent md:px-12 lg:px-28'>
      <Link to='/'>LOGO</Link>
      <ul className='hidden space-x-16 md:flex'>
        <li>
          <Link to='/'>topics</Link>
        </li>
        <li>
          <Link to='/blog'>blog</Link>
        </li>
        <li>
          <Link to='/'>resources</Link>
        </li>
        <li>
          <Link to='/'>stories</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar