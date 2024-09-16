import React from "react";

const CompanyList = ({ companies, setIsOpen }) => {
  return (
    <div>
      <h2>Listagem de Empresas</h2>
      {companies.length ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome da Empresa</th>
              <th>Email</th>
              <th>Contatos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.ID}>
                <td>{company.ID}</td>
                <td>{company.TITLE}</td>
                <td>{company.email}</td>
                <td>
                  {company.contacts.map((contact) => {
                    return(
                      <div>
                        {contact.NAME + ' ' + contact.LAST_NAME}
                      </div>
                    )
                  })} 
                </td>
                <td>
                  <div className="btn-grouper">
                    <button className="btn primary">
                      Editar
                    </button>
                    <button className="btn delete">
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma empresa cadastrada ainda.</p>
      )}
      <button onClick={() => setIsOpen(true)} className='btn primary'>
        Criar
      </button>
    </div>
  );
};

export default CompanyList;
