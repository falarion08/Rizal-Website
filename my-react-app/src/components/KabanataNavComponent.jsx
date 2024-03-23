import Card from "./CardComponent.jsx"
import im1 from "../assets/pDamaso.jpg"
import im2 from "../assets/Lantern.png"
import im3 from "../assets/simon.png"


function KabanataNav({kabanataNavToggle,setKabanataNavToggle,k4_toggle, set_k4_toggle,k33_toggle, set_k33_toggle,k6_toggle, set_k6_toggle}){
    const cardContent = [
        [im1,"Erehe at Filibustero","Noli Me Tangere, Kabanata 4","Ang pagtutulungan ng mga prayle at kolonyal na pamahalaan sa pang-aabuso sa mamamayan",k4_toggle,set_k4_toggle],
        [im2,"Si Huli", "El Filibusterismo, Kabanata 33","Ang pag-aalsa ni Simoun at ang kanyang huling paghahanda para sa himagsikan",k33_toggle,set_k33_toggle],
        [im3,"Si Kapitan Tiyago","Noli Me Tangere, Kabanata 6","Si Kapitan Tiago at ang kanyang saloobin ukol sa pulitika at lipunang Pilipino",k6_toggle,set_k6_toggle]
    ]

    return(
    <>
        <div className="p-5 size-full overflow-y-auto">
            <h1 className=" text-[#FFF8ED] text-center font-bold text-6xl w-3/4 m-auto">Noli at Fili: Rizal Laban sa Abuso sa Relihiyon</h1>
            <div className=" size-full flex justify-center items-center gap-24 flex-wrap overflow-auto">
                {
                    cardContent.map((content,key) => {

                        return(
                            
                            <Card key ={key}
                                im = {content[0]}
                                heading={content[1]}
                                subheading={content[2]}
                                text = {content[3]}
                                toggle = {content[4]}
                                set_toggle = {content[5]}
                                nav_toggle = {kabanataNavToggle}
                                set_nav_toggle = {setKabanataNavToggle}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}

export default KabanataNav;