import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import InformacoesLegais from './FormInformacoesLegais';

describe('DenuncianteForm', () => {
  it('deve seguir a estrutura definida ', () => {
    const informacoesLegais = mount(<InformacoesLegais />);
    const informacoesLegaisJson = toJson(informacoesLegais);
    expect(informacoesLegaisJson).toMatchSnapshot();
  });
});
