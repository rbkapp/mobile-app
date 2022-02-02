/* Routes navigation */
export type RootStackParamList = {
  Home: { tab: string };

  Login: { tab: string, redirect: string, redirect_details: string };
  LoginRecuperar: { tab: string, redirect: string, redirect_details: string };
  LoginRedefinir: { redirect: string, redirect_details: string };
  Cadastro: { redirect: string, redirect_details: string };

  Cotacoes: undefined;
  CotacoesNovoSessao: { budgetData: any };
  CotacoesNovoTipo: { budgetData: any };
  CotacoesNovoDetalhes: { budgetData: any };
  CotacoesDetalhes: { budgetData: any };
  CotacoesDetalhesOfertas: { budgetData: any };

  Suporte: undefined;
  SuporteNovo: undefined;
  SuporteCategoria: { category_id: string };
  SuporteDetalhes: { suportData: any };

  Perfil: undefined;
  PerfilDados: undefined;
  PerfilAcessos: undefined;
  PerfilEnderecos: undefined;
  PerfilEnderecosNovo: undefined;
  PerfilEnderecosDetalhes: { adressData: IUserAdressData };
  PerfilOpcoes: undefined;
};

export type DrawerStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type DrawerContentParamList = {
};

export type HeadersParamList = {
  navigation: any;
  route: any;
};

export type TabsParamList = {
  navigation: any;
  setTab: any;
  route: any;
};


export type AlertMessageParamList = {
  navigation: any;
  active: boolean;
  icon: any;
  title: string;
  message: string;
  labelCancel: string;
  callbackCancel: any;
  labelConfirm: string;
  callbackConfirm: any;
};



export type DateTimePickerParamList = {
  icon: any;
  placeholder: string;
  date: any;
  callback: any;
  editable: boolean;
};


export type DropDownPickerParamList = {
  items: any;
  defaultValue: string;
  placeholder: string;
  onChangeItem: any;
  editable: boolean;
};
export type DropDownPickerLabelParamList = {
  label: string;
  icon: any;
  items: any;
  defaultValue: string;
  placeholder: string;
  onChangeItem: any;
  editable: boolean;
};

export type TextInputParamList = {
  icon: any;
  placeholder: string;
  value: string;
  callback: any;
  editable: boolean;
};

export type TextInputLabelParamList = {
  label: string;
  icon: any;
  placeholder: string;
  value: string;
  callback: any;
  editable: boolean;
};
export type TextInputNumberLabelParamList = {
  label: string;
  icon: any;
  placeholder: string;
  value: number;
  callback: any;
  editable: boolean;
};
export type TextInputCoinLabelParamList = {
  label: string;
  icon: any;
  placeholder: string;
  value: number;
  callback: any;
  editable: boolean;
};

export type TextInputDateLabelParamList = {
  label: string;
  icon: any;
  placeholder: string;
  value: string;
  callback: any;
  editable: boolean;
};

export type TextAreaParamList = {
  placeholder: string;
  value: string;
  callback: any;
  editable: boolean;
};

export type CheckParamList = {
  active: boolean;
  value: string;
};

export type NavTabParamList = {
  navigation: any;
  route: any;
  setTab: any;
};



export type AgeIconParamList = {
  color: string;
};

export type PandaButtonParamList = {
  active: boolean;
  onPress: any;
  source: any;
};
export type OtherButtonParamList = {
  active: boolean;
  onPress: any;
  source: any;
  plataform: string;
  plataformIcon: any;
};

export type FormCategoriaParamList = {
  active: boolean;
  onPress: any;
  label: string;
};


export type FormButtonParamList = {
  active: boolean;
  loader: boolean;
  navigation: any;
  label: string;
  onPress: any;
};

export type FormItemListParamList = {
  active: boolean;
  onPress: any;
  icon: any;
  label: string;
  description: string;
};

export type ScreenLoaderParamList = {
  active: boolean;
  label: string;
};

export type FormAccordionButtonParamList = {
  icon: any;
  label: string;
  pink: boolean;
  onPress: any;
};

export type FormInputFileParamList = {
  icon: any;
  label: string;
  onPress: any;
};

export type MoreButtonEventosParamList = {
  active: boolean;
  navigation: any;
  event_id: string;
};

export type ItemIngressoParamList = {
  active: boolean;
  navigation: any;
  data: any;
};

export type ItemIngressoDataParamList = {
  name: string;
  value: string;
  date: string;
};

export type ItemIngressoTitularParamList = {
  index: number;
  title: string;
  label: string;
  active: boolean;
  callback: any;

  holder_name: string;
  holder_mail: string;
};

export type ItemTransactionParamList = {
  active: boolean;
  purchaseData: any;
};

export type ItemMonthParamList = {
  active: boolean;
  month: string;
  year: string;
  transactions: any;
};


export type ItemEventoNovoIngressoParamList = {
  active: boolean;
  navigation: any;
  ticket_id: number;
  ticket_name: string;
  ticket_value: string;
};

export type ItemBudGetParamList = {
  active: boolean;
  navigation: any;
  budgetData: any;
};

export type ModalCarrinhoParamList = {
  closeCarrinho: any;
  clearCupom: any;
  formDataTickets: any;
  formDataCupons: any;
  carrinhoSubtotal: string;
  carrinhoDiscount: string;
  carrinhoTotal: string;
  funcCheckout: any;
};

export type ItemIngressoCarrinhoParamList = {
  ticket_id: string;
  event_id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  absorb_rate: boolean;
  callback: any;
};



export type FormloginParamList = {
  navigation: any;
  setTab: any;
  route: any;
};


export type ItemBankParamList = {
  active: boolean;
  id: string;
  bank: string;
  agency: string;
  account: string;
  digit: string;
  type_account: string;
  onPress: any;
};



export type ModalMessageParamList = {
  title: string;
  message: string;
  icon: any;
  onPress: any;
};


export type DropDownParamList = {
  label: string;
  value: string;
};

export type FilterBilheteriaParamList = {
  active: boolean;
  eventsData: any;
  filterEvents: any;
  eventsTicketsData: any;
  filterEventsTickets: any;
  callbackClose: any;
  callbackFilter: any;
};

export type FilterParamList = {
  active: boolean;
  callback: any;
};



export type IUserProps = {
  id: string;
  name: string;
  email: string;
  document: string;
  type_document: string;
  birthdate: string;
  gender: string;
  cell_phone: string;
  avatar: string;
  verify_token: string;
  organizer: any;
};



export type IUserAdressData = {
  id: number;
  user_id: number;
  address_title: string;
  address_zipcode: string;
  address_street: string;
  address_country: string;
  address_district: string;
  address_number: string;
  address_state: string;
  address_city: string;
  address_complement: string;
  status: boolean;
  created_at: string;
  updated_at: string;
};


export type IEventata = {
  id: number;
  name: string;

  address_zipcode: string;
  address_street: string;
  address_country: string;
  address_district: string;
  address_number: string;
  address_state: string;
  address_city: string;
  status: boolean;
  created_at: string;
  updated_at: string;
};
