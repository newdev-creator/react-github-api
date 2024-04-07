import PropTypes from "prop-types";
import { Card } from "@nextui-org/react";
import Repo from "./Repo";

export default function Result({ results }) {
  return (
    <Card className="mt-4" radius="none" shadow="none">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
        {results.map((item) => (
          <Repo key={item.id} {...item} />
        ))}
      </div>
    </Card>
  );
}

Result.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
