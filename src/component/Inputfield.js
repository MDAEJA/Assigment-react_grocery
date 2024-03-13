import React, { useEffect } from 'react'
import { useState } from 'react';
// import { Alert } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';
import "../component/inputfieldStyle.css"
const Inputfield = () => {
 
    const localstoragekey = 'inputvalue' 
    
    const[inputValue,setInputValue] = useState(()=>{
        return JSON.parse(localStorage.getItem(localstoragekey)) || []
    });
    const[isChecked,setIsChecked] = useState(false);
    const[data,setData] = useState([]);


   
    useEffect(()=>{
        localStorage.setItem(localstoragekey,JSON.stringify(inputValue))
    },[inputValue])


    const onClickHandler = ()=>{
        console.log(inputValue);
        alert("adding new element in the list")
        const currentData = [...data,inputValue];
        setData(currentData);
        setInputValue(" ");
        
    }
   

    const deleteHandler = (indx)=>{
        alert("Item deleted ")
           setData((predata)=>{
            const currentdata = [...predata]
            currentdata.splice(indx,1)
            return currentdata;
           })     
    }
  return (
    <>

   
    <div className='main-div'>

      <div style={{backgroundColor:'whitesmoke', padding:'20px 80px',textAlign:'center',borderRadius:'10px',boxShadow:'2px 2px blur'}}> 
        <div >
        <h4 className='heading-div'>Grocery Bud</h4>
        <input type='text' placeholder='Enter Item' className='input-div' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
        <button onClick={onClickHandler} className='button-design'>Add Item</button>
    </div>

    <div style={{display:'flex',flexDirection:'column',gap:'10px',padding:'10px 10px'}}>

        {
            data !== [] && 
            data.map((ele,index)=>{
    //           alert( <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
    //   Here is a gentle confirmation that your action was successful.
    // </Alert> )
            return <div style={{display:'flex',justifyContent:'space-between',}} key={index} >
            <input type='checkbox'   onChange={(e)=>{setIsChecked((pre)=>!pre)}}
                    ></input>
              <div>      
            <p style={{textDecoration : isChecked ? 'line' : 'none',fontSize:'20px',fontStyle:'italic'}}>{ele}</p>
            </div>
            {/* <p>{isChecked}</p> */}
            <button className='delete-button' onClick={()=>{deleteHandler(index)}} > DELETE</button>
            </div>
            })
        }
    </div>
   
        </div>
      
    </div>

    </>
    
  )
}

export default Inputfield
