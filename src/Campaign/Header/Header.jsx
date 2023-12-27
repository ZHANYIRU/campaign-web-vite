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
        <p>候選人主張</p>
        <p>最新活動</p>
        <p>政策議題</p>
        <p>民眾服務信箱</p>
        <p>小額捐款</p>
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
