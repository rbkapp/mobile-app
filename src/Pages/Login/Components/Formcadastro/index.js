import React from 'react';

import { 
    Loginform, FormLine, Iconline, Inputline, Inputpassline, Btnpass, Iconpass, FormTools, Formtipo, Tipolabel, Checkbox, Loginaction, Loginactionlabel, Checklabel, Cadastrobox, Cadastrolabel,
    Actionbtn, Actionlabel, Divider, Glogin, Gicon, Glabel
} from './styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import form_user from './assets/form_user.png';
import form_mail from './assets/form_mail.png';
import form_phone from './assets/form_phone.png';
import form_pass from './assets/form_pass.png';
import form_view from './assets/form_view.png';
import form_glogin from './assets/glogin.png';


const Formcadastro = (props) => {
    return <Loginform>
        <FormLine>
            <Iconline source={form_user} />
            <Inputline
                value=''
                placeholder="Nome completo"
            />
        </FormLine>
        <FormLine>
            <Iconline source={form_mail} />
            <Inputline
                value=''
                placeholder="E-mail"
            />
        </FormLine>
        <FormLine>
            <Iconline source={form_phone} />
            <Inputline
                value=''
                placeholder="Telefone"
            />
        </FormLine>
        <FormLine>
            <Iconline source={form_pass} />
            <Inputpassline
                value=''
                placeholder="Senha"
            />
            <Btnpass>
                <Iconpass source={form_view} />
            </Btnpass>
        </FormLine>
        <FormLine>
        <Iconline source={form_pass} />
            <Inputpassline
                value=''
                placeholder="Repita a senha"
            />
            <Btnpass>
                <Iconpass source={form_view} />
            </Btnpass>
        </FormLine>

        <FormTools>
            <Tipolabel>Escolha um tipo de cadastro</Tipolabel>
            
            <Formtipo>
                <Checkbox>
                    <Checklabel><MaterialCommunityIcons name="checkbox-marked" color={'#d40050'} size={22} /> Participar de eventos</Checklabel>
                </Checkbox>

                <Checkbox>
                    <Checklabel><MaterialCommunityIcons name="checkbox-blank-outline" color={'#aaa'} size={22} /> Criar eventos</Checklabel>
                </Checkbox>
            </Formtipo>
        </FormTools>

        <Cadastrobox>
            <Cadastrolabel>Ao se cadastrar, você concorda com nossos</Cadastrolabel>
            <Loginaction>
                <Loginactionlabel> Termos de uso</Loginactionlabel>
            </Loginaction>
        </Cadastrobox>
        
        <Actionbtn

        >
            <Actionlabel>Cadastrar</Actionlabel>
        </Actionbtn>

        <Cadastrobox>
            <Cadastrolabel>Já possui uma conta? </Cadastrolabel>
            <Loginaction>
                <Loginactionlabel> Entrar</Loginactionlabel>
            </Loginaction>
        </Cadastrobox>

        <Divider>──────── Ou ────────</Divider>

        <Glogin>
            <Gicon source={form_glogin} />
            <Glabel>continue com Google</Glabel>
        </Glogin>
    </Loginform>;
}

export default Formcadastro;