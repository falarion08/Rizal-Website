import camora from "../assets/camora.png"
import damaso from "../assets/damaso.png"
import Card from "./CardComponent.jsx";

function TT_Nav(props){

    const card_component = [
        {
            "heading": "Padre Damaso",
            "subheading":"Noli Me Tangere",
            "text": "Ang  pag-abuso ng kapangyarihan sa relihiyon sa pamamagitan ng paggamit ng posisyon upang mang-api at manlamang sa mga tao.",
            "image":damaso,
            "toggle": props.item1_toggle,
            "set_toggle":props.set_item1_toggle
        },
        {
            "heading": "Padre Camorra",
            "subheading":"El Filibusterismo",
            "text": "Ang pag-abuso sa kapangyarihang relihiyoso sa pamamagitan ng paggamit ng posisyon upang makamit ang personal na layunin.",
            "image":camora,
            "toggle": props.item2_toggle,
            "set_toggle":props.set_item2_toggle,
        }
    ]
    
    let card_list = []
    return (
        <>
            <div className="bg-[#FFF8ED]  p-4">
                <h1 className="text-center text-[#642B62] font-extrabold text-5xl">Tampok sa Tauhan</h1>

                <div className="flex flex-row justify-center items-center h-[32rem] gap-36">
                    {card_component.map((c_component, key) => {
                        card_list.push(
                           
                        <Card key = {key}
                            im = {c_component.image} 
                            heading = {c_component.heading}
                            subheading = {c_component.subheading}
                            text = {c_component.text}
                            set_toggle  = {c_component.set_toggle}
                            toggle = {c_component.toggle}
                            nav_toggle = {props.nav_toggle}
                            set_nav_toggle = {props.set_nav_toggle}
                            />
                    
                        )
                    })}
                    
                    {card_list[0]}
                    {card_list[1]}

                </div>
            </div>
        </>
    )
}

export default TT_Nav;