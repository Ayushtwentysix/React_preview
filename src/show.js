import React, { Component } from "react";
import {
  Divider,
  Grid,
  Card,
  Statistic,
  Icon
} from "semantic-ui-react";

class Show extends Component {
  render() {
    function Email(props) {
      return (
        <div>
          <Statistic>
            <Statistic.Value>
              <Icon name="mail" color="orange" />
            </Statistic.Value>
            <Statistic.Label>{props.email}</Statistic.Label>
          </Statistic>
        </div>
      );
    }

    function Exist() {
      return (
        <div>
          <Statistic>
            <Statistic.Value>
              <Icon name="check circle" color="green" />
            </Statistic.Value>
            <Statistic.Label>It Exist</Statistic.Label>
          </Statistic>
        </div>
      );
    }

    function NotExist() {
      return (
        <div>
          <Statistic>
            <Statistic.Value>
              <Icon name="close" color="red" />
            </Statistic.Value>
            <Statistic.Label>Not Exist</Statistic.Label>
          </Statistic>
        </div>
      );
    }

    return (
      <div>
        <div />
        <Divider />
        <div style={{ marginTop: "90px" }}>
          <Grid centered container>
            <Card fluid>
              <div>
                {this.props.data.email ? (
                  <Email email={this.props.data.email} />
                ) : (
                  "Not found"
                )}
              </div>
              <div style={{ marginTop: "30px" }}>
                {this.props.data.exist ? <Exist /> : <NotExist />}
              </div>
              <h4>
                {this.props.data.valid ? "(not a valid mail address)" : null}
              </h4>
            </Card>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Show;
