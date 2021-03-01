import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { GroupedInvitedCards } from "./InvitedCard";
import { GroupedAcceptedCards } from "./AcceptedCard";
import { getUserData } from "./handler";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  apiResponse = getUserData('new')
  .then((resp) => {
    this.setState({ invitedUsersData: resp })
  })

  apiResponse = getUserData('accepted')
  .then((resp) => {
    this.setState({ acceptedUsersData: resp })
  })

  render() {
    const { value } = this.state;
    const { invitedUsersData } = this.state;
    const { acceptedUsersData } = this.state;
    
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Invited" />
            <Tab label="Accepted" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          {invitedUsersData && (
            <GroupedInvitedCards invitedCards={invitedUsersData} />
          )} 
        </TabContainer>}
        {value === 1 && <TabContainer>
          {acceptedUsersData && (
            <GroupedAcceptedCards acceptedCards={acceptedUsersData} />
          )}
        </TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTabs;