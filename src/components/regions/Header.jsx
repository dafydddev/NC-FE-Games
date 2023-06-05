import { useContext } from "react";
import { UserContext } from "../../contexts/User";

import Nav from "./Nav";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header>
      <a href="#main">Skip to Main Content</a> 
      <p>Welcome, {user.username}</p>
      <Nav />
    </header>
  );
}

export default Header;