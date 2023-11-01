import React, { useState } from "react";
import { Dropdown, Space, Typography } from 'antd';
import { MenuFoldOutlined} from '@ant-design/icons';
import './Navbar.css'
import { HashLink } from 'react-router-hash-link';
import { useTheme } from "../../utils/ThemeContext";

const Navbar = ({ onNavHover }) => {
    const items = [
        {
            key: '1',
            label: 'About Me',
            to: '/#about',
        },
        {
            key: '2',
            label: 'Portfolio',
            to: '/#portfolio',
        },
        {
            key: '3',
            label: 'Resume',
            to: '/#resume',
        },
        {
            key: '4',
            label: 'Contact',
            to: '/#contact',
        }
    ];

    const menu = (
        <ul className="navLinks">
            {items.map((item) => (
            <li className="navItem" key={item.key} >
                <HashLink smooth to={item.to}>{item.label}</HashLink>
            </li>
            ))}
        </ul>
    );

    const { darkTheme, toggleTheme } = useTheme();

    

    return(
        <div id="navbar" >
            <Dropdown overlay={menu} placement="bottomLeft" >
            <Typography.Link
                onMouseEnter={onNavHover}
                onMouseLeave={onNavHover}
            >
                <Space>
                <MenuFoldOutlined className={`menuIcon ${darkTheme ? 'dark' : 'light'}`}/>
                </Space>
            </Typography.Link>
            </Dropdown>
        </div>
    )

}

export default Navbar;