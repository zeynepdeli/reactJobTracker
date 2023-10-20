import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setError, addJob } from "../redux/jobSlice";
import Filter from "../components/Filter";

const JobList = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  useEffect(() => {
    axios
      .get("http://localhost:3070/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, []);

  console.log(state);

  return (
    <div>
      <Filter />

      <h3 className="job-count">
        Bulunan ({state.mainJobs.length}) iş arasından ({""}
        {state.jobs.length}) tanesini görüntülüyorsunuz
      </h3>

      <section className="list-section">
        {/* Apiden cevap bekleniyorsa */}
        {!state.initialized && <p>Yükleniyor..</p>}
        {/* Apiden cevap gediyse ve herhangi bir hata yoksa */}

        {state.initialized && !state.isError ? (
          <>
            {state.jobs.map((job) => (
              <Card key={job.id} job={job} />
            ))}
          </>
        ) : (
          <p>Üzgünüz Bir Hata Oluştu...</p>
        )}
      </section>
    </div>
  );
};

export default JobList;
