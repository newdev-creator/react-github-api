import { Card } from "@nextui-org/react";
import Repo from "./Repo";

export default function Result() {
  return (
    <Card className="mt-4" radius="none" shadow="none">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>
    </Card>
  );
}
