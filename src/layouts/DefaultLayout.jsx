import { NavLink, Outlet } from "react-router";
import { Menu } from 'antd';

function DefaultLayout() {
  const menuItems = [
    { key: 'home', label: <NavLink to="/">Home</NavLink> },
    { key: 'done', label: <NavLink to="/done">Done List</NavLink> },
    { key: 'about', label: <NavLink to="/about">About Us</NavLink> },
  ];
  return (
    <div>
      <Menu mode="horizontal" items={menuItems} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;