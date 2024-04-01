import Quote from "./Quote";
import { ButtonAuthor } from "./Button";

function FlowQuote({ content, authorName, authorJob, isSingle = true, listQuote, onClick, showQuote=null }) {


    if (isSingle)
        return (
            <div className="flow-quotes">
                <Quote content={content} />
                <ButtonAuthor authorName={authorName} authorJob={authorJob} onClick={onClick} />

            </div>
        )
    else {
        return (
            <div className="flow-quotes">
                <p className="name-title">{authorName}</p>
                {listQuote.map((quote) => (
                    <Quote 
                    key={quote._id}
                    content={quote.content}
                    authorName={quote.author}
                    authorJob={quote.tag}
                    onClick={showQuote}
                    />

                ))}
            </div>
        )
    }
}

export default FlowQuote;



// flow => showquotes, flow has width, heigth:100%, and quote in flow justify-content:center