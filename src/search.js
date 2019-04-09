import React, { Component } from "react";
import { Input, Button, Grid, Header } from "semantic-ui-react";
import Preshow from "./pre_show";
import Loader from "./loader";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      url: this.props.url,
      data: null,
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.message) return;
    console.log("line 21", this.state.url);
    this.setState((a, b) => ({
      isLoading: true,
      url: b.url + this.state.message
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DATA: ", this.state.data);
    console.log("URL: ", this.state.url);
    if (this.state.url !== prevState.url) {
      fetch(this.state.url.trim())
        .then(data => data.json())
        .then(data =>
          this.setState((a, b) => ({
            data: data,
            url: this.state.url,
            message: "",
            isLoading: false
          }))
        )
        .catch(err => console.log("Error:" + err));
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Grid container columns={1} textAlign="center">
            <Grid.Column>
              <Header as="h2" style={{ color: "white", marginTop: "25px" }}>
                Email Existence
              </Header>
              <Input
                fluid
                style={{ fontSize: "17px", fontFamily: "Comfortaa, cursive" }}
                name="message"
                type="text"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="enter mail address"
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                type="submit"
                inverted
                color="black"
                style={{ fontSize: "17px" }}
              >
                Submit
              </Button>
            </Grid.Column>
          </Grid>
        </form>
        {this.state.isLoading ? <Loader /> : <Preshow data={this.state.data} />}
      </div>
    );
  }
}

export default Search;
