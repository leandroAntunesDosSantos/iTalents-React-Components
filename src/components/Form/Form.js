import './Form.css';


export default function Form() {
    return (
        <form className='form mt-20'>
            <h2>Quer receber novidades e promoções?</h2>
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" placeholder='Maria Rodriguez da Silva'/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='joao_bonifacio@outlook.com'/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefone:</label>
                <input type="tel" id="phone" name="phone" placeholder='(41)99876-0044'/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}