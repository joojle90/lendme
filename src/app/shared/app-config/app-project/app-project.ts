export class AppProject {
    constructor(
        public project_code: string,
        public insert_date: string,
        public project_name: string,
        public project_desc: string,
        public project_image: string,
        public system_token: string,
        public duration: number,
        public mark_status: string,
        public remark: string
    ){}
}