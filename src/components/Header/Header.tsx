import Button from "../button/Button";
import "./Header.css";

type Props = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({setIsFormOpen}: Props) => {  
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button color="green" setIsFormOpen={setIsFormOpen} />
    </header>
  );
};

export default Header;
