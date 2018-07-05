import React, {PureComponent} from 'react'
import Article from './Article'


export default class ArticleList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleOpen = isOpen => {
            this.setState({
                isOpen: this.state.isOpen === isOpen ? false : isOpen
            })
        }
    }
    render() {
        const articles = this.props.articles.map((article, index) =>
            <div key={ article.id }>
                <Article
                    article = { article }
                    isOpen = {this.state.isOpen === article.id}
                    handleOpen = { this.handleOpen.bind(this, article.id) }
                />
            </div>
        )
        return (
            <div className="article__item mx-auto">
                { articles }
            </div>
        )
    }
}
// export default class ArticleList extends PureComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isOpen: false
//         }
//         this.handleOpen = isOpen => {
//             this.setState({
//                 isOpen: this.state.isOpen === isOpen ? false : isOpen
//             })
//         }
//     }
//     render(){ 
//         const articles = this.props.articles.map((article, index) =>
//             <div key={ article.id }>
//                 <Article 
//                     article = { article }
//                     isOpen = {this.state.isOpen === article.id}
//                     handleOpen = { this.handleOpen.bind(this, article.id) }
//                 />
//             </div>
//         )
//         return (
//             <div className="article__item mx-auto">
//                 { articles }
//             </div>
//         )
//     }
// }