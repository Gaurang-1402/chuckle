import React, { Component } from "react"
import axios from "axios"
import "./JokeList.css"
import Joke from "../Joke/Joke"
import uuid from "uuid/v4"

class JokeList extends Component {
  static defaultProps = { numJokes: 10 }

  constructor(props) {
    super(props)
    this.state = {
      jokes: [],
    }
  }

  async componentDidMount() {
    let jokes = []

    while (jokes.length < this.props.numJokes) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })

      jokes.push({id: uuid(), text: res.data.joke, votes: 0 })
    }
    this.setState({ jokes: jokes })
  }

  handleVotes(id, delta) {
    this.setState((currState) => ({
      jokes: currState.jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      ),
    }))
  }

  render() {
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Chuckle</span>
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button className='JokeList-getmore'>New Jokes</button>
        </div>

        <div className='JokeList-jokes'>
          {this.state.jokes.map((j) => (
            <Joke id = {j.id} text={j.text} votes={j.votes} downVote = {() => this.handleVotes(j.id, -1)} upVote = {() => this.handleVotes(j.id, 1)} ></Joke>
          ))}
        </div>
      </div>
    )
  }
}

export default JokeList
