import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";

export default function Repo({ name, description, owner }) {
  return (
    <Card>
      <CardBody>
        <p>{owner.avatar_url}</p>
        <p>{name}</p>
        <p>{owner.login}</p>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
}

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

Repo.defaultProps = {
  description: "",
};
