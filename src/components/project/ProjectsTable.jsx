import { BsClipboard2Plus } from "react-icons/bs";
import truncateText from "../../utils/truncateText.js";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers.js";

function ProjectsTable({ filteredProjects }) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>تاریخ ایجاد</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{new Date(project.createdAt).toLocaleDateString("fa")}</td>
              <td>{new Date(project.deadline).toLocaleDateString("fa")}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag, index) => (
                    <span key={index + 1} className="badge badge--secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>
                <BsClipboard2Plus className="text-blue-600 text-xl cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
