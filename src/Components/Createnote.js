import React ,{useState}from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const Createnote = (props) => {
  const [expand, setexpand] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content:""
  })
const inputEvent=(event)=>{
  const  {name,value}=event.target

  setNote((prevNote)=>{
    return{
      ...prevNote ,
      [name]:value,
    }
  })
  
}
const addEvent=(event)=>{
  event.preventDefault()
  props.passNote(note)
   setNote({
     title: "",
    content:""
   })

}
const expandIt=()=>{
  setexpand(true)
}
const shrink=()=>{
  setexpand(false)
}
  return (
    <>
        <div className='main_note'>
            <form>
            {expand?
                <input type='text' value={note.title} name='title' onChange={inputEvent}  placeholder='Title' />
                :null}
                <textarea rows='' value={note.content} name='content' onChange={inputEvent} onDoubleClick={shrink} columns='' placeholder='Write Note..'
                onClick={expandIt}
                ></textarea>
                {
                  expand? <Button onClick={addEvent} >
                   <AddIcon className='plus-sign'/>
                </Button>:null
                }
               
                   
                
            </form>
        </div>
    </>
  )
}
