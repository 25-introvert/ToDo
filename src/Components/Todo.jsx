import React, { useState } from 'react'
import { HiPlus, HiTrash } from "react-icons/hi"



function Todo() {
  const [task, setTask] = useState("");
  const [todolist, setTodolist] = useState(["Task 1", "Task 2"]);
  const handleTask = (e) => {
    setTask(e.target.value)
  };
  const handleAdd = () => {
    const updatedList = [...todolist, task]
    if (task != "") {
      setTodolist(updatedList)
      setTask("")
    }
  }
  function deltodo(i){
    const updatedList = todolist.filter((elem, id) => {
      return i!=id;
    })
    console.log(todolist)
    setTodolist(updatedList)
  }
  return (
    <div>
      <div className='my-10 flex justify-center '>
        <input onEnter type="text" onChange={handleTask} value={task} placeholder='Enter Task' className=' mx-3 placeholder:text-white outline-none rounded-md w-60 h-10 bg-transparent border-2 px-2' />
        <button onClick={handleAdd} className=' mx-3 border-2 w-10 flex justify-center items-center rounded-xl'><HiPlus /></button>
      </div>
      <div className='flex items-center justify-center '>
        <div>
          {
            todolist.map((data, i) =>
              <div className='flex items-center justify-center gap-5'>
                <div className=' text-center flex w-60 border-2 px-1 mb-5 h-10 items-center scrollbar-hide overflow-x-scroll'>
                  <h1 className=' border-r-2 p-3 mr-2'>{(i + 1)}</h1>
                  <h1 className=' overfloe-x-scroll'>{data}</h1>
                </div>
                <button onClick={() => deltodo(i)} className='flex mb-5 h-10 items-center text-2xl text-red-700'> <HiTrash className='' /></button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Todo