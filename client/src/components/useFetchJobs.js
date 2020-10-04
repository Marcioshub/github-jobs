import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchJobs(description, location, fulltime) {
  const [jobs, setJobs] = useState([]);
  const [empty, setEmpty] = useState(false);

  async function getJobs(description, location, fulltime) {
    const response = await axios.post("/api/github", {
      location,
      description,
      fulltime,
    });

    if (response.data.length > 0) {
      setJobs(response.data);
      setEmpty(false);
    } else {
      setJobs([]);
      setEmpty(true);
    }
  }

  useEffect(() => {
    getJobs(description, location, fulltime);
  }, [description, location, fulltime]);

  return {
    jobs,
    empty,
    getJobs,
  };
}
