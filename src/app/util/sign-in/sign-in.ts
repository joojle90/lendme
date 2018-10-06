export class SignIn {
	constructor(
		public user_id: string,
		public insert_date: string,
		public user_level: string,
		public first_name: string,
		public last_name: string,
		public email: string,
		public mobile_no: string,
		public activated: number,
		public mark_status: string,
		public remark: string
	){}
}