import { useRef } from "react";
import { useState } from "react";
import '../css/todo.css';
export default function Todo(){

    let textboxvalue=useRef();
    let [items,setitems]=useState([]);

    let adding=()=>{

        setitems([...items,textboxvalue.current.value]);
        textboxvalue.current.value="";

    };

    let remove=(idx)=>{

        setitems(
            items.filter((t,id)=>{
                return id != idx
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
                        items.map((it,idx)=>{
                            
                            return <><li kay={it+idx}>{it}</li><button onClick={()=> remove(idx)}>X</button><br /></>

                        })
                    }
                </ol>

            
            </div>
            

        </div>
    );
}