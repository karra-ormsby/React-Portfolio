import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Space, Typography } from 'antd';
import { DownOutlined,  MenuFoldOutlined} from '@ant-design/icons';
import './Navbar.css'

const Navbar = ({ onNavHover }) => {
    const items = [
    {
        key: '1',
        label: 'About Me',
        to: '/',
    },
    {
        key: '2',
        label: 'Contact',
        to: '/Contact',
    },
    {
        key: '3',
        label: 'Portfolio',
        to: '/Portfolio',
    },
     {
        key: '4',
        label: 'Resume',
        to: '/Resume',
    },
    ];

    const menu = (
        <ul className="navLinks">
            {items.map((item) => (
            <li className="navItem" key={item.key} >
                <Link to={item.to}>{item.label}</Link>
            </li>
            ))}
        </ul>
    );

    return(
        <div className="navbar">
            <Dropdown overlay={menu} placement="bottomLeft" >
            <Typography.Link
                onMouseEnter={onNavHover}
                onMouseLeave={onNavHover}
            >
                <Space>
                <MenuFoldOutlined className="menuIcon"/>
                </Space>
            </Typography.Link>
            </Dropdown>
        </div>
    )

}


export default Navbar;