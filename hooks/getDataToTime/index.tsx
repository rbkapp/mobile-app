export default function getDataToTime(time: string) {
	if(time){
		const dataTimeArray = time.split('T');

		const timeArray = dataTimeArray[1].split(':');

		return timeArray[0] + ':' + timeArray[1];
	}
}
