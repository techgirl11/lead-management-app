import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import moment from 'moment';

const updatedDate = (created_at) => {
  let retval = moment(created_at).format('MMMM D YYYY @ h:mm a')
  return retval
} 

const AcceptedCard = ({ contact_name, updated_at, suburb, postcode, category, id, description, price, contact_phone, contact_email }) => (
  <Grid item xs={12}>
    <Paper>
      <Card>
        <CardContent>
          <Typography style={{ fontWeight: 'bold' }}>
            {contact_name}
          </Typography>
          <Typography color="textSecondary">
            {updatedDate(updated_at)}
          </Typography>
          <Typography color="textSecondary">
            <span style={{ paddingLeft: '10px', paddingRight: '10px' }}><LocationOnIcon />{suburb}  {postcode}</span>
            <span style={{ paddingLeft: '10px', paddingRight: '10px' }}><BusinessCenterIcon />{category}</span>
            <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>Job ID: {id}</span>
            <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>${price} Lead Invitation</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="tel:{contact_phone}" size="small" color="primary">
            <PhoneOutlinedIcon />{contact_phone}
          </Button>
          <Button href='mailto:{contact_email}' size="small" color="primary">
            <MailOutlineIcon />{contact_email}
          </Button>
        </CardActions>
        <CardContent>
          <Typography color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  </Grid>
)

export const GroupedAcceptedCards = ({ acceptedCards }) => (
  <Grid container spacing={3}>
    {acceptedCards &&
      acceptedCards.map(acceptedCard => (
        <AcceptedCard {...acceptedCard} />
      ))}
  </Grid>
);