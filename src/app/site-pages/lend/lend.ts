export class Lend {
	constructor(
		public audit_id: string,
		public insert_date: string,
		public from_customer_id: string,
		public to_customer_id: string,
		public bankin_type: string,
		public amount: number,
		public point_of_interest: number,
		public status: string,
		public number_of_month: number,
		public mark_status: string,
		public remark: string
	){}
}