import { useEffect } from "react";
import { connect } from "react-redux"
import Sample from '../components/Sample';
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ( {getPost, getUsers, post, users, loadingPost, loadingUsers} ) => {
    // useEffect(() => {
    //     getPost(1);
    //     getUsers(1);
    // }, [getPost, getUsers]);

    useEffect(() => {
        /*
        *   useEffect 에 전달하는 파라미터는 async 로 작성 안됨
        *   따라서, 아래와 같이 함수를 생성해서 호출하는 방식으로
        */

        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch(e) {
                console.log(e);
            }
        }

        fn();
    }, [getPost, getUsers]);

    return (
        <Sample
                post={post}
                users={users}
                loadingPost={loadingPost}
                loadingUsers={loadingUsers}
        />
    )
}

export default connect(
    ({ sample, loading }) => (
        {
            post: sample.post,
            users: sample.users,
            loadingPost: loading['sample/GET_POST'],
            loadingUsers: loading['sample/GET_USERS'],
            // loadingPost: sample.loadingPost
            // loadingUsers: sample.loadingUsers
        }      
    ),
    {
        // Action 생성을 위한 함수
        getPost,
        getUsers
    }
)(SampleContainer)