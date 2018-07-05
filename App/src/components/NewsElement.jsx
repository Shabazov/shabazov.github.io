import React, {Component, PureComponent} from 'react'

class NewsElement extends PureComponent {
    constructor(props) {
        super(props)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        console.log('---', 'will mount');
    }

    componentDidMount() {
        console.log('---', 'did mount');
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('---', 'will recieve props');
    //     if(nextProps.defaultOpen !== this.props.defaultOpen)
    //     this.setState({ isOpen: nextProps.defaultOpen })
    // }

    componentWillUpdate() {
        console.log('---', 'will update');
    }

    render() {
        const {article, isOpen, onBtnClick} = this.props
        const body = isOpen && <p className="text">{article.text}</p>
        
        return (
            <div>
                <h2 className="title">{article.title}</h2>
                <div className="barb">
                    <img src="../src/images/barb2.jpg" alt="picture"/>
                </div>
                { body }
                <input className="more" type="button" value={isOpen ? 'close' : 'more...'} onClick={onBtnClick}/>
            </div>   
        )
    }

}

export default NewsElement


