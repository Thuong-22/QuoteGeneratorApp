function Button({ onClick }) {
    return (
        <div className="button-random" onClick={onClick}>
            <p>random</p>
            <span className="material-symbols-outlined icon">
                autorenew
            </span>
        </div>
    )
}

export default Button;




export function ButtonAuthor({ authorName, authorJob, onClick }) {
    return (
        <div className="btn-author" onClick={onClick} >
            <div className="author">
                <p className="authorname">{authorName}</p>
                <p className="authorjob">{authorJob}</p>
            </div>
            <span className="material-icons-outlined">
                arrow_right_alt
            </span>
        </div>
    )
}