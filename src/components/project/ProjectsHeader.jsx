import { projects } from "../../../data/projects";
import Filter from "../ui/Filter";
import Select from "../ui/Select";

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSE",
  },
];
const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "created_desc",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "created_asc",
  },
  {
    label: "قیمت (صعودی)",
    value: "budget_asc",
  },
  {
    label: "قیمت (نزولی)",
    value: "budget_desc",
  },
  {
    label: "ددلاین (قدیمی ترین)",
    value: "deadline_asc",
  },
  {
    label: "ددلاین (جدید ترین)",
    value: "deadline_desc",
  },
];
const categories = projects.map((p) => {
  return {
    label: p.category.title,
    value: p.category.englishTitle,
  };
});
const transformedCategories = [
  {
    label: "دسته بندی (همه)",
    value: "ALL",
  },
  ...categories,
];

function ProjectsHeader({
  status,
  onChangeStatuse,
  sort,
  onChangeSort,
  category,
  onChangeCategory,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      {/* filter section */}
      <Filter
        options={statusOptions}
        currentFilter={status}
        onChange={onChangeStatuse}
      />
      {/* select sort */}
      <Select options={sortOptions} value={sort} onChange={onChangeSort} />
      {/* select category */}
      <Select
        options={transformedCategories}
        value={category}
        onChange={onChangeCategory}
      />
    </div>
  );
}

export default ProjectsHeader;
