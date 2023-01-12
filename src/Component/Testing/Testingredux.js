import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../../Actions";


export default function Testingredux(){

    const[inputdata, setInputData]=useState('');
    const dispatch = useDispatch();
    
    return(
        <div>
            <div>
                <h1>Add your list here </h1>
                <div>
                    <input type="text" placeholder="Add item" value={inputdata} onChange={(e)=>setInputData(e.target.value)}/>
                    <FaPlus onClick={()=>dispatch(addToDo(inputdata))}/>

                </div>
            </div>
        </div>
    )
}