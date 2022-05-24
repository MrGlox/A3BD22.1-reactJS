import "./Item.scss";

const Item = ({ title = "", status = false, children }) => {
  return (
    <li className="item">
      <h2 className="item__title">
        <span className={`item__dot ${status && "item__dot--green"}`}></span>
        {title}
      </h2>
      <div className="item__content">{children}</div>
    </li>
  );
};

export default Item;
