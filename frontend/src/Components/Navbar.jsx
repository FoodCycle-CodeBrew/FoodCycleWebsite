import "../styles/navbar.css"

export default function Navbar() {
    return (
      <nav className="navigation">
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Forager</a>
          </li>
          <li>
            <a href="/find-food" color= "#0C0092">Find Food</a>
          </li>
          <li>
            <a href="/rehome-food">Rehome your food</a>
          </li>
          <li>
            <a href="/mission">Our Mission</a>
          </li>
          <li>
            <a href="/login-register">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
      )
  }