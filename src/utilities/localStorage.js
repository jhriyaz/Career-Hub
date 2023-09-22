import toast from 'react-hot-toast';
let getAppliedJobs = () => {
  let job = localStorage.getItem("jobs");
  let appliedJobs = job ? JSON.parse(job) : [];
  
  return appliedJobs;
};
let setAppliedJobs = (id) => {
  let previousJobs = getAppliedJobs();
  if (previousJobs.find((pid) => pid === id)) {
    return toast.error('Already applied');
  }
  let newData = JSON.stringify([...previousJobs, id]);
  localStorage.setItem("jobs", newData);
  toast.success('Applied');
};
export { getAppliedJobs, setAppliedJobs };
