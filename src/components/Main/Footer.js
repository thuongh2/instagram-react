import "../../styles/footer.scss";

function Footer(props) {
  const size = props.size;
  return (
    <div className={`footer ${size}`}>
      <ul className="links">
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Top Accounts</li>
        <li>Hashtags</li>
        <li>Language</li>
      </ul>
      <div className="copyright">@ 2020 INSTAGRAM FROM FACEBOOK</div>
    </div>
  );
}

export default Footer;
