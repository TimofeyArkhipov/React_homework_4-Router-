import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Comments from "./comments";
import React, {useState } from "react";
import { Link } from 'react-router-dom';
import useData from "../hooks/data";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

export default function Post({post}) {

    const [commentDisplay, setCommentDisplay] = useState(false);
    const [ user ] = useData('/users/'+post.userId);


    return(
                    <Card variant="outlined">
                        <CardContent>
                            <Typography key={post.id} component="h4" variant="h4" color="textPrimary">
                                Post# {post.id}
                            </Typography>
                            <Typography className="postTitle" component="h2" variant="h5" color="textPrimary">
                                {post.title}
                            </Typography>
                            <Typography>
                                <Link to={'/users/'+post.userId}>Go to {user ? user.name : 'Author'}</Link>
                            </Typography>
                            <ListItemText>
                                {post.body}
                            </ListItemText>
                            <ListItemText>
                                <div onClick={() => setCommentDisplay(!commentDisplay)}>Comments</div>
                                {commentDisplay && <Comments postId={post.id}/>}
                            </ListItemText>
                        </CardContent>
                    </Card>
    )
}

