import React from 'react';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const RouteIndex = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={PostIndex}/>
                    <Route path="/posts/new" component={PostsNew}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default RouteIndex;