import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import { useCallback } from "react";

const Index = () => {

    const navigate = useNavigate();

    const onClickListButton = useCallback(() => {
        navigate(
            {
                pathname: 'list'
            }
        );
    });

    const onClickSaveButton = useCallback(() => {
        navigate(
            {
                pathname: 'save'
            }
        );
    });

    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={onClickListButton}>List</div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={onClickSaveButton}>Save</div>
            </div>
            <div className="flex flex-wrap w-full">
                <Outlet />
            </div>
        </BasicLayout>
    );
};

export default Index;