import { React } from 'react'
import '../css/modal.css'

const Modal = (props) => {
    
    if (!props.show) {
        return null;
    }

    function onKeyDown(e) {
        if (e.key === "Enter") {
            // handle edit
        }
    }

    function handleOnChange(e) {
        props.onChange(e)
    }

    return <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
            <input type="text" className='todo-title' value={props.todo.title} onChange={handleOnChange} placeholder='Add your todo...' onKeyDown={onKeyDown} />
            </div>
            <div className="modal-body">
                This is the body
            </div>
        </div>
    </div>
}

export default Modal;