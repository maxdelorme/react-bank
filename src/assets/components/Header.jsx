import Logo from "./Logo";
import User from "./User";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <Logo></Logo>
        <User userName={props.userName}></User>
      </div>
    </header>
  );
};

export default Header;
