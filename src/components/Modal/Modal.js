import './Modal.css'

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="popup-inner">
        <div className='modal-content'>
          {props.children}
          <button onClick={() => props.clickClose(undefined)} className="popup-close">X</button>
        </div>
      </div>
    </div>
  )
}

export default Modal