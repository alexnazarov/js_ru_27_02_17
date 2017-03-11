import React, { Component, PropTypes } from 'react'
import Range from './Range/index'
import ArticleList from './ArticleList/index'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles } = this.props

        return (
            <div>
                <Range />
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }
}

export default App