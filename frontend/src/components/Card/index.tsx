import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Txt from '../../assets/text.png';

import './style.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginLeft: 20,
    marginTop: 20,
  },
});

interface CardProps {
  name: string;
  company: string;
  onclick(): void;
}

// eslint-disable-next-line react/prop-types
const CardUser: React.FC<CardProps> = ({ name, company, onclick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onclick}>
      <CardActionArea className="cardContent">
        <CardMedia
          component="img"
          alt="Post"
          height="140"
          image={Txt}
          title="Post"
        />
        <CardContent
          style={{
            textAlign: 'center',
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Empresa: <b>{company}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
