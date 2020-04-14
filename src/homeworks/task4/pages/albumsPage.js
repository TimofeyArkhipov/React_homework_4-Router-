import React from 'react';
import useData from "../hooks/data";

import { Link } from "react-router-dom"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export default function AlbumsPage() {
    const [albums, fetchingComplete] = useData('/albums', []);

    return(
        <div className='page'>
            {albums.map ( album =>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {album.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={'/users/'+album.userId+'/albums/'+album.id}><Button size="small">Go to album</Button></Link>
                    </CardActions>
                </Card>
            )}
        </div>
    )
}
