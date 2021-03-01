import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SimpleTable from './Table';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SimpleCard() {
  return (
    <Card>
        <CardContent>
          <SimpleTable />
        </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Accept
        </Button>
        <Button variant="contained" size="small">
          Decline
        </Button>
      </CardActions>
    </Card>
  );
}
