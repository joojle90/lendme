export class Log {
	constructor(
		public log_id: string,
		public insert_date: string,
		public customer_id: string,
		public customer_status: string,
		public credit_score: number,
		public number_of_lend: number,
		public number_of_rent: number,
		public mark_status: string,
		public remark: string
	){}
}