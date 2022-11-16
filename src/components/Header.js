import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* if addTasks is shown, change button text */}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Default title",
};

export default Header;
