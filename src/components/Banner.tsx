import BannerImg from "../assets/banner.jpg";
import "./styles/Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="" />
    </div>
  );
};

export default Banner;
