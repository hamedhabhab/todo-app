function Backdrop(props) {
    return (
        // here we add the onClick prop to our custom component, because on custom components
        // we have to define our own event props
        <div className="backdrop" onClick={props.onCancel}></div>
    )
}

export default Backdrop;