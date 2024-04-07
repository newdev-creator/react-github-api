import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NextUIProvider } from "@nextui-org/react";
import axios from "redaxios";

import "./App.css";

import logo from "./assets/images/logo-github.png";
import SearchBar from "./components/SearchBar";
import Message from "./components/Message";
import Result from "./components/ReposResults/Result";
import MoreResults from "./components/MoreResults";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [nbResults, setNbResults] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(results);

  const loadResults = () => {
    setLoading(true);

    axios
      .get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`
      )
      .then((response) => {
        setResults(response.data.items);
        setNbResults(response.data.total_count);
      })
      .catch((error) => {
        console.log(error);

        // TODO afficher un message d'erreur pour l'utilisateur
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchMoreResults = () => {
    setLoading(true);

    axios
      .get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${
          results.length / 9 + 1
        }&per_page=9`
      )
      .then((response) => {
        setResults([...results, ...response.data.items]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title = `Github search - ${search}`;
  }, [search]);

  return (
    <NextUIProvider>
      <div className="bg-gray-100 w-[800px] mx-auto p-4 min-h-screen">
        <Navbar>
          <NavbarBrand className="flex justify-center items-center">
            <img className="max-w-36" src={logo} alt="" />
          </NavbarBrand>
        </Navbar>

        <SearchBar
          search={search}
          setSearch={setSearch}
          loadResults={loadResults}
        />
        <Message nbResults={nbResults} />
        <Result results={results} />

        {results.length !== nbResults && (
        <MoreResults
          fetchMoreResults={fetchMoreResults}
        />
      )}
      </div>
    </NextUIProvider>
  );
}

export default App;
