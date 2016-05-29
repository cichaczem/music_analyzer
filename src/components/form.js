import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: "",
      error: null
    }

    this.handleError = this.handleError.bind(this)

    this.onSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state.handle, this.handleError)
    }
  }

  handleError(error) {
    this.setState({error: error})
  }

  handleChange(event) {
    this.setState({handle: event.target.value})
  }

  render() {
    const { handle, error } = this.state
    return (
      <form>
        <label>insert your Last.fm username - eg. "rj"</label>:
        <input type="text"
               value={handle}
               onChange={this.handleChange.bind(this)} />
        {error}
        <button onClick={this.onSubmit}>Analyse</button>
      </form>
    )
  }
}

export default Form
