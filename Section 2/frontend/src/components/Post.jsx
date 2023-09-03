import React, { useState } from 'react'

const Post = () => {
  let count = 0;
  const [Likes, setLikes] = useState(0);

  const [bookMarked, setBookMarked] = useState(false);

  return (
    <div className='container p-5'>
      <div className="card mb-3">
        <div className='card-header'>
          <i className="fa-regular fa-user p-2"></i>
          <b>@_khushi353_</b>
          <i class="fa-solid fa-ellipsis-vertical float-end p-2"></i></div>
        <img src="https://i.pinimg.com/originals/95/26/4f/95264f98af27ca10405cdda05688ccbf.jpg" className="card-img-top myimg" alt="sunset" />
        <p className='container align-items m-0'>
          <i className={`fa-regular fa-2x fa-heart p-2`} onClick={() => { setLikes(Likes + 1) }}></i>
          <i className="fa-regular fa-2x fa-comment p-2"></i>
          <i className="fa-regular fa-2x fa-paper-plane p-2 "></i>
          <i className={`fa-${bookMarked ? 'solid' : 'regular'} fa-2x fa-bookmark p-2 float-end`} onClick={() => {setBookMarked(!bookMarked)}} ></i>
        </p>
        <div className="card-body pt-2">
          {Likes} Likes
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