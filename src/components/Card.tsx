// {name, job} = { name: string, job: string }
// De-structuring props in the function parameter
const Card = ({ name, job, data }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{job}</div>
      {data(name + " is showns")}
    </div>
  );
};

export default Card;
