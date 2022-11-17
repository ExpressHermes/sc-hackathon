import Categories from "./Categories/categories";
import { useParams } from 'react-router';

const ThumbnailContainer = () => {
    const { categoryId } = useParams();

    return (
        <Categories type="VIDEO" categoryId={categoryId} />
    )
};

export default ThumbnailContainer;