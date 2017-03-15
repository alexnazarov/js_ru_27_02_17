import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticles} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filteredArticles: PropTypes.array.isRequired,
        filterArticles: PropTypes.func.isRequired
    };

    handleChange = selected => {
        const { filterArticles } = this.props
        filterArticles({filteredArticles: selected })
    }

    render() {
        const { articles, filteredArticles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filteredArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = state => {
    return {
        filteredArticles: state.filters.filteredArticles,
        articles: state.articles
    }
}

export default connect(mapStateToProps, { filterArticles })(SelectFilter)