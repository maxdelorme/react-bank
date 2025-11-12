const User = (props) => {
  return (
    <div className=" text-3xl font-light flex items-center gap-3">
      {props.userName}
      <span className="icons bg-white text-3xl leading-none text-black rounded-[50%]">
        person
      </span>
    </div>
  );
};

export default User;
