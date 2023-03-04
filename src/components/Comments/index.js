import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentList] = useState([])
  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidV4(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentList(previousCommentsList => [
      ...previousCommentsList,
      newComment,
    ])
  }

  const onChangeName = event => setName(event.target.value)
  const onChangeComment = event => setCommentText(event.target.value)
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
