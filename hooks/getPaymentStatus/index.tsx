import Datas from '../../constants/Datas';
const StatusPayments = Datas['StatusPayments'];

export default function getPaymentStatus(payment: string) {
	if(payment){
		let retorno = '';
		StatusPayments.map((status: any, index: number) => {
			status.value == payment ? retorno = status.label : null;
		});
		return retorno;
	}
}
