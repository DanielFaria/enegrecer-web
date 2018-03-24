import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';

const genero = ({ id, divClasse }) => (
  <Combobox
    id={id}
    label={'Gênero'}
    divClasse={divClasse}
    itens={['Feminino', 'Masculino']}
    valorPadrao={'Selecione seu gênero'}
  />
);

genero.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string
};

genero.defaultProps = {
  id: '',
  divClasse: ''
};

export default genero;

