import { useState } from "react";
import "./Form.css";
import axios from "axios";

type FormData = {
  text: string;
  day: string;
  reminder: boolean;
};

type Props = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form = ({setIsFormOpen}: Props) => {
  const [formData, setFormData] = useState<FormData>({
    text: "",
    day: "",
    reminder: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.text || !formData.day)
      return alert("Please fill Task and Time");
    await axios.post("http://localhost:5000/tasks", formData);
    setFormData({
      text: "",
      day: "",
      reminder: false,
    });
    setIsFormOpen((prev) => !prev)
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text">Tasks</label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Add Task"
          onChange={handleChange}
          value={formData.text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          type="text"
          name="day"
          id="day"
          placeholder="Add Day & Time"
          onChange={handleChange}
          value={formData.day}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          id="reminder"
          checked={formData.reminder}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default Form;
