import React, { Component } from "react"
import axios from "axios"
import "./JokeList.css"

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

      jokes.push(res.data.joke)

      console.log(res.data.joke)
    }
    this.setState({jokes: jokes})
  }

  render() {
    return <div>
    <h1>Chuckle</h1>

    {this.state.jokes.map((j) => (<div>{j}</div>))}

    </div>
  }
}

export default JokeList
