import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  },
};

class ProjectCard extends Component {
    render(){
    const { classes, project } = this.props;

    return (
      <Grid item xs={12} lg>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={project.photo}
            title={project.name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {project.name}
            </Typography>
            <Typography component="p">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={project.link}>
              View Project
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProjectCard);
