import "../assets/ListItems.css";

function ListItems({ title, items }) {
  return (
    <div className="list">
      <h2 className="list__title">{title}</h2>
      <div className="list__items">
        {items &&
          items.map((item) => {
            {
              return <img src={item} />;
            }
          })}
      </div>
    </div>
  );
}

export default ListItems;
