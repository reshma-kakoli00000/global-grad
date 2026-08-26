function StatusBadge({ status }) {
  const styles = {
    pending: "bg-yellow-100 text-yellow-700",
    running: "bg-blue-100 text-blue-700",
    finished: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
  };

  const normalizedStatus = status?.toLowerCase();

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
        styles[normalizedStatus] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default function JobTable({ jobs }) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="bg-white border rounded-xl p-8 text-center text-gray-500">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="text-lg font-semibold">
          All Jobs
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3">ID</th>
              <th className="text-left px-5 py-3">Job Type</th>
              <th className="text-left px-5 py-3">Sources</th>
              <th className="text-left px-5 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {jobs.sort((a, b) => b.id - a.id).map((job) => (
              <tr
                key={job.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-5 py-4">
                  #{job.id}
                </td>

                <td className="px-5 py-4">
                  {job.type}
                </td>

                <td className="px-5 py-4">
                  {job.payload?.sources?.join(", ") || "-"}
                </td>

                <td className="px-5 py-4">
                  <StatusBadge status={job.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}