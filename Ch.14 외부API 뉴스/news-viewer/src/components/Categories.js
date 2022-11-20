import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const categories = [
    {
        name: 'all',
        text: 'All'
    },
    {
        name: 'business',
        text: 'Business'
    },
    {
        name: 'entertainment',
        text: 'Entertainment'
    },
    {
        name: 'health',
        text: 'Health'
    },
    {
        name: 'science',
        text: 'Science'
    },
    {
        name: 'sports',
        text: 'Sports'
    },
    {
        name: 'tech',
        text: 'Tech'
    }
];
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow: auto;
    }
`;

// const Category = styled.div`
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }


    /* ${props => props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}; */

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ( {category, onSelect} ) => {
    return (
        <CategoriesBlock>
            { categories.map(item => (
                
                // <Category 
                //     key={item.name}
                //     active={category === item.name}
                //     onClick={()=>onSelect(item.name)}    
                // >
                //     {item.text}
                // </Category>

                <Category 
                    key={item.name}
                    className={({ isActive }) => ({ color: isActive ? 'active' : '' })}
                    to={item.name === 'all' ? '/': `/${item.name}`}
                >
                    {item.text}
                </Category>
                
            )) }
        </CategoriesBlock>
    );
};

export default Categories;