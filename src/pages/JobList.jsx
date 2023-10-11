import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../app/jobSlice";
import JobCard from "../components/JobCard";
import { toast } from "react-toastify";
import Filter from "../components/Filter";

const JobList = () => {
  const state = useSelector((state) => state.jobState);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3004/jobs")
      .then((res) => {
        dispatch(setJobs(res.data));
      })
      .catch((err) => {
        toast.warn("Veri Çekme Sırasında Bir Hata ile Karşılaştım..");
      });
  }, []);

  return (
    <>
      <Filter />
      <h3 className="job-count">{state.filteredJobs.length} adet İş Bulundu</h3>
      <section className="list-section">
        {!state.initialized ? (
          <p>Loading...</p>
        ) : (
          state.filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </section>
    </>
  );
};

export default JobList;
