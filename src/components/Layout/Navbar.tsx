import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const [loginUser, setLoginUser] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user)
      {
        setLoginUser(user)
      }
  },[])
  const logoutHandler = () => 
    {
      localStorage.removeItem('user')
      navigate('/login')
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/">
        Expanse Management System
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">{loginUser && loginUser.name}</li>
        <button className="nav-item" onClick={logoutHandler}>
          <Link className="nav-link" to="/login">Logut</Link>
        </button>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar