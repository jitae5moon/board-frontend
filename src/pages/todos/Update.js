import { useNavigate } from "react-router-dom";

const ModifyPage = ({id}) => {

    const navigate = useNavigate();

    const moveToRead = () => {
        navigate( {
                pathname: `/todos/read/${id}`
        });
    };

    const moveToList = () => {
        navigate({
            pathname: '/todos/list'
        });
    };

    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page
        </div>
    );
};

export default ModifyPage;