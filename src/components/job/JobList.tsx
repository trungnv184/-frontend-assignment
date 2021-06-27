import React from "react";
import { Table } from "semantic-ui-react";
import { JobsResponse } from "../../common/types";
import JobHeader from "./JobHeader";
import JobItem from "./JobItem";

type JobListProps = {
  jobs: JobsResponse[];
};

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <Table celled={true} padded={true}>
      <JobHeader />
      <Table.Body>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} contact={job.contact} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default JobList;
