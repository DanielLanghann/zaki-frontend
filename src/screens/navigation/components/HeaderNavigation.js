import React from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {handleLogout} from "../handler/logoutHandler";

const HeaderNavigation = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        handleLogout(dispatch);
    }

    return (
        <header className="bg-gray-800 text-white py-4 shadow-md fixed w-full top-0 z-10 h-16">
            <div className="container mx-auto flex justify-end items-center px-4 h-full">
                <button onClick={onLogout} className="focus:outline-none text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>

            </div>
        </header>
    );
};
export default HeaderNavigation;