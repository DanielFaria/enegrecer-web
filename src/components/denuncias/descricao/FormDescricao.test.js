import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Descricao from './FormDescricao';

describe('Form Descrição', () => {
  it('deve seguir a estrutura definida ', () => {
    const desricao = mount(<Descricao />);
    const desricaoJson = toJson(desricao);
    expect(desricaoJson).toMatchSnapshot();
  });
});
