import HeaderIcon from "@/assets/images/HeaderIcon";
import FacebookIcon from "@/assets/images/FacebookIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import ShareIcon from "@/assets/images/ShareIcon";
import ChatBubble from "@/assets/images/ChatBubble";
import "./Header.scss";
function Header() {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <HeaderIcon />
        <p className="campaign_number">
          2024立委<span>3</span>號參選人
        </p>
      </div>
      <div className="nav_header">
        <ChatBubble />
        <a href="#section">候選人主張</a>
        <a href="#activity">最新活動</a>
        <a href="#policy">政策議題</a>
        <a href="#opinion">民眾服務信箱</a>
        <a href="#support">小額捐款</a>
      </div>
      <div className="nav_community">
        <FacebookIcon />
        <InstagramIcon />
        <ShareIcon />
      </div>
    </div>
  );
}

export default Header;
