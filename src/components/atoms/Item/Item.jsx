import { Link } from "react-router-dom";
import "./Item.scss";

import { slugify } from "utils";

const Item = ({ title = "", status = false, children }) => {
  return (
    <li className="item">
      <h2 className="item__title">
        <span className={`item__dot ${status && "item__dot--green"}`}></span>
        <Link to={`/apparts/${slugify(title)}`}>{title}</Link>
      </h2>
      <div className="item__content">{children}</div>
    </li>
  );
};

export default Item;
