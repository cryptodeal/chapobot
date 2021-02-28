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