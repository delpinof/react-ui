import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use href="#bootstrap"></use>
          </svg>
          <span class="fs-4">Expenses</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/create" className="nav-link">
              New expense
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
