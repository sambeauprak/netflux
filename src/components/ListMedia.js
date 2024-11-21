import "../assets/ListMedia.css";

function ListMedia(props) {
  return (
    <div className="listMedia">
      <h3 className="listMedia__header">Programmes originaux Netflix</h3>
      <div className="listMedia__items">
        {props.items &&
          props.items.map((item) => {
            return <img src={item} className="listMedia__image" />;
          })}
      </div>
    </div>
  );
}

export default ListMedia;
