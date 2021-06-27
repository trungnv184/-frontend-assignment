import React from "react";
import { Table } from "semantic-ui-react";
import { Contact, Job } from "../../common/types";
import { formatDateTime } from "../../utils/formatDateTime";

type JobItemProps = {
  job: Pick<Job, "name" | "start" | "end">;
  contact: Contact;
};

const JobItem: React.FC<JobItemProps> = ({
  job: { name, start, end },
  contact,
}) => {
  return (
    <Table.Row>
      <Table.Cell singleLine={true}>{name}</Table.Cell>
      <Table.Cell>{formatDateTime(start)}</Table.Cell>
      <Table.Cell>{formatDateTime(end)}</Table.Cell>
      <Table.Cell>{contact.name}</Table.Cell>
    </Table.Row>
  );
};

export default JobItem;
