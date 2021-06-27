import React, { useState } from "react";
import { Dimmer, Input, Loader } from "semantic-ui-react";
import { IAppTabContainer } from "../common/types";
import JobList from "../components/job/JobList";
import CustomMessage from "../components/Message/Message";

import { SectionGroup } from "../components/section/SectionGroup";
import { useSearchJobs } from "../hooks";

import "./QuestionOne.css";

export const QuestionOne: React.FC<IAppTabContainer> = ({ service }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    loading,
    data: jobs,
    error,
    isFetchedApi,
  } = useSearchJobs(searchTerm, service);

  if (loading) {
    return (
      <Dimmer active={true}>
        <Loader />
      </Dimmer>
    );
  }

  if (error) {
    return (
      <CustomMessage
        title="Something went wrong"
        content="Error while fetching data please try again"
      />
    );
  }

  const renderEmptyResult = () => {
    return (
      isFetchedApi && (
        <CustomMessage
          title="Search Jobs"
          content={`no data match with ${searchTerm} response`}
        />
      )
    );
  };

  return (
    <SectionGroup>
      <Input
        fluid
        icon="search"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {jobs?.length > 0 ? <JobList jobs={jobs}></JobList> : renderEmptyResult()}
    </SectionGroup>
  );
};
