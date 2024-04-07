import PropTypes from "prop-types";
import { Card, CardBody, Image, CardHeader } from "@nextui-org/react";

export default function Repo({ name, description, owner }) {
  return (
    <Card className="p-2">
    <Image src={owner.avatar_url} />
    <CardHeader className="flex flex-col">
    <h4 className="font-bold text-large">{name}</h4>
    <p className="text-slate-600 text-xs">{owner.login}</p>
    </CardHeader>
      <CardBody>
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
