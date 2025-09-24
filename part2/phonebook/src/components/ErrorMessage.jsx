export function ErrorMessage({text, deleted}) {
    return (
        <div className={deleted ? 'error-msg' : 'added-msg'}>
            {text}
        </div>
    )
}