import { Input } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div className="w-full mt-4">
      <form>
        <Input
          label="Recherche"
          color="default"
          radius="none"
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90",
              "placeholder:text-default-700/50",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-default-200/50",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "group-data-[focused=true]:bg-default-200/50",
              "!cursor-text",
            ],
          }}
          type="search"
          placeholder="Votre recherche..."
        />
      </form>
    </div>
  );
}
