import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Todo = () => {

    const [todoList, settodoList] = useState([]);

    const addNewTodo = (e) => {

        if(!e.target.value.trim()) return;


        // console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value);
            // todoList.push(e.target.value);                       // wrong way
            settodoList([...todoList, e.target.value]);             //using split operator
            console.log([...todoList, e.target.value]);

            e.target.value="";
        }
    };

    const removeTodo = (index) => {
        console.log(index);
        // todoList.splice(index, 1);
        // wrong way

        const temp = todoList;
        temp.splice(index, 1);
        settodoList([...temp]);
    }

  return (
    <div className='bg-body-secondary vh-100'>
        <div className='container vh-100 py-5'>
            <h1 className='text-center'>Todo List</h1>
            <div className='card mt-5'>
                <div className='card-header'>
                    <input type='text' className='form-control' onKeyDown={addNewTodo}/>
                </div>
                <div className='card-body p-0'>

                    {/* {todoList.map( (todo, index) => {return <p>{todo}</p>})} */}

                    <AnimatePresence mode="popLayout">
                    {todoList.map( (todo, index) => {
                        return (<motion.div
                        layout
                        initial ={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit ={{x: "100%", opacity: 0 }}
                        transition={{ duration: 0.3, type:'spring' }}
                        key={todo}
                        className={`d-flex justify-content-between p-4 ${index%2===0 ? 'bg-body-secondary' : ''}`}>
                        <h5>{todo}</h5>
                        <button className='btn btn-danger' onClick={() => {removeTodo(index)}}>Delete</button>
                        </motion.div>)
                    })}
                        </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo