import React, {PureComponent} from 'react'


export default class Article extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const {article, handleOpen, isOpen} = this.props
        const body = isOpen && <section className="card-text"> { article.text } </section>
        return (
            <div className="card">
                <h3 className="card-title"> { article.title } </h3>
                <input type="button" value= { isOpen ? 'close' : 'read' } className="btn btn-primary btn-sm" onClick={ handleOpen }/>
                { body }
                <h6 className="card-subtitile text-muted date">creation date: {(new Date(article.date)).toDateString()}</h6>
            </div>
        )
    }
}
// export default class Article extends PureComponent {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const {article, handleOpen, isOpen} = this.props
//         const body = isOpen && <section className="card-text"> {article.text} </section>
//         return (
//             <div className="card">
//                 <h2 className="card-title"> { article.title } </h2>
//                 <input type="button" value={ isOpen ? 'close' : 'read' } className="btn btn-primary btn-sm"
//                     onClick={ handleOpen }
//                 />
//                 { body }
//                 <h6 className="card-subtitile text-muted date">creation date: {(new Date(article.date)).toDateString()}</h6>
//             </div>
//         )
//     }
// }
