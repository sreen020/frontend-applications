import React from 'react'
import ReactDOM from 'react-dom'

let bookList = [
  {"title": "Naam", "author": "Sjoerd", "pages": 220},
  {"title": "Naam2", "author": "Sjoerd2", "pages": 320},
  {"title": "Naam3", "author": "Sjoerd3", "pages": 420},
  {"title": "Naam3", "author": "Sjoerd3", "pages": 420}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>{pages} pages</p>
      <p>Free bookmark today: {freeBookmark ? 'yes' : 'no'}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The library is hiring.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring.</p>
  </div>

class Library extends React.Component {

  state = { 
    open: true,
    freeBookmark: true,
    hiring: false
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    const books = this.props.books
    return(
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1>Library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map(
          (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookmark={this.state.freeBookmark}/>
        )}
        <button onClick={this.toggleOpenClosed}>Change</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Library books={bookList}/>,
  document.getElementById('root')
)