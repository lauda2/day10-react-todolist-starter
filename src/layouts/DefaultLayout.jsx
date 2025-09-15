import { NavLink, Outlet } from "react-router";
import { Menu } from 'antd';

function DefaultLayout() {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="done">
          <NavLink to="/done">Done List</NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">About Us</NavLink>
        </Menu.Item>
      </Menu>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;