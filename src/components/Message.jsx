import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";

export default function Message({ nbResults }) {
  return (
    <Card className="mt-4" radius="none" shadow="none">
      <CardBody>
        <p>{nbResults} résultat(s).</p>
      </CardBody>
    </Card>
  );
}

Message.propTypes = {
  nbResults: PropTypes.number.isRequired,
};
