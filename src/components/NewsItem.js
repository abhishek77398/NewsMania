import React from 'react'

const NewsItem = (props)=> {
  
    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://i.insider.com/66e334b7d17aa3c7b2b22166?width=1200&format=jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} {author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
