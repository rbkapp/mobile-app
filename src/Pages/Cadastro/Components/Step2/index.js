import React from 'react';

import { Container, 
    Endform, FormLine, Iconline, Inputline,
} from './styles';

import form_cep from './assets/form_cep.png';
import form_end from './assets/form_end.png';

const Step2 = () => {
    return <Container>
        <Endform>
            <FormLine>
                <Iconline source={form_cep} />
                <Inputline
                    value=''
                    placeholder="CEP"
                />
            </FormLine>

            <FormLine>
                <Iconline source={form_end} />
                <Inputline
                    value=''
                    placeholder="Endereço"
                />
            </FormLine>

            <FormLine>
                <Iconline source={form_end} />
                <Inputline
                    value=''
                    placeholder="Número"
                />
            </FormLine>

            <FormLine>
                <Iconline source={form_end} />
                <Inputline
                    value=''
                    placeholder="Complemento"
                />
            </FormLine>

            <FormLine>
                <Iconline source={form_end} />
                <Inputline
                    value=''
                    placeholder="Bairro"
                />
            </FormLine>

            <FormLine>
                <Iconline source={form_cep} />
                <Inputline
                    value=''
                    placeholder="Cidade"
                />
            </FormLine>

            <FormLine>
                <Iconline source={form_cep} />
                <Inputline
                    value=''
                    placeholder="Estado"
                />
            </FormLine>

        </Endform>
    </Container>;
}

export default Step2;