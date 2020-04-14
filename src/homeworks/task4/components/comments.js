import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import useData from "../hooks/data";
import CircularProgress from "@material-ui/core/CircularProgress";


export default function Comments({ postId }) {
    let [comments] = useData('/posts/'+postId+'/comments', []);
    console.log(comments);
    return (
        <div>
            {!comments &&  <CircularProgress />}
            {comments.map(comment => (
                    <Grid className='postContainer' key={comment.id} container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>{comment.name.substr(0, 1)}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap className="Typography">Name: {comment.name}</Typography>
                            <Typography noWrap className="Typography">Comment: {comment.body}</Typography>
                        </Grid>
                    </Grid>
            ))}
        </div>
    )
}