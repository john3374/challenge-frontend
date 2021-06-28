import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/styles';

const style = (theme) => ({
  card: {
    'box-shadow': '5px 5px 5px 5px lightgrey',
    margin: '3rem',
    display: 'flex',
    'flex-direction': 'column',
    'border-radius': '1rem',
    width: '40vw',
  },
  cardImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  cardAvatar: {
    position: 'absolute',
    left: '2rem',
    bottom: '-75px',
    'border-radius': '1rem',
  },
  cardContent: {
    margin: '2em',
    position: 'relative',
  },
  cardBtnFollow: {
    padding: '.4em 2em',
    border: '3px solid #543368',
    'border-radius': '.5em',
    'font-weight': 700,
    display: 'block',
    position: 'absolute',
    right: 0
  },
  cardText: {
    'margin-top': '3em',
  },
  responsiveImg: {
    display: 'block',
    position: 'relative',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    overflow: 'hidden',
    'border-radius': '1rem 1rem 0 0',
  },
  avatarImg: {
    'border-radius': '1rem',
  }
});

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { body: '', title: '', avatarSrc: '', imageSrc: '' };
    this.handlePosts = this.handlePosts.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
    this.handleAvatar = this.handleAvatar.bind(this);
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos/5').then(this.handleAvatar);
    axios.get('https://jsonplaceholder.typicode.com/photos/2').then(this.handlePhotos);
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(this.handlePosts);
  }

  handleAvatar(res) {
    this.setState({ avatarSrc: res.data.thumbnailUrl, });
  }

  handlePhotos(res) {
    this.setState({ imageSrc: res.data.url });
  }

  handlePosts(res) {
    this.setState({ body: res.data.body, title: res.data.title });
  }

  render() {
    const { body, title, imageSrc, avatarSrc } = this.state;
    const { classes } = this.props;
    return (<div className={classes.card}>
      <div className={classes.cardImage}>
        <img src={imageSrc} className={classes.responsiveImg} />
        <div className={classes.cardAvatar}>
          <img className={classes.avatarImg} src={avatarSrc} />
        </div>
      </div>
      <div className={classes.cardContent}>
        <div className={classes.cardBtnFollow}>Follow</div>
        <div className={classes.cardText}>
          <h2>sunt</h2>
          <h3>{body}</h3>
          <h4>{title}</h4>
        </div>
      </div>
    </div>);
  }
}

export default withStyles(style)(Card);