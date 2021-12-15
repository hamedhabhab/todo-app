function Modal(props) {

    // function cancelHandler() {
    //     props.onCancel()
    // }
    function confirmHandler() {
        props.onConfirm()
    }

    return (
    <div className='modal'>
        <p>Areyou sure?</p>
        {/* both of the bottom ones work, here im just showing that functions can also be used
        as well as the props */}
        {/* <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button> */}
        <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
        <button className='btn'onClick={confirmHandler}>Confirm</button>
    </div>
    )
}

export default Modal;