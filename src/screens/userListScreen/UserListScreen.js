import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from "../navigation/Navigation";
import {userListColumns} from "./utils/userListColumns";
import { fetchAllUser } from "./actions/userListActions";
import CustomLoadingSpinner from "../../globalComponents/CustomLoadingSpinner";
import CustomTable from "../../globalComponents/CustomTable";

const UserListScreen = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userList);
    const { loading, error, users = [] } = userList;

    useEffect(() => {
        dispatch(fetchAllUser());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const columns = userListColumns();

    return (
        <Navigation>
            <div className="p-6 bg-gray-100 min-h-screen">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <h1 className="text-2xl font-bold mb-6 text-green-500">Users</h1>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <CustomLoadingSpinner
                            size={6}
                            text="Loading Users..."
                            textPosition="right"
                        />
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center">
                        {error}
                    </div>
                ) : (
                    <CustomTable
                        columns={columns}
                        data={users}
                    />
                )}
            </div>
        </Navigation>
    );
};

export default UserListScreen;