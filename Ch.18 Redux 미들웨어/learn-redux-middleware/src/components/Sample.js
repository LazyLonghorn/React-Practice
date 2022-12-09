import React from 'react';

const Sample = ( {loadingPost, loadingUsers, post, users} ) => {
    return (
        <div>
            <section>
                <h1>POST</h1>
                {loadingPost && 'Loading...'}
                {}
            </section>
        </div>
    );
};

export default Sample;