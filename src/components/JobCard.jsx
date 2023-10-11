import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="head">
        <div className="letter">
          <p>{job.company[0]}</p>
        </div>
        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>

      <div className="body">
        <div className="field">
          <img src="/assets/map.png" />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <img src="/assets/calendar.png" />
          <p>{job.date}</p>
        </div>
        <div className="field">
          <img src="/assets/bag.png" />
          <p>{job.type}</p>
        </div>
        <div className="status">
          <p className={job.status}>{job.status}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
