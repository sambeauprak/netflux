import "../assets/Categories.css";

import caretDown from "../assets/images/caret-down.svg";
import { duplicateAndShuffle } from "../utils/array";

function ListMedia() {
  let items = [
    "Comédie",
    "Action",
    "Drame",
    "Sci-Fi",
    "Romance",
    "Thriller",
    "Émissions",
  ];

  items = duplicateAndShuffle(items);
  items = duplicateAndShuffle(items);
  items = duplicateAndShuffle(items);
  return (
    <div className="categories">
      <h3>Catégories</h3>
      <div className="categories__items">
        {items &&
          items.map((item) => {
            return (
              <div className="category">
                {item}
                <img src={caretDown} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListMedia;
