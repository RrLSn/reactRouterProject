import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        {/* <img src="/Media.Logo.svg" /> */}
        <Link to="/purpose">Purpose</Link>
        <Link to="/community">Communities</Link>
        <Link to="/carrier">Carriers<sup>(11)</sup></Link>
        <Link to="/learn">Learn</Link>
        <Link to="/united">United Kingdom</Link>
    purpose
    Community
    </nav>
  )
}

export default NavBar