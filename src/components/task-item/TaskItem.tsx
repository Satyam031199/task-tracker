import React from "react";
import "./TaskItem.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

type Props = {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
};
const TaskItem = ({ text, day, reminder, id }: Props) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLDivElement>,
    id: number | undefined
  ) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/tasks/${id}`);
  };
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
    >
      <h3>
        {text}
        <div className="deleteIcon" onClick={(e) => handleClick(e, id)}>
          <IoMdClose />
        </div>
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default TaskItem;
