import React, {PureComponent} from 'react'

export default class App extends PureComponent {

  render() {
    const title = <h3 className="subtitle"> sub react </h3>

    return (
      <div>
        { title }
      </div>
    )
  }
}