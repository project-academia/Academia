import Card from "./Cards";
import { FiActivity, FiBell, FiClipboard, FiCalendar } from "react-icons/fi";

const Overview = () => {
  const cardsData = [
    { title: "Attendance", value: "75%", color: "bg-blue-500", icon: <FiActivity /> },
    { title: "Notices", value: 256, color: "bg-green-500", icon: <FiBell /> },
    { title: "Assignments", value: 256, color: "bg-yellow-500", icon: <FiClipboard /> },
    { title: "Planner", value: 256, color: "bg-orange-500", icon: <FiCalendar /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          color={card.color}
          
        />
      ))}
    </div>
  );
};

export default Overview;

  