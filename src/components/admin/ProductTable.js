import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductTable = ({ data, items, showPage, setShowPage }) => {
  const deleteCategory = (deleteData) => {
    console.log("delete product ", deleteData);
  };

  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-50 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                SL
              </th>
              <th className="p-3 w-[200px]">Banar</th>
              <th className="p-3 w-[350px]">Name</th>
              <th className="p-3 w-[200px]">Category</th>
              <th className="p-3 w-[100px]">Price</th>
              <th className="p-3 w-[100px]">Discounut</th>
              <th className="p-3 w-[200px]">Create DATE</th>
              <th className="p-3">DELETE</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {data?.data?.map((item, i) => (
              <tr
                key={item?.id}
                className="text-left bg-white border-b border-opacity-20 border-gray-700 "
              >
                <td className="px-3 py-2 text-left">
                  <span>{(showPage - 1) * 5 + i + 1}</span>
                </td>

                <td className="px-3 py-2">
                  <Image
                    className="w-[100px] h-[100px]"
                    src={item?.images[0]?.secure_url}
                    width={200}
                    height={200}
                    alt={item?.name}
                  />
                </td>

                <td className="px-3 py-2">
                  <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100 rounded-full mx-1 capitalize">
                    {item?.name}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100 rounded-full mx-1 capitalize">
                    {item?.category?.tittle}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100 rounded-full mx-1 capitalize">
                    {item?.price}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100 rounded-full mx-1 capitalize">
                    {item?.discount}%
                  </span>
                </td>

                <td className="px-3 py-2">
                  <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100 rounded-full mx-1 capitalize">
                    {new Date(item?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <div className="flex justify-center items-center">
                    <button
                      className="text-lg mr-2 font-normal text-gray-400 hover:text-red-600 duration-300"
                      onClick={() => deleteCategory(item)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="rounded-b-md text-xs bg-white shadow-md border border-t-none font-semibold text-gray-500 ">
          <div className="p-4  flex  justify-between items-center col-span-4">
            <p>
              Showing {showPage <= 1 ? 1 : (showPage - 1) * 5} -{" "}
              {showPage <= 1
                ? data?.meta?.total >= 6
                  ? 5
                  : data?.meta?.total
                : showPage * 5 > data?.meta?.total
                ? data?.meta?.total
                : showPage * 5}{" "}
              of {data?.meta?.total}
            </p>

            <div className="flex items-center">
              <button
                disabled={showPage === 1}
                className={`hover:bg-gray-200
                duration-300 rounded-md mx-1`}
                onClick={() => setShowPage(showPage - 1)}
              >
                <AiOutlineLeft size={20} />
              </button>

              <button
                className={`p-2 ${
                  showPage === 1
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-black"
                }  duration-300 rounded-md mx-1 hover:bg-red-600/40 hover:text-white`}
                onClick={() => setShowPage(showPage === 1 ? 1 : showPage - 1)}
              >
                {showPage === 1 ? 1 : showPage - 1}
              </button>

              {showPage > 1 && (
                <button
                  className={`p-2 ${
                    showPage > 1
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-black"
                  }  duration-300 rounded-md mx-1 hover:bg-red-600 hover:text-white`}
                  onClick={() => setShowPage(showPage === 1 ? 2 : showPage)}
                >
                  {showPage === 1 ? 2 : showPage}
                </button>
              )}

              {showPage > 2 && (
                <button
                  className={`p-2 bg-gray-200 text-black duration-300 rounded-md mx-1 hover:bg-red-600/40 hover:text-white`}
                  onClick={() => setShowPage(showPage === 1 ? 3 : showPage + 1)}
                  disabled={showPage === Math.ceil(data?.meta?.total / 5)}
                >
                  {showPage === 1 ? 3 : showPage + 1}
                </button>
              )}

              <span>-</span>

              <button
                disabled={showPage === Math.ceil(data?.meta?.total / 5)}
                onClick={() => setShowPage(showPage + 1)}
                className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1"
              >
                {Math.ceil(data?.meta?.page + 1)}
              </button>

              <button
                disabled={showPage === Math.ceil(data?.meta?.total / 5)}
                className={`hover:bg-gray-200
               duration-300 rounded-md mx-1`}
                onClick={() => setShowPage(showPage + 1)}
              >
                <AiOutlineRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
