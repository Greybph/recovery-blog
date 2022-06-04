import { Link } from "remix"

function MobileNavList({onClick}) {
  return (
    <ul className="flex flex-col items-center justify-center px-20 pt-20 pb-10 space-y-4 shadow font-mont">
      <li className="nav-item">
        <Link to='/' onClick={onClick}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/posts' onClick={onClick}>Blog</Link>
      </li>
      <li className="nav-item">
        <Link to='/about' onClick={onClick}>About</Link>
      </li>
      <li className="nav-item">
        <Link to='/contact' onClick={onClick}>Contact</Link>
      </li>
    </ul>
  )
}

export default MobileNavList