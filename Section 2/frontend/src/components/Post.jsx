import React from 'react'

const Post = () => {
    // let count=0;
    // const [likes, setLikes] = useState(0);
  return (
    <div className='container p-5'>
    <div className="card mb-3">
  <img src="https://i.pinimg.com/originals/95/26/4f/95264f98af27ca10405cdda05688ccbf.jpg" className="card-img-top myimg" alt="sunset" />
  <p className='container align-items'>
  <i className="fa-regular fa-heart p-2"></i>
  <i className="fa-regular fa-comment p-2"></i>
  <i className="fa-regular fa-paper-plane p-2 "></i>
  <i className="fa-regular fa-bookmark p-2 float-end"></i>
  </p>
  {/* <button className='btn btn-success mt-4' onClick={ () => {setLikes(likes+1)} }>{likes} Likes</button> */}
  <div className="card-body">
    <h6 className="card-title">@_khushi353_</h6>
    <p className="card-text">
      When you can't find the sunshine, <i>be the sunshine...!!</i>❤️🌻
    </p>
    <textarea className='area' placeholder='Comment here...' rows={1}></textarea>
    <p className="card-text">
      <small className="text-muted">Last updated 3 mins ago</small>
    </p>
  </div>
</div>

    </div>
  )
}

export default Post