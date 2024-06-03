import { Link } from 'react-router-dom';



function NavBar() {
    return (
            <nav className="bg-blue-700 p-4 fixed top-0 w-full z-10">
                <div className="container mx-auto">
                    <ul className="flex space-x-10">
                        <li className="text-gray-300 hover:bg-blue-300 px-3 py-2 rounded-md text-lg font-medium">
                            <Link to="/">Home Page</Link>
                        </li>
                        <li className="text-gray-300 hover:bg-blue-300 px-3 py-2 rounded-md text-lg font-medium">
                            <Link to="/ToDo">To-Do List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default NavBar;
