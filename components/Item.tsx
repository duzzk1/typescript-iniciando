
function Item(props: { name: any; image: any; link: any }){
    return (
        <>
        <div className="flex flex-row px-3 border rounded-md m-2 bg-white relative">
            <div className="flex flex-col w-20 overflow-hidden items-center">
                <a className="flex flex-col items-center flex" href={props.link}>
                <div className="text-center text-slate-700">{props.name}</div>
                <img className="w-12 h-48px" src={props.image} alt=""/>
                </a>
            </div>
        </div>
        </>
    )
}

export default Item;