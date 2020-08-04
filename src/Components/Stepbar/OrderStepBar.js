import React, {useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AOS from 'aos';

let itemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

function OrderStepBar() {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }, [])
  return (
    <div className="mother" data-aos="flip-left">
      <div className="motherwrapper">
        <div className="arrow-steps clfix">
          <NavItem path="new" title="Record Disaster" />
          <NavItem path="mortalityrecord" title="Mortality Record" />
          <NavItem path="assistance" title="Assistance" />
          <NavItem path="propertyloss" title="Property Loss" />
          <NavItem path="injuries" title="Total Injuries" />
          <NavItem path="uploadfiles" title="Add Photo / Video" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ path, title }) {
  const location = useLocation();
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/admin/disaster/${path}`)}
      style={itemStyle}
      className={`step ${
        location.pathname === `/admin/disaster/${path}` ? 'current' : ''
      }`}
    >
      {title}
    </div>
  );
}

export default OrderStepBar;
