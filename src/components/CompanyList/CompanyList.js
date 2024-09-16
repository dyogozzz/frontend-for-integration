import React from "react";

const CompanyList = ({ companies, setIsOpen }) => {
  return (
    <div className="container mt-5">
      <h2>Listagem de Empresas/Contatos</h2>
      {companies.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome da Empresa</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.companyName}</td>
                <td>{company.email}</td>
                <td>{company.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-3">Nenhuma empresa cadastrada ainda.</p>
      )}
      <button onClick={() => setIsOpen(true)} className='btn primary'>
        Criar
      </button>

    </div>
  );
};

export default CompanyList;
