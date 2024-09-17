import React, { useState } from "react";

const CompanyForm = ({ addCompany, handleEditCompany, clickClose, company }) => {
  const [formData, setFormData] = useState(company);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newCompany = { ...formData };
      
      if(newCompany.ID) {
        await handleEditCompany(newCompany)
      } else {
        await addCompany(newCompany)
      }

    } catch (err) {
      console.error("Erro ao enviar o formulário", err)
    } finally {
      setFormData({})
    }
  };

  return (
    <div className="title">
      <h2>{formData.ID ? 'Editar' : 'Criar'} Empresa/Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="company_name">
            Nome da Empresa
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name ? formData.company_name : undefined}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">
            Email da empresa
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email ? formData.email : undefined}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label>
            Nome do contato 1
          </label>
          <input
            type="text"
            id="contact_name_1"
            name="contact_name_1"
            value={formData.contact_name_1 ? formData.contact_name_1 : undefined}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label>
            Sobrenome do contato 1
          </label>
          <input
            type="text"
            id="contact_second_name_1"
            name="contact_second_name_1"
            value={formData.contact_second_name_1 ? formData.contact_second_name_1 : undefined}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label>
            Nome do contato 2
          </label>
          <input
            type="text"
            id="contact_name_2"
            name="contact_name_2"
            value={formData.contact_name_2 ? formData.contact_name_2 : undefined}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label>
            Sobrenome do contato 2
          </label>
          <input
            type="text"
            id="contact_second_name_2"
            name="contact_second_name_2"
            value={formData.contact_second_name_2 ? formData.contact_second_name_2 : undefined}
            onChange={handleChange}
          />
        </div>
        <div className="buttons-form">
          <button type="submit" className="btn success">
            Salvar
          </button>
          <button onClick={() => clickClose(undefined)} type="submit" className="btn cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;