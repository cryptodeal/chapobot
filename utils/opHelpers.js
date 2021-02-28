exports.constructComment = (user, commentBody, post) => {
  let commentPayload = {
    op: "CreateComment",
    data: {
      auth: user.jwt,
      content: commentBody,
      creator_id: user.id, 
      post_id: post.id
    }
  } 
  return commentPayload
}

exports.constructPost = (user, post) => {
  let commentPayload = {
    op: "CreatePost",
    data: {
      auth: user.jwt,
      content: commentBody,
      creator_id: user.id, 
      post_id: post.id
    }
  } 
  return commentPayload
}
exports.constructPostLike = (user, post, isLike) => {
  //isLike is boolean: true => add like to the post || false => remove like from the post
  if(isLike === true){
    let postLikePayload = {
      op: "CreatePostLike",
      data: {
        auth: user.jwt,
        post_id: post.id,
        score: 1
      }
    }
    return postLikePayload
  } else{
    let postLikePayload = {
      op: "CreatePostLike",
      data: {
        auth: user.jwt,
        post_id: post.id,
        score: 0
      }
    }
    return postLikePayload
  }
}


exports.constructCommentLike = (user, post, comment, isLike) => {
  //isLike is boolean: true => add like to the post || false => remove like from the post
  if(isLike === true){
    let commentLikePayload = {
      op: "CreateCommentLike",
      data: {
        auth: user.jwt,
        comment_id: comment.id,
        post_id: post.id,
        score: 1
      }
    }
    return commentLikePayload
  } else{
    let commentLikePayload = {
      op: "CreateCommentLike",
      data: {
        auth: user.jwt,
        comment_id: comment.id,
        post_id: post.id,
        score: 0
      }
    }
    return commentLikePayload
  }
}