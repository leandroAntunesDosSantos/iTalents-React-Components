import './Booklist.css';

export default function BookList() {
    return (
        <main id="books" className="container">
      <h1 className="title-main mt20 mb20">
        Aproveite a nossa promoção de livros com até 50% de desconto!
      </h1>
      <div className="book-cards mb20 mt20">
        <div className="book-card">
            <div>
            <img src="https://m.media-amazon.com/images/I/61M1dwiFAEL._AC_UF1000,1000_QL80_.jpg" alt="Foto livro as 48 leias do poder" />
            </div>
            <div className="book-info">
                <h2>As 48 Leis do Poder</h2>
                <p>Robert Greene</p>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>

        <div className="book-card">
            <div>
            <img src="https://m.media-amazon.com/images/I/61M1dwiFAEL._AC_UF1000,1000_QL80_.jpg" alt="Foto livro as 48 leias do poder" />
            </div>
            <div className="book-info">
                <h2>Book Title</h2>
                <p>Book Author</p>
                <p>Book Description</p>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>

        <div className="book-card">
            <div>
            <img src="https://m.media-amazon.com/images/I/61M1dwiFAEL._AC_UF1000,1000_QL80_.jpg" alt="Foto livro as 48 leias do poder" />
            </div>
            <div className="book-info">
                <h2>Book Title</h2>
                <p>Book Author</p>
                <p>Book Description</p>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>

        <div className="book-card">
            <div>
            <img src="https://m.media-amazon.com/images/I/61M1dwiFAEL._AC_UF1000,1000_QL80_.jpg" alt="Foto livro as 48 leias do poder" />
            </div>
            <div className="book-info">
                <h2>Book Title</h2>
                <p>Book Author</p>
                <p>Book Description</p>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>
        

      </div>
    </main>
    );
}


