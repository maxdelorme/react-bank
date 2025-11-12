import Logo from "./Logo";
import User from "./User";

const Header = (props) => {
  return (
    <header className="bg-black h-[var(--header-height)] text-white sticky top-0 z-30">
      <div className="m-auto max-w-4xl flex items-center justify-between p-4 h-full">
        <Logo></Logo>
        <User userName={props.userName}></User>
      </div>
    </header>
  );
};

export default Header;
