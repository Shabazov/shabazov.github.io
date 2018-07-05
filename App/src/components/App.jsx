import React, {PureComponent} from 'react'
import NewsList from './NewsList'
import news from '../news'
import '../style/style.styl'

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            reverted: false
        }
        this.revert = () => {
            console.log('---', 'reverting');
            this.setState({
                reverted: !this.state.reverted
            })
            
        }
    }
    render() {
        return (
            <div>
                <input type="button" className="btn" value="reverse" onClick={this.revert}/>
                <NewsList articles = { this.state.reverted ? news.slice().reverse() : news } />
            </div>
        )
    }
}

export default App