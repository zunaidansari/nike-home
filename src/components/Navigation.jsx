import "../App.css"
const Navigation = () =>{
    return (
        <nav className="container">
        <div className="logo">
          <img src="`${import.meta.env.BASE_URL}images/brand_logo.png" alt="brand-logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    );
}
export default Navigation;