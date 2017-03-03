import React from 'react'
import Article from './Article'

export default (props) => {
    const {articles} = props
    const articleComponents = articles.map(article => <div key={article.id}><li><Article article={article}/></li><hr /></div>)

    return (
        <ul>
            {articleComponents}
        </ul>
    )
}