import React from 'react'

export default (CustomComponent) => class DecoratedAccordion extends React.Component {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
