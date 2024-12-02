import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentRate from './CommentRate'

class MyComments extends Component {
  // Funzione per inviare il commento
  // postComment = () => {
  //   fetch('https://striveschool-api.herokuapp.com/api/comments/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDYyMDhhZDEyOTAwMTU4NzZiYzEiLCJpYXQiOjE3MzMxNDUxNDMsImV4cCI6MTczNDM1NDc0M30.b9vuC2wosIXVBrGf0AQwNBGmQXwsfYjq4W2ppICdxQA',
  //     },
  //     body: JSON.stringify(this.state.newComment),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         alert('Commento aggiunto con successo!')
  //         this.setState({
  //           newComment: {
  //             comment: '',
  //             rate: '1',
  //             elementId: '',
  //           },
  //         })
  //       } else {
  //         throw new Error('Errore nel salvataggio del commento')
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       alert("Errore durante l'invio del commento")
  //     })
  // }

  render() {
    console.log('MyComments - this.props', this.props)
    return (
      <div id='commentArea' className='sticky-top'>
        <h2>Commenti</h2>
        {/* Form per aggiungere un commento */}
        {/* <form
          onSubmit={(e) => {
            e.preventDefault()
            this.postComment()
          }}
        >
          <div className='mb-3'>
            <label htmlFor='comment' className='form-label'>
              Commento
            </label>
            <textarea
              id='comment'
              name='comment'
              value={this.state.newComment.comment}
              onChange={this.handleInputChange}
              className='form-control'
              rows='3'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='rate' className='form-label'>
              Voto
            </label>
            <select
              id='rate'
              name='rate'
              value={this.state.newComment.rate}
              onChange={this.handleInputChange}
              className='form-select'
            >
              {[1, 2, 3, 4, 5].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>
            Invia commento
          </button>
        </form> */}

        <hr />

        <ul>
          {this.props.comments.map((comment, index) => (
            <li key={index}>
              <p>
                <span className='fw-bold'>Autore: </span>
                {comment.author}
              </p>
              <p>
                <span className='fw-bold'>Commento:</span>
              </p>
              <p className='bg-tertiary'>
                <em>{comment.comment}</em>
              </p>
              <p>
                <span className='fw-bold'>Rating:</span>
                <CommentRate rating={comment.rate}></CommentRate>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MyComments
