import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticlesByTitle} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filterArticles: PropTypes.array.isRequired,
        filterArticlesByTitle: PropTypes.func.isRequired
    };

    handleChange = selected => {
        const { filterArticlesByTitle } = this.props
        filterArticlesByTitle(selected)
    }

    render() {
        const { articles, filterArticles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filterArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = state => {
    return {
        filterArticles: state.filters.filterArticles,
        articles: state.articles
    }
}

export default connect(mapStateToProps, { filterArticlesByTitle })(SelectFilter)