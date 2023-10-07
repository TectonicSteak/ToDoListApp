import React from 'react'
import './TaskCard.css'

const TaskCard = ({task,info,date,onDelete}) => {

  return (
    <>
        <div className="taskcard">
            <h3 className='taskTitle'>{task}</h3>
            <p className='taskInfo'>{info}</p>
            <p className='taskDate'>{date}</p>
          <button className='DeleteButton' onClick={onDelete}>Delete</button>
        </div>
    </>
  )
}

export default TaskCard