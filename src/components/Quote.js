import { ButtonAuthor } from "./Button";

function Quote({ content, onClick=null }) {
    return (
        <div className="quote" onClick={onClick}>
            <div className="vl"></div>
            <p>
                {content}
            </p>
        </div>


    )
}

export default Quote;

