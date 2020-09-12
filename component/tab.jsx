import React from 'react';

const Tab = ({link, isSelected, icon}) => {
    const selected = isSelected ? "tab-bar__tab--selected" : ""
    const tabClassName = `tab-bar__tab ${selected}`;
    return (
        <a href={link} className={tabClassName}>
            <img src={icon} alt="" />
        </a>
    );
}

export default Tab;