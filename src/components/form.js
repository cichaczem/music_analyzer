import React, { PropTypes } from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: "",
      error: null
    }

    this.handleError = this.handleError.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.onSubmit = (e) => {
      e.preventDefault()
      e.stopPropagation()
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
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input className="form-control" placeholder="Last.fm username - eg. 'rj'" onChange={this.handleChange}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">Go!</button>
              </span>
            </div>
            {error}
          </form>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form
