import { useState } from "react";

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true)
        console.log(modalIsOpen)
    }

    function closeModalHandler() {
        setModalIsOpen(false)
        console.log(modalIsOpen)
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className="actions">
                {/* if you add parenthesis to the deletehandler, it would execute automatically as 
                soon as the page loads. we dont want that, so we leave the parenthesis out */}
                {/* <button className="btn" onClick={deleteHandler()} >delete</button> */}
                <button className="btn" onClick={deleteHandler} >delete</button>
            </div>
            {/* { modalIsOpen ? <Modal /> : null } */}
            {/* a shorter way of writing the above: if both conditions are true, the second value is returned */}
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
            
        </div>
    )
}

export default Todo;