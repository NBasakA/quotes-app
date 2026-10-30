export function Button ({title, handleClick}){
    return(
        <button className="hover:bg-zinc-300 rounded-md font-bold p-2" onClick={handleClick}>{title}</button>
    )
}