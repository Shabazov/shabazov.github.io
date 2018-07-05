import React, {Component} from 'react'
import '../style.css'

class Article extends Component {
        state = {
            isOpen : true
        }

    render() {
        
    // console.log(this.props);
    
    const {article} = this.props
    const body = this.state.isOpen && <section>{article.text}</section>
    return (
        <div className="hello" style={{color: '#555555'}}>
            <h2 className="title">
                {article.title}
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
            </h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()} </h3>
        </div>
    )
    }

    handleClick = () => {
        console.log('--- ', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



export default Article