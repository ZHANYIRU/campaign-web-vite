import FacebookIcon from "@/assets/images/FacebookIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import PajamasIcon from "@/assets/images/PajamasIcon";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer_container">
      <h2>競選總部</h2>
      <div className="material">
        <div className="area">
          <p>地址：台灣喵星區</p>
          <p>毛茸茸大道88號，喵喵大樓3樓</p>
        </div>
        <div className="phone">
          <p>電話：(02) 888-5678</p>
          <p>電子郵件地址: game665987@gmail.com</p>
        </div>
        <div className="icon">
          <FacebookIcon />
          <InstagramIcon />
          <PajamasIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
