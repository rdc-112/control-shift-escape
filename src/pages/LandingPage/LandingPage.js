import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      redirectToRoom: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toLowerCase() });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirectToRoom: true });
  }

  render() {
    if (this.state.redirectToRoom) {
      return <Redirect push to={`/rooms/${this.state.value}`} />;
    }
    return (
      <div className="container mx-auto py-16 md:py-32 px-4">
        <h1 className="text-6xl leading-snug">
          Control
          <br />
          Shift
          <br />
          <span className="text-indigo-700 font-bold">Escape</span>
        </h1>
        <div className="mt-40">
          <h3 className="text-2xl mb-8">Rooms</h3>
          <div className="block w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link to={`/rooms/crunch`}>
                <div className="w-full shadow rounded px-4 h-24 bg-white items-center flex items-center">
                  <div className="flex-1 text-lg font-semibold text-center px-4 py-2">
                    Number Crunching
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="justify-center">
            <p className="mb-4 text-center">Enter room code</p>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                className="p-2 border border-gray-400 uppercase font-semibold text-center w-full mb-4"
                value={this.state.value}
                onChange={this.handleChange}
                name="roomCode"
              />
              <button
                disabled={this.state.value === ""}
                className="disabled:bg-gray-300 bg-indigo-700 w-full p-2 text-white uppercase font-semibold"
                type="submit"
              >
                Start
              </button>
            </form>
          </div> */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
