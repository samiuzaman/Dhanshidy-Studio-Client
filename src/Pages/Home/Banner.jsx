import { Button } from "../../components/ui/button";
import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full lg:h-[95vh] py-3">
      <img className="w-full h-full" src={BannerImg} />
    </div>
  );
};

export default Banner;
