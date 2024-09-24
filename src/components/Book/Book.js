import './Book.css';

export default function Book(props) {
    return (
        <div className="book-card">
            <div>
                <img src={props.imagem} alt={props.alt} />
            </div>
            <div className="book-info">
                <h2>{props.titulo}</h2>
                <p>{props.autor}</p>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>
    );
}

