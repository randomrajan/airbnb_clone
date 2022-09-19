import airbnblogo from './airbnblogo.png'

export default function Navbar() {
    return (
        <nav>
           <img src={airbnblogo}
           className="nav--logo" alt="ss"/>
        </nav>
    )
}