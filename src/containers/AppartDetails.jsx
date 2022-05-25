import { useParams } from "react-router-dom";
import data from "data.json";

import "components/atoms/Item/Item.scss";
import { slugify } from "utils";

const AppartDetails = () => {
  const { appartSlug } = useParams();

  const appart = data.filter(
    (element) => slugify(element.title) === appartSlug
  );

  console.log(appart);

  if (appart.length < 1) return <div>Appart not found</div>;

  return (
    <div>
      <h1>
        {appart[0].title}
        <span
          className={`item__dot ${appart[0].status && "item__dot--green"}`}
        ></span>
      </h1>
      <p>{appart[0].description}</p>
    </div>
  );
};

export default AppartDetails;
