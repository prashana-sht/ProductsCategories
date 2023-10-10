import { Outlet, Link} from "react-router-dom";
import Header from './header'
export default function Root() {
    
    return (
      <>
        <Header />
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }