function Card(props){

    const selectContent = () => {

        props.set_nav_toggle(!props.nav_toggle)
        props.set_toggle(!props.toggle)
    }

    return (
        <>
            <div className="border-2 border-black w-96 h-[27rem] rounded-xl shadow-2xl bg-[#f7f1e8]">
                <div className="mt-4 w-72 m-auto h-52">
                    <img src = {props.im} className=" size-full object-contain"/>
                </div>
                <div className="text-center text-[#642B62] mt-3">
                    <h1 className="p-1 font-extrabold text-2xl">{props.heading}</h1>
                    <h2 className="p-2 text-xl font-bold">{props.subheading}</h2>
                    <p className="text-md">{props.text}</p>
                </div>

                <div className=" text-center p-2">
                    <button onClick={selectContent} className="py-2 px-12 rounded border-2 border-black bg-[#642B62] text-white font-bold">Magbasa pa</button>
                </div>
            </div>
        </>
    )
}

export default Card
