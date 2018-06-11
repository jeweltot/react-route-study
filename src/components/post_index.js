import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostIndex extends Component
{
    componentWillMount()
    {
        this.props.fetchPosts();
    }

    postList()
    {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        });
    }

    render() {
        return (
            <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                </Link>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.postList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {posts : state.posts.all};
}

/*function mapDispatchToProps(dispatch)
{
    return bindActionCreators({fetchPosts}, dispatch);
}*/
export default connect(mapStateToProps, {fetchPosts})(PostIndex);