import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import useData from "../hooks/data";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Link} from "react-router-dom";


export default function UsersPage() {
    const [users,  fetchingComplete] = useData('users', []);
    // if(!fetchingComplete) return <div><CircularProgress/></div>
    return(
        <div className='page'>
            {users.map ( user =>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {user.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={'/users/'+user.id}>
                            <Button size="small">Go to user page</Button>
                        </Link>
                    </CardActions>
                </Card>
            )}

        </div>
    )
}