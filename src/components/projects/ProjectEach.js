import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import "../../styles/projects.sass";

const styles = {
    card: {
        maxWidth: 745,
        margin: '0px 30px 30px 30px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'

    },
    media: {
        height: 200,
        margin: 10
    },
};

function ProjectEach(props) {
    const { classes, proj } = props;
    return (
        <Card className={classes.card}>
            {console.log(proj)}
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={proj.img}
                    title="Contemplative Reptile"
                />
                <CardContent>

                    <Typography gutterBottom variant="h5">
                        {proj.name}
                    </Typography>

                    <Typography>
                        {proj.detail}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={proj.live} size="small" color="primary">
                    Live
                </Button>
                <Button href={proj.github} size="small" color="primary">
                    GitHub
        </Button>
            </CardActions>
        </Card>
    );
}

ProjectEach.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectEach);