import React from "react";
import { tr } from "date-fns/locale"
import {differenceInDays,formatDistanceToNow} from "date-fns"

const Task = ({ taskObj, onComplete }) => {

  const dist = formatDistanceToNow(
    new Date(taskObj.deadline),{
    addSuffix: true,
    locale: tr
  }
  );

  const isDeadlineClose = differenceInDays(
    new Date ( taskObj.deadline),
    new Date ()
  ) <=3 ;

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={isDeadlineClose ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]"}>{dist}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
