import './Promotion.css';

export default function Promotion(props) {
    return (
        <div className="promotion">
            <h1 className="title-main mt20 mb20">
                {props.children}
            </h1>
        </div>
    );
}