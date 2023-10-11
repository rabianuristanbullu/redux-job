import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filteredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
      state.initialized = true;
    },
    handleInputChange: (state, action) => {
      const filteredByQuery = state.jobs.filter((job) => {
        const query = action.payload.toLowerCase();
        const selectedJob = job.company.toLowerCase();
        return selectedJob.includes(query);
      });
      state.filteredJobs = filteredByQuery;
    },

    handleStatusChange: (state, action) => {
      const filteredByStatus = state.jobs.filter(
        (job) => job.status === action.payload
      );
      state.filteredJobs = filteredByStatus;
    },
    handleSortChange: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.filteredJobs.sort((a, b) => {
            if (a.company < b.company) return -1;
            if (a.company > b.company) return 1;

            return 0;
          });
          break;

        case "z-a":
          state.filteredJobs.sort((a, b) => {
            if (a.company < b.company) return 1;
            if (a.company > b.company) return -1;

            return 0;
          });
          break;

        case "Önce Yeni":
          state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;

        case "Önce Eski":
          state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date))
            .reverse();
          break;

        default:
          break;
      }
    },
    handleReset: (state) => {
      state.filteredJobs = state.jobs;
    },
  },
});

export const {
  setJobs,
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} = jobSlice.actions;
export default jobSlice.reducer;
