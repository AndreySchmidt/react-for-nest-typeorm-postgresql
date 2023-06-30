import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";

const TransactionTable: FC = () => {
  const { transactions } = useLoaderData() as IResponseTransactionLoader;
  return (
    <>
      <div className="mt-4 rounded-md bg-slate-800 px-4 py-3">
        <table className="w-full">
          <thead>
            <tr>
              <td className="font-bold">№</td>
              <td className="font-bold">Title</td>
              <td className="font-bold">Amount ($)</td>
              <td className="font-bold">Category</td>
              <td className="font-bold">Date</td>
              <td className="text-right">Action</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, idx) => (
              <tr key={idx}>
                <td className="font-bold">{idx + 1}</td>
                <td className="font-bold">{transaction.title}</td>
                <td className="font-bold">{transaction.amount} ($)</td>
                <td className="font-bold">{transaction.category.title}</td>
                <td className="font-bold">{transaction.createdAt}</td>
                <td className="text-right">
                  <button className="btn hover:btn-red ml-auto">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
