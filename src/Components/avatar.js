import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Photo from '../Images/contact.png'

// import Photo from '../Images/IMG_0451.JPG'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  border: {
    border: 'rgba(108, 107, 107, 0.524) .1em solid',
    borderRadius: '50%',
    borderShadow: '0px 0px 5px #888888'
  },
  avatar: {
    marginTop: 15,
  },
  bigAvatar: {
    width: 150,
    height: 150,
    border: 'rgba(108, 107, 107, 0.524) .1em solid',
    borderShadow: '0px 0px 5px #888888'

  },
};

class ImageAvatar extends Component {
  render(){
    const { classes, content } = this.props;
    return (
      <div className={(classes.row)}>
        <Avatar
          alt="Wade Cosby"
          src={content}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
    );
  }
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
