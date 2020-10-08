import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchJobs(description, location, fulltime) {
  const [jobs, setJobs] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getJobs(description, location, fulltime) {
    setLoading(true);
    const response = await axios.post("/api/github", {
      location,
      description,
      fulltime,
    });

    if (response.data.length > 0) {
      setJobs(response.data);
      setEmpty(false);
      setLoading(false);
    } else {
      setJobs([]);
      setEmpty(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getJobs(description, location, fulltime);
  }, [description, location, fulltime]);

  return {
    jobs,
    empty,
    loading,
    getJobs,
  };
}
