import { useRef } from "react";
import { useState } from "react";
import '../css/todo.css';
export default function Todo(){

    let textboxvalue=useRef();
    let [items,setitems]=useState([]);

    let adding=()=>{

        setitems([...items,textboxvalue.current.value]);

    };

    let remove=(it)=>{

        setitems(
            items.filter((t)=>{
                return t != it
            })
        )
    };


    return (
        <div className="todo">

            <div className="inputs">
            <input ref={textboxvalue} type="text" />

            <button onClick={adding}>ADD</button>
            
            </div>
            <div className="items">

                <ol>
                    {
                        items.map((it)=>{
                            
                            return <><li>{it}</li><button onClick={()=> remove(it)}>X</button><br /></>

                        })
                    }
                </ol>

            
            </div>
            

        </div>
    );
}