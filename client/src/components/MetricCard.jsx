export const MetricCard = ({ title, value, color, Icon }) => {
    return (
      <div className="relative p-6 text-center rounded-lg bg-gray-800/20">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className={`text-2xl ${color}`}>{value}</p>
        <Icon
          className="absolute transform text-gray-700/20 bottom-4 right-4 rotate-12"
          size={60}
        />
      </div>
    );
  };