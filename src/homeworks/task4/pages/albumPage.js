import React, {useState} from 'react';
import useData from "../hooks/data";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useParams } from 'react-router-dom';

export default function AlbumPage() {
    const { userId, albumId } = useParams();
    const [openGallery, setOpenGallery] = useState(false);
    const [album] = useData('/albums/'+albumId, {});
    const [photos] = useData('/albums/'+albumId+'/photos', []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div>
            <CardContent>
                <Typography variant="h5" component="h2">
                 Album title: {album.title}
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Link to={'/users/'+album.id}> <Button size="small">Go to user page</Button></Link>*/}
            {/*</CardActions>*/}
            <div>
                <div className='postContainer'>
                    <Slider {...settings}>
                        {photos.map(photo =>
                            <div>
                                <img src={photo.url} width='500' height='500'/>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}