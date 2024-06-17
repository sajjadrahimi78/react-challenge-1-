// ---------------------------- imports ----------------------------
import { useState } from "react";
import ProjectsHeader from "./components/project/ProjectsHeader";
import ProjectsTable from "./components/project/ProjectsTable";
import { projects } from "../data/projects";
import ButtenToggle from "./components/ButtenToggle";

function App() {
  // ---------------------------- states ----------------------------
  const [showButton, setShowButton] = useState(true);
  const [status, setStatus] = useState("ALL");
  const [sort, setSort] = useState("created_desc");
  const [category, setCategory] = useState("ALL");

  // ---------------------------- handlers ----------------------------
  function handleChangeStatus(value) {
    setStatus(value);
  }
  function handleChangeSort(e) {
    setSort(e.target.value);
  }
  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }

  const handleSort = (a, b) => {
    switch (sort) {
      case "created_desc": // latest
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "created_asc": // earliest
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "budget_desc":
        return b.budget - a.budget;
        break;
      case "budget_asc":
        return a.budget - b.budget;
        break;
      case "deadline_desc":
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
        break;
      case "deadline_asc":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        break;

      default:
        throw new Error(deadline);
        break;
    }
  };

  // ---------------------------- filter & sort projects ----------------------------
  const filteredAndSortProjects = projects
    .filter((p) => (status === "ALL" ? true : p.status === status))
    .filter((p) =>
      category === "ALL" ? true : p.category.englishTitle === category
    )
    .sort(handleSort);

  return (
    <div className="flex justify-center mt-5 p-4">
      <div className="max-w-screen-lg w-full">
        {showButton ? (
          <div>
            <Title />
            <ButtenToggle
              setShowButton={setShowButton}
              showButton={showButton}
            />
          </div>
        ) : (
          <div>
            <ProjectsHeader
              status={status}
              onChangeStatuse={handleChangeStatus}
              sort={sort}
              onChangeSort={handleChangeSort}
              category={category}
              onChangeCategory={handleChangeCategory}
            />
            <ProjectsTable filteredProjects={filteredAndSortProjects} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

export function Title() {
  return (
    <h1 className="text-start font-bold text-3xl text-gray-400">
      لیست پروژه ها
    </h1>
  );
}
