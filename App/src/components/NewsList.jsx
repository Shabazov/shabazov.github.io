import React, {PureComponent} from 'react'
import NewsElement from './NewsElement'


export default class NewsList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            openNews: null
        }
            // REVERSE DATA FLOW

            // STATE LIFTING

        this.handleClick = openNews => {
            this.setState({
                openNews: this.state.openNews === openNews ? null : openNews
            })
        }
    }
    render() {
        const newsElements = this.props.articles.map((article, index) =>
        <div className="news__item" key={article.id}> 
            <NewsElement 
                article = {article} isOpen = {this.state.openNews === article.id}
                onBtnClick = { this.handleClick.bind(this, article.id) } 
            />
        </div>
    )
    
    return (
        <div className="news">
            {newsElements}
        </div>
    )
    }
}
