import Card from "./CardComponent.jsx"
function TTViewSection(props){

    const return_selection = () => {
        props.set_nav_toggle(!props.nav_toggle);
        props.set_toggle(!props.toggle)
    }

    return(
    <>
        <div className="bg-[#FFF8ED] p-4 flex">
            <div className="m-auto">
            <Card 
                            im = {props.card_component.image} 
                            heading = {props.card_component.heading}
                            subheading = {props.card_component.subheading}
                            text = {props.card_component.text}
                            set_toggle  = {props.set_toggle}
                            toggle = {props.toggle}
                            nav_toggle = {props.nav_toggle}
                            set_nav_toggle = {props.set_nav_toggle}
                            hidden = "hidden"
                            />
                    
            </div>
            <div className="flex-1 p-4 relative">
            <button className="absolute left-9 top-2 reading-list-selection-button" onClick={return_selection}>Back</button>
                <h1 className="font-bold text-2xl text-center mb-6">{props.article_content.title}</h1>
                <div className="flex flex-col gap-7 p-4 min-h-64 max-h-96 overflow-auto">
                    {props.article_content.texts.map((text,key) => {
                        return (
                            <p className="text-justify leading-loose">{text}</p>
                        )
                    })}
                </div>
            </div>
        </div>
        
    </>

    )
}

export default TTViewSection