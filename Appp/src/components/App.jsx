import React, {PureComponent} from 'react'
import {render} from 'react-dom'
import articles from '../fixtures'
import ArticleList from './ArticleList'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            revert: null
        }
        this.handleReverse = () => {
            this.setState({
                revert: !this.state.revert
            })
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="jumbotron"> React Awesome</h1>
                <input type="button" value="revrese" className="btn btn-block btn-outline-warning" onClick={ this.handleReverse }/>
                <ArticleList articles={ this.state.revert ? articles.slice().reverse() : articles } />
            </div>
        )
    }
}

// export default class App extends PureComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             revert: null,
//         }

//         this.handleReverse = () => {
//             this.setState({
//                 revert: !this.state.revert
//             })
//         }
//     }
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="jumbotron"> React App </h1>
//                 <input className="btn btn-block btn-outline-warning" type="button" value="reverse" onClick={ this.handleReverse } />
//                 <ArticleList articles={ this.state.revert ? articles.slice().reverse() : articles } />
//             </div>
//         )
//     }
// }