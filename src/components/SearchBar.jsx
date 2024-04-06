import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

export default function SearchBar({ search, setSearch, loadResults }) {
  const [typingTimeout, setTypingTimeout] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    loadResults();
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      loadResults();
    }, 300);

    setTypingTimeout(timeoutId);
  };

  return (
    <div className="w-full mt-4">
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          label="Recherche"
          value={search}
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

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  loadResults: PropTypes.func.isRequired,
};
