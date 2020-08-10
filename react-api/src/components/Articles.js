import React from 'react'

const Articles = ({ articles }) => {
  return (
    <div>
       {articles.map(article => (

          <div className="card" key={article.key}>
            <div className="card-body">
              <h6 className="card-title">{article.title} ({article.id})</h6>
              <div className="card-text">

                {article.contentFields.map((item, index) => (
                  <span key="{index}" dangerouslySetInnerHTML={{__html: item.value.data}} />
                ))}

              </div>
            </div>
          </div>

        ))}
    </div>
  )
};

export default Articles