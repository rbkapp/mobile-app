export default function getData(date: string) {
	if(date){
		const dateT = date.split('T');
		const dateArray = dateT[0].split('-');

		return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
	}
}
