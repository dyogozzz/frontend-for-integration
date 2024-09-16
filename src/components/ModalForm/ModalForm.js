import Modal from "../Modal/Modal.js"
import CompanyForm from "../CompanyForm/CompanyForm.js"

const ModalForm = (props) => {
  return (
    <div>
      {props.isOpen ?
        <Modal clickClose={props.setIsOpen}>
            <CompanyForm onAddCompany={props.handleAddCompany} />
        </Modal>
        :
        undefined
      }
    </div>
  )
}

export default ModalForm