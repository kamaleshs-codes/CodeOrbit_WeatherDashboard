import { SideNavList } from "./SideNavList";
import { FiGrid, FiCalendar, FiMapPin, FiSettings } from "react-icons/fi";
import weatherImg from "../assets/weather_imgheader.png";

const Sidebar = () => {
  return (
    <aside className='sticky top-0 h-screen w-1/7 flex flex-col items-center bg-secondary text-text-main border-r-2 border-border'>
        <img
          src={weatherImg}
          alt='Weather Dashboard'
          className='w-full h-52 object-cover object-top'
        />
      <nav className='w-full text-center bg-secondary'>
        <ul className='flex flex-col bg-primary text-text-muted text-xl font-semibold'>
          <SideNavList to='/dashboard' icon={FiGrid}>
            Dashboard
          </SideNavList>
          <SideNavList to='/forecast' icon={FiCalendar}>
            Forecast
          </SideNavList>
          <SideNavList to='/places' icon={FiMapPin}>
            Places
          </SideNavList>
          <SideNavList to='/settings' icon={FiSettings}>
            Settings
          </SideNavList>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
