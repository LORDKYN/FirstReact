import Card from "./Card";
import { useState } from "react";
const MainDiv = (props) => {
    const [newData , setNewData] = useState('')
    
    return (    
        <div className="d-flex flex-column justify-content-between align-items-center w-100 ">

        <div className="d-flex justify-content-between p-1 w-75 row">
        {props.data.map(el => <Card key={el.id} name={el.name} />)}
        </div>
        <div className="d-flex w-50 flex-column align-items-center ">
        <form className="d-flex flex-column justify-content-around align-items-center w-50" >
            <input className=" form-control me-2 mb-3 mt-4 " type="text" placeholder="Enter New Name To Show On Card ..." value={newData} onChange={(e)=>{setNewData(e.target.value)}} />
            <button className="w-25 btn btn-success" onClick={(e)=>{
                e.preventDefault();
                props.checker([...props.data , {id : props.data.lenght+1 , name : newData } ])
            }} > تایید </button>
        </form>
        </div>
        
        </div>
    )
};
export default MainDiv;