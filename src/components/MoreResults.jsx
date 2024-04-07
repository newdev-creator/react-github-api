import PropTypes from "prop-types";
import { Card, CardBody, Button } from '@nextui-org/react';

export default function MoreResults({ fetchMoreResults }) {
  return (
    <Card className="mt-4">
      <CardBody>
        <Button onClick={fetchMoreResults} color="default">Plus de résultats</Button>
      </CardBody>
    </Card>
  );
}

MoreResults.propTypes = {
  fetchMoreResults: PropTypes.func.isRequired,
};
