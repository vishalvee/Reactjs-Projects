import BgFrame from "../assets/BgFrame.png";
import Mailbox from "../assets/Mailbox.png";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-box">
          <img src={Mailbox} alt="gfg" srcset="" id="mail" />
          <img src={BgFrame} alt="gfg" srcset="" id="bg-box" />
          <h1 id="footerline">We hold the conviction that excellent</h1>

            </div>
      </footer>
    </>
  );
};
export default Footer;
