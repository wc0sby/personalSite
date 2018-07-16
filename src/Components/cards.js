import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const styles =theme=>({
  card: {
    maxWidth: 345,
    minHeight: '100%',
    position: 'relative',
    paddingBottom: 40
  },
  media: {
    paddingTop: '56.25%', // 16:9,
  },
  content: {
    paddingBottom: 40
  },
  button: {
    '&:hover': {
      backgroundColor: '#62ce56',
    },
    margin: theme.spacing.unit,
    background: '#ce5454',
    color: '#ffff'
  },
  position: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginTop: 30,
    width: '100%'
  }
})

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
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="headline" component="h2">
              {project.name}
            </Typography>
            <Typography component="p">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.position}>
            <Button size="small" className={classes.button} href={project.link}>
              View Project
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProjectCard);
