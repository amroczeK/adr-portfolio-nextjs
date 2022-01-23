export interface IJob {
  role: string;
  company: string;
  team: string;
  startEndDate: string;
  location: string;
  summary: string;
  accomplishments: [string];
}

export interface IJobs extends Array<IJob> {
  [index: number]: IJob;
}