import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container, PerfilCont, ScreenTitle, DadosCont,
} from './styles';

import {
  Divider10, Divider35,
  ButtonAux, ButtonAuxLabel,
} from '../../../Styles';

/* global components*/
import HeaderIntPainel from "../../../Components/HeaderIntPainel";
import FormTextInputLabel from '../../../Components/FormTextInputLabel';
import FormTextInputPasswordLabel from '../../../Components/FormTextInputPasswordLabel';
import FormButton from '../../../Components/FormButton';
import Footer from "../../../Components/Footer";

/* assets */
import form_mail from '../../../../assets/images/form_mail.png';
import form_pass from '../../../../assets/images/form_pass.png';

import api from "../../../Services/api";
import AuthContext from '../../../Contexts/auth';
import { RootStackParamList } from '../../../../types';
import Infos from '../../../../constants/Infos';

const async_key = Infos['Key'].AsyncStorage;
type NavigationProp = StackNavigationProp<RootStackParamList, 'PerfilDados'>;
interface Props { navigation: NavigationProp, route: any; }


const PerfilDados = ({ navigation, route }: Props) => {
  const { user, token, signIn } = useContext(AuthContext);

  const [formEditable, setFormEditable] = useState<boolean>(false);
  const [formLoad, setFormLoad] = useState<boolean>(false);
  const [formMail, setFormMail] = useState<string>(user.email);
  const [formPassword0, setFormPassword0] = useState<string>('');
  const [formPassword1, setFormPassword1] = useState<string>('');
  const [formPassword2, setFormPassword2] = useState<string>('');

  async function checkFormSave() {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (formMail == '') {
      Alert.alert('Por favor, informe um e-mail válido!');

    } else if (expression.test(String(formMail).toLowerCase()) == false) {
      Alert.alert('E-mail incorreto, por favor verifique!');

    } else if (formPassword0 == '') {
      Alert.alert('Por favor, informe sua senha atual!');

    } else if (formPassword1 == '') {
      Alert.alert('Por favor, informe a nova senha!');

    } else if (formPassword1.length < 8) {
      Alert.alert('Sua nova senha deve ter no mínimo oito caracteres, verifique!');

    } else if (formPassword2 == '') {
      Alert.alert('Por favor, confirme a nova senha!');

    } else if (formPassword1 != formPassword2) {
      Alert.alert('Por favor, as novas senhas não conferem!');

    } else {
      /* RUM edit API */
      setFormEditable(false);
      setFormLoad(true);

      try {
        const credentials = {
          password_old: formPassword0,
          password_new: formPassword1,
        }
        api.defaults.headers.authorization = `Bearer ${token}`;

        const response = await api.put(`/users/update-password`, credentials);
        const user_response = response.data;
        console.log(JSON.stringify(user_response));

        Alert.alert('Senha atualizada com sucesso!');
        navigation.navigate("Perfil");

      } catch (err) {
        Alert.alert(err.response.data.message);

        setFormEditable(true);
        setFormLoad(false);
      }
    }
  }

  return <SafeAreaView>
    <ScrollView>
      <Container>
        <PerfilCont>
          <ScreenTitle>Dados pessoais</ScreenTitle>
          <DadosCont>
            <FormTextInputLabel icon={form_mail} label="E-mail" placeholder='E-mail' value={formMail} callback={setFormMail} editable={formEditable} />
            <FormTextInputPasswordLabel icon={form_pass} label="Senha atual" placeholder='Senha atual' value={formPassword0} callback={setFormPassword0} editable={formEditable} />

            <FormTextInputPasswordLabel icon={form_pass} label="Nova senha" placeholder='Nova senha' value={formPassword1} callback={setFormPassword1} editable={formEditable} />
            <FormTextInputPasswordLabel icon={form_pass} label="Repita a nova senha" placeholder='Repita a nova senha' value={formPassword2} callback={setFormPassword2} editable={formEditable} />

            <Divider35 />
            {formEditable == false && formLoad == false ? (<>
              <ButtonAux onPress={() => setFormEditable(true)} >
                <ButtonAuxLabel>Editar</ButtonAuxLabel>
              </ButtonAux>
            </>) : (null)}

            {formEditable == true && formLoad == false ? (<>
              <ButtonAux onPress={() => setFormEditable(false)} >
                <ButtonAuxLabel>Cancelar</ButtonAuxLabel>
              </ButtonAux>
            </>) : (null)}

            {formEditable == true || formLoad == true ? (<>
              <Divider10 /><Divider10 />
              <FormButton label="Salvar" onPress={() => checkFormSave()} active={formEditable} loader={formEditable ? false : true} navigation={navigation} />
            </>) : (null)}
          </DadosCont>
        </PerfilCont>
        <Footer></Footer>
      </Container>
    </ScrollView>
    <HeaderIntPainel navigation={navigation} route={route} />
  </SafeAreaView>;
}
export default PerfilDados;
