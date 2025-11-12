import format from "format-number";
import Button from "./Button";
var myFormat = format({
  suffix: " €",
  integerSeparator: " ",
  decimal: ",",
  padRight: 2,
});

const Account = (props) => {
  const { name, balance, color, operations } = props;
  return (
    <div className="pt-6 flex flex-col items-center">
      <div
        className=" w-full flex text-white text-3xl justify-between shadow-md shadow-gray-600 rounded-md p-3 sticky top-[var(--header-height)] "
        style={{ backgroundColor: color }}
      >
        <div className="name">{name}</div>
        <div className="balance">{myFormat(balance)}</div>
      </div>
      <div className=" w-9/10 ">
        {operations.map((elem, index) => (
          <div
            className=" odd:bg-gray-100 even:bg-white flex gap-1
            items-center p-2 flex-wrap justify-between"
            key={index}
          >
            <div className=" text-neutral-400 w-full text-left md:w-25">
              {elem.date}
            </div>
            <div className="description mr-auto text-nowrap">
              {elem.description}
            </div>
            <div className="font-mono">{myFormat(elem.amount)}</div>
          </div>
        ))}
        <Button></Button>
      </div>
    </div>
  );
};

export default Account;
