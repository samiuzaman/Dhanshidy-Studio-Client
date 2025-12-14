const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Title;
