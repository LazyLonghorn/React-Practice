import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: 'Title',
    description: 'Description',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ( {category} ) => {

    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    const [loading, response, error] = usePromise(() => {
        const query = (category === 'all') ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=882f462a67c647daa5c2efa09ffa8027`);
    }, [category]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);

    //         try {
    //             const query = (category === 'all') ? '' : `&category=${category}`;
    //             const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=882f462a67c647daa5c2efa09ffa8027`);
    //             setArticles(res.data.articles);
    //         } catch(e) {
    //             console.log(e);
    //         }

    //         setLoading(false);
    //     };

    //     fetchData();
    // }, [category]);

    // Loading
    if(loading) {
        return <NewsListBlock>Loading ....</NewsListBlock>
    }
    // articles 값이 설정되지 않을 때
    // if(!articles) {
    if(!response) {
        return null;
    }

    if(error) {
        return <NewsListBlock>Error occurred</NewsListBlock>;
    }

    const {articles} = response.data;

    return (
        <NewsListBlock>
            { articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            )) }
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
        </NewsListBlock>
    );
};

export default NewsList;