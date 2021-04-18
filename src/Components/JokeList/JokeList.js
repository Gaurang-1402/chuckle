import React, { Component } from "react"
import axios from "axios"
import "./JokeList.css"
import Joke from "../Joke/Joke"
import uuid from "uuid/v4"

class JokeList extends Component {
  static defaultProps = { numJokes: 30 }

  constructor(props) {
    super(props)
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    }
    this.seenJokes = new Set(this.state.jokes.map((joke) => joke.text))
    console.log(this.seenJokes)
    this.handleClick = this.handleClick.bind(this)
    this.clearJokes = this.clearJokes.bind(this)
  }

  async componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes()
  }

  async getJokes() {
    try {
      let jokes = []

      while (jokes.length < this.props.numJokes) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        })

        if (!this.seenJokes.has(res.data.joke)) {
          jokes.push({ id: uuid(), text: res.data.joke, votes: 0 })
        } else {
          console.log("Found a duplicate!")
          console.log(res.data.Joke)
        }
      }
      this.setState((currState) => ({
        loading: false,
        jokes: [...currState.jokes, ...jokes],
      }))

      window.localStorage.setItem("jokes", JSON.stringify(jokes))
    } catch (e) {
      alert(e)
      this.setState({ loading: false })
    }
  }

  handleVotes(id, delta) {
    this.setState(
      (currState) => ({
        jokes: currState.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    )
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes)
    alert("Scroll down to find the new jokes added!")
  }

  clearJokes() {
    window.localStorage.clear()
    this.setState({ loading: true })
    window.location.reload()
  }
  render() {
    if (this.state.loading) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin'></i>
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      )
    }
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Chuckle</span>
          </h1>
          <p className='JokeList-p'>Everyone can improve their sense of humor with practice😉</p>

          <img alt='' src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button onClick={this.handleClick} className='JokeList-getmore'>
            Additional Jokes
          </button>

          <button className='JokeList-clearjokes' onClick={this.clearJokes}>
            Clear dashboard and get new jokes
          </button>
          <p>Made by Gaurang Ruparelia</p>
        </div>

        <div id='style-14' className='JokeList-jokes'>
          {this.state.jokes
            .sort((a, b) => b.votes - a.votes)
            .map((j) => (
              <Joke
                key={j.id}
                text={j.text}
                votes={j.votes}
                downVote={() => this.handleVotes(j.id, -1)}
                upVote={() => this.handleVotes(j.id, 1)}
              ></Joke>
            ))}
        </div>

      </div>
    )
  }
}

export default JokeList
