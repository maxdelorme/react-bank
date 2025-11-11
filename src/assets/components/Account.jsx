import format from "format-number";
var myFormat = format({
  suffix: " €",
  integerSeparator: " ",
  decimal: ",",
  padRight: 2,
});

const Account = (props) => {
  const { name, balance, color, operations } = props;
  return (
    <div className="account">
      <div className="header" style={{ backgroundColor: color }}>
        <div className="name">{name}</div>
        <div className="balance">{myFormat(balance)}</div>
      </div>
      <div className="operations">
        {operations.map((elem, index) => (
          <div className="operation" key={index}>
            <div className="date">{elem.date}</div>
            <div className="description">{elem.description}</div>
            <div className="amount">{myFormat(elem.amount)}</div>
          </div>
        ))}
        <div className="buttonLine">
          <span className="button">SEE MORE</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
