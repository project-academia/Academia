const ActivityTable = () => (
    <div className="mt-6 bg-white rounded-lg shadow-md p-5">
      <h3 className="text-lg font-bold mb-4">Activity</h3>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill("")
            .map((_, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="p-2 border">Attended Lecture at 2:30</td>
                <td className="p-2 border">Apr {23 - idx}, 2021</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
  
  export default ActivityTable;
