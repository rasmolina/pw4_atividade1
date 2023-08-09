import React, { useState } from 'react';
import Modal from 'react-modal';
import './Cadastro.css';

Modal.setAppElement('#root'); 

function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const limparCampos = () => {
    setNome('');
    setTelefone('');
    setEmail('');
    setIdade('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setModalIsOpen(true);

    const dados = {
      Nome: nome,
      Telefone: telefone,
      Email: email,
      Idade: idade,
    };

    
    
  };

  return (
    <div>
      
      <form className="form-container" onSubmit={handleSubmit}>
      <h2>Ficha de Cadastro</h2>
        <div>
          <label className="form-label" >Nome:</label>
          <input className="form-input" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label className="form-label" >Telefone:</label>
          <input className="form-input" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <div>
          <label className="form-label" >Email:</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="form-label" >Idade:</label>
          <input className="form-input" type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div>
        <button className="form-button" type="button" onClick={limparCampos}>
        Limpar
      </button>
      <button className="form-button" type="submit">Submeter</button>      
        </div>
      </form>
      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Dados do Cadastro"
        className="modal"
      >
        <h3 className='modal-header'>Dados do Cadastro</h3>
        <div className='modal-content'>
        <p>Nome: {nome}</p>
        <p>Telefone: {telefone}</p>
        <p>Email: {email}</p>
        <p>Idade: {idade}</p>
        <button className='form-button' onClick={() => setModalIsOpen(false)}>Fechar</button>
        </div>
      </Modal>

    </div>
  );
}

export default Cadastro;
