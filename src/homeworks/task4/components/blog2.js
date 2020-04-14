import React, {useContext, useState} from 'react';
import '../animationCSS.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Switch, NavLink, Route, withRouter} from 'react-router-dom';
import AlbumsPage from '../pages/albumsPage';
import PostsPage from '../pages/postsPage';
import UsersPage from '../pages/usersPage';
import UserPage from "../pages/userPage";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function BlogV2() {


    const NavAnimation = withRouter(({ location }) => (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames='slide'
                timeout={400}
            >
                <Switch>
                    <Route path='/posts' exact component={PostsPage}/>
                    <Route path='/users' exact component={UsersPage}/>
                    <Route path='/albums' exact component={AlbumsPage}/>
                    <Route path='/users/:userId' component={UserPage}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    ))

        return(
                <Container maxWidth="1200">
                   <Router>
                       <h2>Blog v2</h2>
                       <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                           <Button>
                               <NavLink to='/posts'>Posts</NavLink>
                           </Button>
                           <Button>
                               <NavLink to='/Users'>Users</NavLink>
                           </Button>
                           <Button>
                               <NavLink to='/albums'>Albums</NavLink>
                           </Button>
                       </ButtonGroup>
                       <NavAnimation/>
                   </Router>
                </Container>
        )
}

