import { Outlet, Link} from "react-router-dom";

export default function Root() {
    

    return (
      <>
      
        <div className="contents">
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/products`}>Products</Link>
              </li>
              <li>
                <Link to={`/carts`}>Carts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        </div>
      </>
    );
  }