import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
export default function HeaderComponent() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.logout()
    }

    return (
        <header className='border-bottom border-light border-5 mb-5 p-2'>
            <div className='container'>
                <div className='row'>
                    <nav className='navbar navbar-expand-lg'>
                        <a className='navbar-brand ms-2 fs-2 fw-bold text-black' href='https://github.com/LYUN555/jpa-to-do-list'>github</a>
                        <div className="collapse navbar-collapse">
                            <ul className='navbar-nav'>
                                <li className='nav-item fs-5'>
                                    {isAuthenticated && <Link className='nav-link' to='/welcome/lyun55'>Home</Link>}
                                </li>
                                <li className='nav-item fs-5'>
                                    {isAuthenticated && <Link className='nav-link' to='/todos'>Todos</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className='navbar-nav'>
                            <li className='nav-item fs-5'>
                                {!isAuthenticated && <a className='nav-link' href='/'>Login</a>}
                            </li>
                            <li className='nav-item fs-5'>
                                {isAuthenticated && <a className='nav-link' href='/logout' onClick={logout}>Logout</a>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}