import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field} from 'redux-form';
import { createPost } from "../actions";

class PostsNew extends Component
{
    static contextTypes = {
        router : PropTypes.object.isRequired
    };

    submit = (values) =>
    {
        //return dispatch(createPost(values));
        this.props.dispatch(createPost(values))
            .then(() => {
                this.context.router.history.push('/');
            });
    };

    render() {
        const renderField = ({input, label, type, meta: { touched, error, warning }}) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched && ((error && <div>{error}</div>) || (warning && <div>{warning}</div>))}
                </div>
            </div>
        );

        const {fields : {title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <Field name="title" component={renderField} type="text" label="title"  {...title} />
                </div>
                <div className="form-group">
                    <Field name="categories" component={renderField} type="text" label="categories" {...categories} />
                </div>
                <div className="form-group">
                    <Field name="content" component={renderField} type="text" label="content" {...content} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.title)
    {
        errors.title = 'Required';
    }

    if (!values.categories)
    {
        errors.categories = 'Required';
    }

    if (!values.content)
    {
        errors.content = 'Required';
    }

    return errors
};

// connect : first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm : first argument is form config, 2nd is mapStateToProps, 3nd is mapDispatchToProps
export default reduxForm({
    form : 'PostsNewForm',
    fields : ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostsNew);