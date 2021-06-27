import React from "react";
import { Table } from "semantic-ui-react";

const JobHeader: React.FC<any> = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Start</Table.HeaderCell>
        <Table.HeaderCell>End</Table.HeaderCell>
        <Table.HeaderCell>Contact Assigned</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default JobHeader;
