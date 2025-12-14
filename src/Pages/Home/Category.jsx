import Title from "../../Shared/Title";
import CategoryCard from "../../components/ui/CategoryCard";
import Mobile from "../../assets/icon/mobile.jpg";
import Charger from "../../assets/icon/charger.jpg";
import Cable from "../../assets/icon/cable.png";
import Bulb from "../../assets/icon/bulb.jpg";
import MultiPlug from "../../assets/icon/multi-plug.jpg";
import ExerciseBook from "../../assets/icon/exercise-book.jpg";
import Paper from "../../assets/icon/paper.png";
import Pen from "../../assets/icon/pen.jpg";

export default function Category() {
  return (
    <div className="text-center my-8 px-6 lg:px-0">
      <Title
        title="Featured Category"
        subtitle="Get Your Desired Best Selling Product from Featured Category!"
      ></Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 my-6">
        {/* <Link
          to="/products"
          className="w-48 flex justify-center items-center gap-3 mx-4 py-1.5 rounded-sm bg-gray-200 border-2 border-[#16a4eb] text-black hover:bg-[#16a4eb] hover:text-white"
        >
          <CategoryCard image={Mobile} category="Mobile" />
        </Link> */}
        <CategoryCard image={Mobile} category="Mobile" />
        <CategoryCard image={Charger} category="Charger" />
        <CategoryCard image={Cable} category="Cable" />
        <CategoryCard image={Bulb} category="Bulb" />
        <CategoryCard image={MultiPlug} category="Multi Plug" />
        <CategoryCard image={ExerciseBook} category="Exercise Book" />
        <CategoryCard image={Paper} category="Paper" />
        <CategoryCard image={Pen} category="Pen" />
      </div>
    </div>
  );
}
