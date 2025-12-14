

export default function CategoryCard({image, category}) {
  return (
    <div className="bg-white border-2 w-full h-24 rounded-sm shadow-md flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
      <img className="h-10" src={image} />
      <h3 className="text-lg font-medium mt-1">{category}</h3>
    </div>
  );
}
