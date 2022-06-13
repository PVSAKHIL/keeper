import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    var [note,setNote]=React.useState({title:"",content: ""})
    var [click,setClick]=React.useState(false)
    function handleChange(event){
        const {name,value}=event.target
        setNote(prevState=>(
             {
                ...prevState,
                [name]: value
            }
        ))
    }
    function handleClick(){
        setClick(true)
    }
  return (
    <div>
      <form className="create-note" >
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}  style={{display: click?"block":"none"}}/>
        
        <textarea name="content" placeholder="Take a note..." rows={click?"3":"1"} value={note.content} onChange={handleChange} onClick={handleClick}/>
        <Zoom in={click}>
        <Fab onClick={async (event)=>{
            await props.addItem(note)
            setNote({title: "",content: ""})
            event.preventDefault()
        }}><AddIcon /></Fab>  
      </Zoom>
      </form>
      
    </div>
  );
}

export default CreateArea;