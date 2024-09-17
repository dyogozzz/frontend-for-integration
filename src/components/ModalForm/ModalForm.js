import Modal from "../Modal/Modal.js"
import CompanyForm from "../CompanyForm/CompanyForm.js"

const ModalForm = (props) => {
  return (
    <div>
      {props.isOpen ?
        <Modal clickClose={props.setIsOpen}>
            <CompanyForm handleEditCompany={props.handleEditCompany} company={props.company} clickClose={props.setIsOpen} addCompany={props.addCompany} />
        </Modal>
        :
        undefined
      }
    </div>
  )
}

export default ModalForm