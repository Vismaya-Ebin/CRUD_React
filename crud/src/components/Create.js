import React ,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css';


const Create = (initialDetails ,updatedData) => {
    const style ={color:"white",background:"black",textAlign:"center",borderRadius:"5px", margin: "2rem 4rem"};
    const styles ={color:"white",textAlign:"center", margin: "2rem 4rem"};
    const [id,updatedId] = useState("");
    const [name,updatedName] = useState("");
    const [age,updatedAge] = useState("");

    return (
        <main>
            <h2 style={styles}>Add Employee Details</h2>
        <div className="create">
           
        
           <TextField id="outlined-basic" label="ID" variant="outlined" color="secondary"fullWidth onChange={(e)=>{updatedId(e.target.value)}} />
           <TextField id="outlined-basic" label="NAME" variant="outlined" color="secondary" fullWidth onChange={(e)=>{updatedName(e.target.value)}} />
           <TextField id="outlined-basic" label="AGE" variant="outlined" color="secondary" fullWidth onChange={(e)=>{updatedAge(e.target.value)}} />
           <Button  style={style} variant="contained" fullWidth onClick={()=>{
               const newEmpData = {
                   id:id,
                   name:name,
                   age:age,}
                   ;
               console.log(newEmpData);
               
               updatedData([...initialDetails,newEmpData]);
           }}>Submit</Button>
            
       
            
        </div>
        </main>
    );
}

export default Create;
