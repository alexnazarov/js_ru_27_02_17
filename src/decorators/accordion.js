import React from 'react'

export default (CustomComponent) => class DecoratedAccordion extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}