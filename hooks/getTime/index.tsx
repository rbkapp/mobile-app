export default function getTime(time: string) {
	if(time){
		const timeArray = time.split(':');

		return timeArray[0] + ':' + timeArray[1];
	}
}
