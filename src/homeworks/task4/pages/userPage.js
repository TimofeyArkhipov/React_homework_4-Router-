import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";


import { useParams, useRouteMatch, Switch, Route, Link} from 'react-router-dom';
import useData from "../hooks/data";
import AlbumPage from "./albumPage";

export default function UserPage() {
    const { userId, albumId } = useParams();
    const [user] = useData('/users/'+userId, null);
    const [ albums ] = useData('/users/'+userId+'/albums', []);
    let { path, url } = useRouteMatch();

    return (
    <div className='page'>
        <Card className='user-container'>
            {user &&
            <CardActionArea >
                <CardMedia
                    image="https://www.static-contents.youth4work.com/y4w/Images/UserThumbImage/160_160/186386.png?v=20150823025634"
                />
                <Paper className="userInfoBLock">
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>{user.name.substr(0, 1)}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap className="Typography">Nickname: {user.username}</Typography>
                            <Typography noWrap className="Typography">Name: {user.name}</Typography>
                            <Typography noWrap className="Typography">Email: {user.email}</Typography>
                        </Grid>
                    </Grid>
                </Paper>

                    <ul>
                        {albums.map(album =>
                            <li>
                            <Paper item>
                                <Link to={url+'/albums/'+album.id}>
                                    <Button  size="small" color="primary">Go to  <span>{album.title} </span>  gallery </Button>
                                </Link>
                            </Paper>
                        </li>
                    )}
                    </ul>

                <Switch>
                    <Route path={url+'/albums/:albumId'}>
                        <AlbumPage/>
                    </Route>
                </Switch>
            </CardActionArea>
            }

        </Card>
    </div>
    )
}