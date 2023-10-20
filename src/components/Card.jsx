const Card = ({ job }) => {
  const getClassName = () => {
    switch (job.status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddeldi":
        return "rejected";
      case "Mülakat":
        return "interview";

      default:
        return "default";
    }
  };

  return (
    <div className="card">
      {/* {üst kısım} */}
      <div className="head">
        <div className="letter">
          <p>{job.company[0]}</p>
        </div>

        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>

      {/* {alt kısım} */}
      <div className="body">
        <div className="field">
          <img src="./images/map.png" alt="" />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <img src="./images/bag.png" alt="" />
          <p>{job.type}</p>
        </div>
        <div className="field">
          <img src="./images/calendar.png" alt="" />
          <p>{job.date}</p>
        </div>
        <div className="status">
          <span className={getClassName()}>{job.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
