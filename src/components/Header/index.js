import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Space, Typography } from 'antd';
import { DownOutlined,  MenuFoldOutlined} from '@ant-design/icons';
// import { Menu } from "antd";

const Header = ({ onNavHover }) => {
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
        <ul style={{ backgroundColor: '#2F86CC', width: '100vw', textAlign: 'center', listStyleType: 'none', fontSize: '1.2rem'}}
        >
            {items.map((item) => (
            <li key={item.key} >
                <Link to={item.to}>{item.label}</Link>
            </li>
            ))}
        </ul>
    );

    return(
        <header style={{backgroundColor: '#2F86CC', width: '100vw', height: '3rem', transition: 'all 0.5s ease' }}>
            <div style={{ position: 'fixed', top: '0', left: '0', }}
            >
                <Dropdown overlay={menu} placement="bottomLeft">
                <Typography.Link
                    onMouseEnter={onNavHover}
                    onMouseLeave={onNavHover}
                >
                    <Space>
                    <MenuFoldOutlined style={{padding: '1rem', fontSize: '1.5rem', color: '#212529'}} />
                    </Space>
                </Typography.Link>
                </Dropdown>
            </div>
        </header>
    )

}


export default Header;