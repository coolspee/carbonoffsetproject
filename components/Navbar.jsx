import "./navbar.css"

function Navbar() {
    return (
        <div className="navbar">
          {/* <img className="navBtn" src="" onClick={(event)=>{location.reload()}}></img> */}
          <a className="navBtn" href="/">Home</a>
          <a className="navBtn" href="/emissions-calculator">Calculator</a>
          <a className="navBtn" href="/offsets">Offsets</a>
        </div>
    )
}

export default Navbar;