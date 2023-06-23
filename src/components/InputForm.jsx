import React, {useState} from 'react'



export const InputForm = ({TaskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([...TaskList,
      {
        id: TaskList.length,
        text: inputText,
        completed: false
      }
    ])
    setInputText("");
  }
  const handleChange = (e) => {
    setInputText(e.target.value);

  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a new todo' onChange={handleChange} value={inputText}/>
        <button><i className="fa-solid fa-square-plus"></i></button>
      </form>

    </div>
  )
}
