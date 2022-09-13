import React, { useState } from "react";

const Todos =({item, onUpdate, onDelete})=> {
    const [isEdit, setIsEdit] = useState(false);


    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);    
        function handleSubmit(e) {
            e.preventDafault();
        }
        
        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoImput" onChange={handleChange} value={newValue} />
                <button className="button" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        );
        
    }
    function TodoElement(){
        return (
            <div className="todoInfo">
                 {item.title} <button onClick={()=> setIsEdit(true)}>Editar</button>
                 <button onClick={(e)=>onDelete(item.id)}>Delete</button>
            </div>
        );
        
    }

    return (
            <div className="todo"> {isEdit ? <FormEdit/> : <TodoElement/>} </div>
    );
}

export default Todos;