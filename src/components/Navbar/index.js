import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Space, Typography } from 'antd';
import { DownOutlined,  MenuFoldOutlined} from '@ant-design/icons';
import './Navbar.css'
import { HashLink } from 'react-router-hash-link';

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

// const Navbar = () => {
//     <HashLink smooth to='/#about' > About Me </HashLink>

// };

export default Navbar;