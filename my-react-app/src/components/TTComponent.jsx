import { useState } from "react";
import TT_Nav from "./TT_Nav_Component.jsx";
import TTViewSection from "./TTViewComponent.jsx";
import camora from "../assets/camora.png"
import damaso from "../assets/damaso.png"

function TTSection(){

    const [nav_toggle, set_nav_toggle] = useState(false)
    const [item1_toggle, set_item1_toggle] = useState(true)
    const [item2_toggle,set_item2_toggle] = useState(true)

    const card_component = [
        {
            "heading": "Padre Damaso",
            "subheading":"Noli Me Tangere",
            "text": `"Ang  pag-abuso ng kapangyarihan sa relihiyon sa pamamagitan ng paggamit ng posisyon upang mang-api at manlamang sa mga tao."`,
            "image":damaso,
            "toggle": item1_toggle,
            "set_toggle":set_item1_toggle
        },
        {
            "heading": "Padre Camorra",
            "subheading":"El Filibusterismo",
            "text": `"Ang pag-abuso sa kapangyarihang relihiyoso sa pamamagitan ng paggamit ng posisyon upang makamit ang personal na layunin."`,
            "image":camora,
            "toggle": item2_toggle,
            "set_toggle":set_item2_toggle,
        }
    ]


    const article_content = [
        {
            "title": "Padre Damaso: Mapagsamantala sa Pananampalataya",
            "texts": [
                "Sa nobelang Noli Me Tangere ni Jose Rizal, si Padre Damaso ay isang halimbawa ng pang-aabuso sa relihiyon sa panahon ng kolonyalismong Espanyol sa Pilipinas. Sa Kabanata 5, makikita ang isang konkretong halimbawa ng pang-aabuso ni Padre Damaso.",
                `Sa kabanatang ito, hinamon ni Crisostomo Ibarra si Padre Damaso sa pagsasabing hindi tama ang pag-aaral ng mga kabataan sa Latin at Teolohiya lamang. Sinabi ni Ibarra: "Ang isang dalubhasa ng kasaysayan ay maaaring maging kaibigang tunay ng mga kabataan, ngunit ang isang dalubhasa ng Latin at Teolohiya ay walang magagawa kung hindi ang humagad sa kanilang pagsisikap." Sa kanyang sagot, ipinakita ni Padre Damaso ang kanyang pananaw ng pang-aapi sa mga mamamayan at pag-abuso sa kanyang kapangyarihan bilang isang prayle. Sinabi ni Padre Damaso: "Iyan ang ipinagpapasalamat ng mga prinsipe at hari sa kanilang mga alipin: ang kumontra sa itinatagong kalooban ng hari o ng kanyang mga kawal."`,
                `Napakalinaw na sa pagpapahayag ni Padre Damaso, ipinapakita niya ang kanyang pananaw na dapat sundin ang kanyang mga kagustuhan at huwag labanan ang nasa poder, kahit pa ito ay hindi tama. Ang ganitong pananaw ay nagpapakita ng pang-aabuso sa kapangyarihan at relihiyon.`,
                "Bukod dito, sa iba pang bahagi ng nobela, ipinakita rin ni Padre Damaso ang kanyang pagmamalabis at pang-aabuso sa relihiyon sa pamamagitan ng kanyang pagsasamantala sa mga tao at pagiging mapanakot sa pamamagitan ng relihiyong Katoliko. Ipinakita ni Rizal ang pagkakaroon ng kritikal na pananaw sa mga pangyayaring ito, na nagpapakita ng kanyang pagnanais na ipaalam sa mga mambabasa ang katiwalian sa ilalim ng pangangasiwa ng simbahan.",
                "Sa pananaw ni Rizal, ang lipunan at ang mga mamamayan ay dapat magtanggol at lumaban laban sa mga ganitong uri ng pang-aabuso. Dapat silang maging mulat sa kanilang mga karapatan at magkaroon ng lakas ng loob na ipaglaban ang tunay na katarungan at kalayaan. Hindi dapat pumayag ang lipunan na patuloy na manatili sa pang-aapi at panlilinlang.",
                "Sa kasalukuyang panahon, ang mga ideya at pananaw ni Rizal ukol sa pang-aabuso sa relihiyon ay patuloy na may kahalagahan. Bagaman may mga pagbabago sa lipunan at teknolohiya, ang pang-aabuso sa kapangyarihan at relihiyon ay patuloy pa rin na nagaganap sa iba't ibang bahagi ng mundo. Ang mga tao at ang lipunan ay dapat pa ring magkaisa at magtanggol sa kanilang mga karapatan laban sa mga ganitong uri ng pang-aabuso.",
                "Sa buod, ang karakter ni Padre Damaso sa Noli Me Tangere ay isang halimbawa ng pang-aabuso sa relihiyon. Ang mga ideya ni Rizal ukol dito ay patuloy na may kahalagahan sa kasalukuyang panahon, bagaman maaaring may mga aspeto na hindi na gaanong kaangkop sa modernong konteksto. Gayunpaman, ang pagtutol sa pang-aabuso at pagtanggi sa mapanlinlang na paggamit ng relihiyon ay patuloy na dapat maging bahagi ng paglalakbay tungo sa tunay na katarungan at kalayaan."
            ]
        },
        {
            "title": "Padre Camorra: Pari ng Pananamantala",
            "texts": [
                `Si Padre Camorra ay isa sa mga karakter sa nobelang "El Filibusterismo" ni Jose Rizal na nagpapakita ng pag-abuso sa relihiyon. Siya ay isang pari na nagpakita ng kasakiman at pagmamalabis sa kanyang kapangyarihan bilang tagapangalaga ng pananampalataya. Sa iba't ibang bahagi ng nobela, ipinakita ni Rizal ang mga gawi ni Padre Camorra na nagdulot ng pighati at pagpapahirap sa mga tao.`,
                `Sa Kabanata 7, ipinakita ni Rizal kung paano ginamit ni Padre Camorra ang kanyang impluwensya upang magsagawa ng masasamang gawain. Sa pagkakataong ito, inutusan niya si Basilio na magdala ng lihim na sulat sa ilalim ng pangako ng pangangalaga at tulong, subalit ang tunay na layunin niya ay upang gamitin ang lihim na impormasyon laban sa mga taong may salungat na paniniwala.`,
                `Sa Kabanata 18, ipinakita ang pakikipagsapalaran ni Basilio sa kanyang pagtatangkang pumunta sa Maynila upang ipagpatuloy ang kanyang pag-aaral. Sa bahagi ito ng nobela, naipakita ang pwersa at impluwensya ng simbahan, lalo na si Padre Camorra, sa pamamagitan ng kanyang panghihimasok at pagpigil sa mga plano at pangarap ng mga tao.`,
                `Ang pagsasalaysay ni Rizal sa mga gawaing ito ni Padre Camorra ay nagpapakita ng kanyang pagiging kritikal sa mga tiwaling lider ng simbahan at ang kanilang pang-aabuso sa kapangyarihan. Ayon kay Rizal, ang relihiyon ay dapat gamitin upang magbigay ng liwanag at gabay sa mga tao, at hindi upang magdulot ng pighati at pagpapahirap.`,
                `Sa pananaw ni Rizal, ang lipunan at mga mamamayan ay dapat kumilos laban sa mga ganitong uri ng pang-aabuso. Inihayag niya ang kahalagahan ng pagiging mapanuri at mapanindigan laban sa mga tiwaling lider, lalo na ang mga nasa kapangyarihan sa simbahan. Pinapakita ni Rizal na ang mga mamamayan ay may karapatan at tungkulin na ipagtanggol ang kanilang sarili laban sa katiwalian at pang-aabuso ng mga nasa kapangyarihan.`,
                `Sa kasalukuyan, ang mga ideya at pananaw ni Rizal tungkol sa pang-aabuso sa relihiyon ay patuloy na may kahalagahan. Kahit na ang mga pangyayari at konteksto ay nagbago mula sa panahon ni Rizal, ang isyu ng pang-aabuso sa kapangyarihan at relihiyon ay patuloy na umiiral sa maraming lipunan. Sa panahon ngayon, maaaring makita ang mga kaso ng pang-aabuso sa relihiyon sa pamamagitan ng pagsasamantala sa mga tao, panghihimasok sa pulitika, at paggamit ng pananakot at pagkukulang ng hustisya.`,
                `Gayunpaman, may mga aspeto rin ng pananaw ni Rizal na maaaring maging hindi na gaanong kaangkop sa kasalukuyang konteksto. Ang konteksto ng lipunan at politika ay nagbago mula noong panahon ni Rizal, kaya't ang mga solusyon at pamamaraan na ipinapayo niya ay maaaring hindi nangangahulugan na masaklaw o sapat para sa mga suliraning kinakaharap ngayon.`,
                `Sa kabuuan, ang ideya at perspektiba ni Rizal tungkol sa pang-aabuso sa relihiyon ay patuloy na may kahalagahan sa kasalukuyan, ngunit ang mga aplikasyon at solusyon nito ay maaaring mag-iba batay sa kasalukuyang konteksto at pangangailangan ng lipunan. Mahalaga pa rin ang pagpapahalaga sa katarungan at integridad, kasabay ng pag-unlad ng mga pamamaraan at solusyon na makatutulong sa paglaban sa pang-aabuso sa relihiyon at kapangyarihan.`
            ]
        }
    ]


    return (
        <>
            {!nav_toggle ? <TT_Nav
                nav_toggle = {nav_toggle} set_nav_toggle = {set_nav_toggle}
                item1_toggle = {item1_toggle} set_item1_toggle = {set_item1_toggle}
                item2_toggle = {item2_toggle} set_item2_toggle={set_item2_toggle}
            /> : null}


            {nav_toggle && !item1_toggle ? <TTViewSection 
                nav_toggle = {nav_toggle} set_nav_toggle ={set_nav_toggle}
                toggle = {item1_toggle} set_toggle = {set_item1_toggle}
                card_component = {card_component[0]}
                article_content = {article_content[0]}
            /> 
            : null}

            {nav_toggle && !item2_toggle ? <TTViewSection 
                nav_toggle = {nav_toggle} set_nav_toggle ={set_nav_toggle}
                toggle = {item2_toggle} set_toggle = {set_item2_toggle}
                card_component = {card_component[1]}
                article_content = {article_content[1]}
            /> 
            : null}

            
        </>
    )
}

export default TTSection;