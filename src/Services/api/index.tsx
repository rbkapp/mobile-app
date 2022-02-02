import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Infos from '../../../constants/Infos';

const async_key = Infos['Key'].AsyncStorage;
const eventxProdApi = Infos['Url'].EventxProdApi;
const eventxDevApi = Infos['Url'].EventxDevApi;

let selectApi = '';
Infos['Url'].DefaultApi == 0 ? selectApi = eventxDevApi : selectApi = eventxProdApi;
console.log('selectApi: '+selectApi);

const token = 'cHhwYXlfMTYxNjQzMjY5NTE5NF9qbTRkZjV3bHZpZDokMmIkMTAkLzZsVloyeHB4VmV0bU0yRU8xbzBwdXU5VndZOW9EVDQ1YTBOMXRuRW4zLzQ2bGZqLlI2MHU';

async function startScreen() {
	const storageApi = await AsyncStorage.getItem(async_key + 'storage_api');
	if(storageApi){
		storageApi == 0 ? selectApi = eventxDevApi : selectApi = eventxProdApi;
		api.defaults.baseURL = selectApi;
		console.log('selectApi (by storage): '+selectApi);
	}
}
startScreen();

const api = axios.create({
	baseURL: selectApi,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
api.defaults.headers.authorization = `Bearer ${token}`;

export default api;
