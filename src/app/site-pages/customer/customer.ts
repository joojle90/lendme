export class Customer {
	constructor(
		public customer_id: string,
		public insert_date: string,
		public first_name: string,
		public last_name: string,
		public ic_no: string,
		public date_of_birth: string,
		public gender: string,
		public account_no: string,
		public profile_rate: number,
		public address1: string,
		public address2: string,
		public address3: string,
		public postal_code: string,
		public city: string,
		public state: string,
		public country: string,
		public mobile_no: string,
		public email: string,
		public image: string,
		public emergency_contact_no: string,
		public mark_status: string,
		public remark: string
	){}
}