import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'

function App() {
  const [title,setTitle] = useState()
  const [info,setInfo] = useState()
  const [date,setDate] = useState()
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = () => {
    if(title && info && date){
      const newTask = {title,info,date}
      setTaskList([...taskList, newTask])
    }
  }

  const clearAll = () => {
    setTaskList([])
    setTitle('')
    setInfo('')
    setDate('')
  }

  const handleDelete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };


  return (
    <>
    <div className="Screen-Container">
      <div className="Container">
        <h1 className='PageTitle'>To Do List</h1>
        <h3 className='Additem'>Add Items</h3>
        <div className="InputBoxes">
          <input className='TitleInput' type='text' placeholder='Title' onChange={(e) =>{setTitle(e.target.value)}}/>
          <input className='InfoInput' type='text' placeholder='Info' onChange={(e) =>{setInfo(e.target.value)}}/>
          <input className='DueDateInput' type='date' onChange={(e) =>{setDate(e.target.value)}}/>
          <button className='AddButton' onClick={handleSubmit}>Add</button>
          <button className='ClearButton' onClick={clearAll}>Clear All</button>
        </div>
        <div className="TaskView">
          {taskList.map((task,index) => (
            <TaskCard key={index} task={task.title} info={task.info} date={task.date} onDelete={() => handleDelete(index)}/>
          ))}
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
