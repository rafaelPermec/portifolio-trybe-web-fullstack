import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { getStateForm } = this.props;
    console.log(getStateForm);
    // Recupere as informações do seu estado criado no Redux
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {getStateForm.nome}
        </div>
        <div>
          Email:
          { getStateForm.email }
        </div>
        <div>
          CPF:
          { getStateForm.cpf }
        </div>
        <div>
          Endereço:
          { getStateForm.endereco }
        </div>
        <div>
          Cidade:
          { getStateForm.cidade }
        </div>
        <div>
          Estado:
          { getStateForm.estado }
        </div>
        <div>
          Currículo:
          { getStateForm.curriculo }
        </div>
        <div>
          Cargo:
          { getStateForm.cargo }
        </div>
        <div>
          Descrição do cargo:
          { getStateForm.descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getStateForm: state.myReducer.form });

export default connect(mapStateToProps)(FormDataDisplay);

FormDataDisplay.propTypes = {
  getStateForm: PropTypes.shape(PropTypes.string).isRequired,
};
