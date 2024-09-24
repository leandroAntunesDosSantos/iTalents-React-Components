import Book from '../Book/Book';
import Form from '../Form/Form';
import Promotion from '../Promotion/Promotion';
import './Booklist.css';

export default function BookList() {
  const books = [
    {
      id: 1,
      titulo: "As 48 Leis do Poder",
      autor: "Robert Greene",
      imagem: "https://m.media-amazon.com/images/I/61M1dwiFAEL._AC_UF1000,1000_QL80_.jpg",
      alt: "Foto livro as 48 leias do poder"
    },
    {
      id: 2,
      titulo: "como fazer amigos e influenciar pessoas",
      autor: "Dale Carnegie",
      imagem: "https://m.media-amazon.com/images/I/71MptYmPNOL._AC_UF1000,1000_QL80_.jpg",
      alt: "Foto livro como fazer amigos e influenciar pessoas"
    },
    {
      id: 3,
      titulo: "A arte da guerra",
      autor: "Sun Tzu",
      imagem: "https://m.media-amazon.com/images/I/51Fe45NGwkL._AC_UF1000,1000_QL80_.jpg",
      alt: "Foto livro a arte da guerra"
    },
    {
      id: 4,
      titulo: "O homem mais rico da Babilônia",
      autor: "George S. Clason",
      imagem: "https://m.media-amazon.com/images/I/81ehX6Quw2L._AC_UF1000,1000_QL80_.jpg",
      alt: "Foto livro o homem mais rico da babilônia"
    }
  ];
    return (
    <main id="books" className="container">
        <Promotion>
          Aproveite a nossa promoção de livros com até 50% de desconto!
        </Promotion>
      <div className="book-cards mb20 mt20">
        {books.map((book) => (
          <Book
            key={book.id}
            titulo={book.titulo}
            autor={book.autor}
            imagem={book.imagem}
            alt={book.alt}
          />
        ))}
      </div>
      <Form />
    </main>
    );
}


