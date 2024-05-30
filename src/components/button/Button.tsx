type Props = {
  color: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Button = ({ color, setIsFormOpen }: Props) => {
  const handleForm = () => {
    setIsFormOpen((prev) => !prev)
  }
  return (
    <button className="btn" style={{ backgroundColor: `${color}` }} onClick={handleForm}>
      Add
    </button>
  );
};

export default Button;
