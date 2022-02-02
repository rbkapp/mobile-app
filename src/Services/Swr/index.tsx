import useSWR from 'swr';
/*import axios from 'axios';

const token =
  'cHhwYXlfMTYxNjQzMjY5NTE5NF9qbTRkZjV3bHZpZDokMmIkMTAkLzZsVloyeHB4VmV0bU0yRU8xbzBwdXU5VndZOW9EVDQ1YTBOMXRuRW4zLzQ2bGZqLlI2MHU';

const apiSwr = axios.create({
	baseURL: 'https://eventx-api-ia2u8.ondigitalocean.app',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
apiSwr.defaults.headers.authorization = `Bearer ${token}`;
*/
export default function useFetch(url: string) {
	const { data, error } = useSWR(url, async (url) => {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	});

	return { data, error };
}
