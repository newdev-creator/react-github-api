import PropTypes from "prop-types";
import { Card, CardBody, Image, CardHeader, Link } from "@nextui-org/react";

export default function Repo({ name, description, owner, html_url }) {
  return (
    <Card className="p-2">
      <Image src={owner.avatar_url} />
      <CardHeader className="flex flex-col">
        <h4 className="font-bold text-large">{name}</h4>
        <p className="text-slate-600 text-xs">{owner.login}</p>
      </CardHeader>
      <CardBody>
        <p className="mb-4">{description}</p>
        <Link isExternal href={html_url} showAnchorIcon>
          External Link
        </Link>
      </CardBody>
    </Card>
  );
}

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

Repo.defaultProps = {
  description: "",
};
