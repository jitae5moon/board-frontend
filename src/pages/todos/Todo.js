import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
    const size = searchParams.get("size") ? parseInt(searchParams.get("size")) : 10;
    const searchParamsString = createSearchParams({page, size}).toString;

    const onClickUpdateButton = useCallback((id) => {
        navigate({
            pathname: `/todos/update/${id}`,
            search: searchParamsString
        });
    }, [id, page, size]);

    const onClickListButton = useCallback(() => {
        navigate({
            pathname: '/todos/list',
            search: searchParamsString
        }, [page, size]);
    });

    return (
        <div className="text-3xl font-extrabold">
            Todo id: {id}<br />
            Page: {page}<br />
            Size: {size}<br />
            <div>
                <button onClick={() => onClickUpdateButton(id)}>Update</button>
            </div>
            <div>
                <button onClick={() => onClickListButton()}>List</button>
            </div>
        </div>
    );
}

export default ReadPage;