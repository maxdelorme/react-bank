const User = (props) => {
  return (
    <div className="User">
      {props.userName}
      <span class="material-symbols-outlined avatar">person</span>
    </div>
  );
};

export default User;
