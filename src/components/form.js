import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: ""
    }

    this.onSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state.handle)
    }
  }

  handleChange(event) {
    this.setState({handle: event.target.value})
  }

  render() {
    return (
      <form>
        <label>insert your Last.fm username - eg. "rj"</label>:
        <input type="text"
               value={this.state.handle}
               onChange={this.handleChange.bind(this)} />
        <button onClick={this.onSubmit}>Analyse</button>
      </form>
    )
  }
}

export default Form
