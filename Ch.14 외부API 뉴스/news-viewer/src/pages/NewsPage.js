import React, { Fragment } from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';


const NewsPage = () => {
    const params = useParams();
    const category = params.category || 'all';

    return (
        <Fragment>
            <Categories/>
            <NewsList category={category}/>
        </Fragment>
    );
};

export default NewsPage;