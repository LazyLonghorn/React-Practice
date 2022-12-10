import { connect } from "react-redux"
import Sample from '../components/Sample';
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ( {getPost, getUsers, post, users, loadingPost, loadingUsers} ) => {
    // loadingPost, loadingUsers, post, users
    getPost(1);
    getUsers(1);

    <Sample
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
    />
}


export default connect(
    ({ sample }) => (
        {
            post: sample.post,
            users: sample.users,
            loadingPost: sample.loadingPost,
            loadingUsers: sample.loadingUsers
        }      
    ),
    {
        // Action 생성을 위한 함수
        getPost,
        getUsers
    }
)(SampleContainer)