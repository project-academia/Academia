interface CardProps {
    title: string;
    value: string | number;
    color: string;
    
  }
  
  const Card: React.FC<CardProps> = ({ title, value, color }) => (
    <div className={`p-5 text-white rounded-lg shadow-md ${color}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
  
  export default Card;
  