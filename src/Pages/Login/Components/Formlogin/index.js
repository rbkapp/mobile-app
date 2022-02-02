import React from 'react';
import { View } from 'react-native';

import { 
    Loginform, FormLine, Iconline, Inputline, FormTools, Remebertoll, Checkbox, Check, Checklabel, Forgottoll, ForgotPass, ForgotText, Cadastrobox, Cadastrolabel,
    Actionbtn, Actionlabel, Actionsecbtn, Actionseclabel, Divider, Glogin, Gicon, Glabel
} from './styles';

import form_mail from './assets/form_mail.png';
import form_pass from './assets/form_pass.png';
import form_glogin from './assets/glogin.png';/**/

const Formlogin = () => {
    return <Loginform>
        <FormLine>
            <Iconline source={form_mail} />
            <Inputline
                value=''
                placeholder="E-mail"
            />
        </FormLine>
        <FormLine>
            <Iconline source={form_pass} />
            <Inputline
                value=''
                placeholder="Senha"
            />
        </FormLine>

        <FormTools>
            <Remebertoll>
                <Checkbox>
                    <Check></Check><Checklabel>Lembrar de mim</Checklabel>
                </Checkbox>
            </Remebertoll>

            <Forgottoll>
                <ForgotPass>
                    <ForgotText>Esqueci minha senha</ForgotText>
                </ForgotPass>
            </Forgottoll>
        </FormTools>

        <Actionbtn

        >
            <Actionlabel>Entrar</Actionlabel>
        </Actionbtn>

        <Cadastrobox>
            <Cadastrolabel>Você é novo por aqui?</Cadastrolabel>
            <Actionsecbtn>
                <Actionseclabel>Cadastre-se</Actionseclabel>
            </Actionsecbtn>
        </Cadastrobox>

        <Divider>──────── Ou ────────</Divider>

        <Glogin>
            <Gicon source={form_glogin} />
            <Glabel>continue com Google</Glabel>
        </Glogin>
    </Loginform>;
}

export default Formlogin;