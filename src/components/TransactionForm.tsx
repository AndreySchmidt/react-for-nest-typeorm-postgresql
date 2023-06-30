import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";
import { CategoryModal } from "./CategoryModal";

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader;
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form className="grid gap-2" method="post" action="/transactions">
        <label className="grid" htmlFor="title">
          <span>title</span>
          <input
            type="text"
            className="input border-slate-700"
            placeholder="title"
            name="title"
            required
          />
        </label>
        <label className="grid" htmlFor="amount">
          <span>amount</span>
          <input
            type="number"
            className="input border-slate-700"
            placeholder="amount"
            name="amount"
            required
          />
        </label>

        {categories.length ? (
          <label htmlFor="category" className="grid">
            <span>Category</span>
            <select name="category" className="input border-slate-700" required>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h1 className="mt-1 text-red-300">No categories</h1>
        )}

        {/* <label htmlFor="category" className="grid">
          <span>Category</span>
          <select name="category" className="input border-slate-700" required>
            <option value="1">Salary</option>
            <option value="2">Gift</option>
            <option value="3">Grocery</option>
          </select>
        </label> */}

        <button
          onClick={() => setVisibleModal(true)}
          className="flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Manage categories:</span>
        </button>

        <div className="flex items-center gap-4">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"income"}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"expense"}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

        <button className="btn btn-green mt-2 max-w-fit">Submit</button>
      </Form>

      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </div>
  );
};

export default TransactionForm;
