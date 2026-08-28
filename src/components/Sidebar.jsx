import { SideNavList } from "./SideNavList";

const Sidebar = () => {
  return (
    <aside className='sticky top-0 h-screen w-1/7 flex flex-col items-center bg-secondary text-text-main border-r-2 border-border'>
      <p className='basis-15 py-3 w-full text-text-muted text-center font-semibold border-b border-border-muted bg-main text-xl'>
        Know Weather <br /> @ Your Place!
      </p>
      <nav className='w-full text-center bg-secondary'>
        <ul className='flex flex-col bg-primary text-text-muted text-xl font-semibold'>
          <SideNavList to='/dashboard'>Dashboard</SideNavList>
          <SideNavList to='/forecast'>Forecast</SideNavList>
          <SideNavList to='/places'>Places</SideNavList>
          <SideNavList to='/settings'>Settings</SideNavList>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
