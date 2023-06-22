const Card = (props) => {
    return (
    <div className="card col-lg-3 col-md-6">
      <div className="card-body">hi {props.name}</div>
    </div>
  );
  
};
export default Card;
