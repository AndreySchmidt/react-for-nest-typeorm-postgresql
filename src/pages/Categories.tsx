import { FC, useState } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Form } from "react-router-dom";
import { CategoryModal } from "../components/CategoryModal";
import { instance } from "../api/axios.api";

export const categoriesAction = async ({ request }: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const title = { title: formData.get("title") };

      await instance.post("/categories", { title });
      return null;
    }
    case "PATCH": {
      return null;
    }
    case "DELETE": {
      return null;
    }
  }
};

const Categories: FC = () => {
  const [visibleMadal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <div className="mt-10 rounded-md bg-slate-800 p-4">
        <h1>Your categories:</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <div className="group relative flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2">
            title
            <div className="absolute bottom-0 left-0 right-0 top-0 hidden items-center justify-between rounded-lg bg-black/90 px-3 group-hover:flex">
              <button>
                <AiFillEdit />
              </button>
              <Form className="flex" method="delete" action="/categories">
                <input type="hidden" value="Category Id" />
                <button type="submit">
                  <AiFillCloseCircle />
                </button>
              </Form>
            </div>
          </div>
        </div>

        <button
          onClick={() => setVisibleModal(true)}
          className="mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Create new category</span>
        </button>
      </div>

      {visibleMadal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </>
  );
};

export default Categories;
