import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDatabase,
    faTable, faFolder, faChevronLeft, faChevronRight, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import {analyticsRoute, connectionsRoute, tablesRoute, filesRoute, userListRoute} from "../../../utils/routes";


const SideNavigation = ({ isExpanded, setIsExpanded }) => {
    const menuItems = [
        { icon: faChartLine, text: 'Analytics', href: analyticsRoute },
        { icon: faDatabase, text: 'Connections', href: connectionsRoute },
        { icon: faTable, text: 'Tables', href: tablesRoute },
        { icon: faFolder, text: 'Files', href: filesRoute },
        { icon: faUserGroup, text: 'User', href: userListRoute },
    ];

    return (
        <nav className={`bg-gray-100 text-white fixed h-full left-0 top-0 flex flex-col transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute -right-3 top-20 bg-gray-100 text-white p-1 rounded-full shadow-lg hover:bg-gray-200 transition-colors z-10"
                aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
            >
                <FontAwesomeIcon
                    icon={isExpanded ? faChevronLeft : faChevronRight}
                    className="w-4 h-4 text-gray-500"
                />
            </button>
            <div className="flex-1 flex items-center">
                <div className="w-full px-4">
                    <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className={`flex items-center px-4 py-2 text-gray-500 hover:bg-gray-200 rounded transition-colors ${!isExpanded ? 'justify-center' : ''}`}
                                >
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className={`w-5 h-5 ${isExpanded ? 'mr-3' : ''} text-gray-500`}
                                    />
                                    {isExpanded && <span>{item.text}</span>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`absolute right-0 top-0 h-full bg-gray-200 transition-all duration-300 z-0 ${isExpanded ? 'w-0.5' : 'w-0.5'}`}></div>
        </nav>
    );
};

export default SideNavigation;