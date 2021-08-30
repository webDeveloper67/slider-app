import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Avatar,
  Badge,
  CardActions,
  IconButton,
  Button,
  Box,
} from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const StyledBadge = withStyles((theme) => ({
  badge: {
    width: 32,
    height: 32,
    border: `1px solid ${theme.palette.background.paper}`,
    // padding: "14px 4px",
  },
}))(Badge);

const styles = (theme) => ({
  cardContent: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  circleLargeAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
});

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideInx: 0,
    };
  }

  nextPerson = () => {
    this.setState({ slideInx: this.state.slideInx + 1 });
    if (this.state.slideInx >= this.props.people.length - 1) {
      this.setState({ slideInx: 0 });
    }
  };

  prevPerson = () => {
    this.setState({ slideInx: this.state.slideInx - 1 });
    if (this.state.slideInx <= 0) {
      this.setState({ slideInx: this.props.people.length - 1 });
    }
  };

  randomPerson = () => {
    let randomNum = Math.floor(Math.random() * this.props.people.length);

    if (randomNum === this.state.slideInx) {
      randomNum = this.state.slideInx + 1;
    }
    this.setState({ slideInx: randomNum });
  };

  render() {
    const { classes } = this.props;
    const { name, job, image, text } = this.props.people[this.state.slideInx];
    return (
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Card className={classes.cardContent}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              color="secondary"
              badgeContent={<FormatQuoteIcon />}
            >
              <Avatar
                alt="image name"
                src={image}
                className={classes.circleLargeAvatar}
              />
            </StyledBadge>
            <CardContent>
              <Typography
                gutterBottom
                variant="button"
                component="h4"
                align="center"
                color="primary"
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant="caption"
                component="h4"
                align="center"
                color="secondary"
              >
                {job}
              </Typography>
              <Typography
                gutterBottom
                component="h4"
                variant="overline"
                align="center"
              >
                {text}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton onClick={this.prevPerson}>
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton onClick={this.nextPerson}>
                <ArrowForwardIosIcon />
              </IconButton>
            </CardActions>
            <Box mb={5}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.randomPerson}
              >
                Surprise Me
              </Button>
            </Box>
          </Card>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Review);
