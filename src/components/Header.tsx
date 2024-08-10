import {Link} from "react-router-dom";
import SearchInput from "./SearchInput.tsx";

function Header() {
    return (
        <div>
            <Link to="/">NPM Registry</Link>
            <SearchInput />
        </div>
    );
}

export default Header;