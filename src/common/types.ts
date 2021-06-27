export interface IAppTabContainer {
  service: IDataService;
}

export interface Job {
  id: number;
  contactId: string;
  start: string;
  end: string;
  location: string;
  name: string;
}

export interface Contact {
  id: number;
  name: string;
}

export interface Activity {
  id: number;
  name: string;
  start: string;
  end: string;
}

export interface JobAllocations {
  id: number;
  jobId: number;
  resourceId: number;
}

export interface ActivityAllocations {
  id: number;
  resourceId: number;
  activityId: number;
}

export interface Resource {
  id: number;
  name: string;
}

export type JobsResponse = Pick<Job, "id" | "name" | "start" | "end"> & {
  contact: Contact;
};

export interface IDataService {
  getJobs: () => Promise<Job[]>;
  getJobsWithSearchTerm: (searchTerm: string) => Promise<JobsResponse[]>;
  getActivities: () => Promise<Activity[]>;
  getJobAllocations: () => Promise<JobAllocations[]>;
  getActivityAllocations: () => Promise<ActivityAllocations[]>;
  getResources: () => Promise<Resource[]>;
}
