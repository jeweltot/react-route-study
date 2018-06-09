import React, {Component} from 'react';
import { reduxForm, Field} from 'redux-form';
import { createPost } from "../actions";

class PostsNew extends Component {
    submit = (values, dispatch) =>
    {
        return dispatch(createPost(values));
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>title</label>
                    <Field name="title" component="input" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>categories</label>
                    <Field name="categories" component="input" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>content</label>
                    <Field name="content" component="textarea" type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}


// connect : first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm : first argument is form config, 2nd is mapStateToProps, 3nd is mapDispatchToProps
export default reduxForm({
    form : 'PostsNewForm'
}, null, {createPost})(PostsNew);