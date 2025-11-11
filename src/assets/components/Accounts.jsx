import Account from "./Account";

const Accounts = (props) => {
  return props.accounts.map((elem, index) => (
    <Account key={elem.name + index} {...elem}></Account>
  ));
};

export default Accounts;
