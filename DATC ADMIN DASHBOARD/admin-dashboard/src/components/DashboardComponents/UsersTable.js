import React from "react";

const UserTable = ({ users }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="shadow-md rounded-lg">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Status
                </th>
                <th scope="col" className="px-5 py-3 bg-blue-600"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.email}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{user.role}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{user.status}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => alert("Edit user")}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
