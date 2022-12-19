import React, { useEffect } from 'react';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { getUsers } from '../modules/users';

const UsersContainer = ({ users, getUsers }) => {
    useEffect(() => {
        /**
         * 이미 데이터가 있으면 요청하지 않음.
         * 렌더링 후, 브라우저에서 페이지를 확인할 때마다 불필요한 API 호출을 막기 위함
         */
        if(users) return;

        getUsers();
    }, [users, getUsers]);

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default connect(
    state => {
        return {
            users: state.users.users    // users 의 Reducer
        }
    }, 
    {
        getUsers        // 호출할 Action Function
    }
)(UsersContainer);