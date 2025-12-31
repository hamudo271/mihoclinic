const SubVisual = ({ title, backgroundImage }) => {
  return (
    <div className="sub-visual">
      <div className="sub-bg">
        <div 
          className="bg wow fadeIn" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
      <div className="sub-visual__wrapper container">
        <p className="sub-visual__title wow fadeInUp">{title}</p>
        <div className="depth-nav wow fadeInUp" data-wow-delay="0.1s">
          <ul className="sub-nav__wrap sub-nav-clone--depth2"></ul>
        </div>
      </div>
    </div>
  );
};

export default SubVisual;
