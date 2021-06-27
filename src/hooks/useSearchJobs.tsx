import { useState, useEffect } from "react";
import { IDataService, JobsResponse } from "../common/types";
import { asyncDelay } from "../utils/asyncDelay";
import useDebounce from "./useDebounce";

const useSearchJobs = (searchTerm: string, service: IDataService) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchedApi, setIsFetchedApi] = useState(false);
  const [jobs, setJobs] = useState<JobsResponse[]>([]);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.trim().length < 3) {
      setIsFetchedApi(false);
      setJobs([]);
      return;
    }

    const handleSearchJobs = async () => {
      setIsLoading(true);
      setIsFetchedApi(true);

      try {
        await asyncDelay(1000); // Just delay 1s to display spinner in real case will remove this code
        setJobs(await service.getJobsWithSearchTerm(debouncedSearchTerm));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearchJobs();
  }, [debouncedSearchTerm, service]);

  return {
    loading: isLoading,
    data: jobs,
    isFetchedApi,
    error,
  };
};

export default useSearchJobs;
