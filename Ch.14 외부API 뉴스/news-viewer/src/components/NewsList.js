import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'

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

const NewsList = () => {

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=882f462a67c647daa5c2efa09ffa8027');
                setArticles(res.data.articles);
            } catch(e) {
                console.log(e);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    // Loading
    if(loading) {
        return <NewsListBlock>Loading ....</NewsListBlock>
    }
    // articles 값이 설정되지 않을 때
    if(!articles) {
        return null;
    }

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