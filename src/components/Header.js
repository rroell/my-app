import Button from "./Button";

const Header = ({ title }) => {
  // event when you click the button
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Default title",
};

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
