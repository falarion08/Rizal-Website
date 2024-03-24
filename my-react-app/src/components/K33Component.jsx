import priest from "../assets/catholic-priest.jpeg"
import camora from "../assets/camora.png"
import huli from "../assets/huli.png"
import h_bali from "../assets/h_bali.jpg"
import basilio from "../assets/basilio.png"
import inside_church from "../assets/church.jpeg"
import church_sunset from '../assets/c_sunset.jpg'
import filipina_pic from "../assets/filipina.jpg"
import protest_pic from "../assets/protest.jpg"
function K33Section(props){

    const returnSelection = () => {
        props.set_k33_toggle(!props.k33_toggle)
        props.setKabanataNavToggle(!props.kabanataNavToggle)

    }
    return (

        <>
        <article className="text-slate-200 border relative  max-h-screen overflow-y-auto">

        <button className="sticky top-5 left-4 reading-list-selection-button" onClick={returnSelection}>Back</button>
        <h1 className="p-10 text-5xl font-extrabold stroke-black text-center">Kabanata 30: Si Huli</h1>
        <hr className="border border-black w-3/4 m-auto my-5"/>
        <div className="text-md flex flex-col gap-10 leading-10 font-bold text-slate-600 p-14 text-justify"> 

        <div className="text-2xl underline">Buod ng Kabanata</div>
        <img src={priest} width={400} height={400} className="m-auto"/>

        <p className="indent-3">
            Sa ika-30 na kabanata ng El Filibusterismo naipapakita ang pag-abuso sa kapangyarihang panrelihiyon sa loob ng kolonyal na konteksto sa 
            Pilipinas. Dito inilarawan ni Jose Rizal ang pagiging kasabwat ng Simbahang Katoliko sa pang-aapi sa mamamayang Pilipino ng mga kolonyal 
            na awtoridad ng Espanya. Sa kabanatang ito, ginamit ni Simoun ang pagdiriwang ng kasal, na siyang sumisimbolo sa impluwensya ng Simbahan, 
            bilang entablado upang gumawa ng isang marahas na kaguluhan na sumisimbolo sa paghahamon sa awtoridad ng estado at relihiyon. Bukod sa pisikal 
            na pagkasira, ang pagsabog ay nagpapahiwatig din ng moral na pagkabulok na likas sa kolonyal na sistema. Ipinapakita nito kung paano ang Simbahan, 
            na dapat nagsisilbing gabay at modelo ng masa, ay nagsilbing instrumento upang mapaglingkuran ang mga mayayaman at elitista, at dahil dito mas lumala 
            ang korapsyon at kawalan ng hustisya sa lipunan. Sa pamamagitan ng kaganapang ito, kinukundena ni Rizal ang pagsasamantala ng kapangyarihang pangrelihiyon 
            upang mapanatili at ipagpatuloy ang kontrol at pang-aapi sa mamamayang Pilipino. Nagsisilbing paaalala ang kabanatang ito ng agarang pangangailangan para sa 
            reporma ng relihiyo at pulitika, gayundin ang mga kahihinatnan ng awtoridad at sistematikong walang katarungan at pananagutan.

        </p>

        <div className="text-2xl underline">Mga Karakter</div>
        <p>Ang mga karakter na kasangkot sa kabanata ay ang mga sumusunod:</p>

        <div className="text-lg underline indent-10">Padre Camora</div>
        <div className="flex flex-row">

            <div className=" max-h-64 "><img src={camora} className="m-auto object-contain size-full "/></div>
            <div className="flex-1">
            Si Padre Camorra ay kilala bilang isa sa mga tiwaling prayleng sa loob ng Simbahan sa panahon ng pananakop ng mga Kastila. Sa halip na sundin ang mga
            aral ng Simbahan, siya'y nakikipag-ugnayan sa mga libog o imoral na gawain. Bukod dito, ginagamit niya ang kanyang kapangyarihan bilang isang prayle para 
            sa kanyang personal na pakinabang.

            </div>
        </div>

        <div className="text-lg underline indent-10">Juliana de Diois “Huli”</div>
        <div className="flex flex-row">

            <div className=" max-h-64 flex-1"><img src={huli} className="m-auto object-contain size-full "/></div>
            <div className="flex-1">
                Si Huli, ang anak ni Cabesang Tales, ay may dalawang mas nakatatandang kapatid, sina Lucia at Tano. Nakilala ni Huli si Basilio noong sila ay bata pa sa
                pamamagitan ng kaniyang lolo na si Tandang Selo. Sa Kabanata 30 ng “El Filibusterismo,” nagpakamatay si Huli nang subukan siyang gahasain ni Padre Camorra 
                bilang kapalit ng paglaya ni Basilio mula sa bilangguan.

            </div>
        </div>

        <div className="text-lg underline indent-10">Hermana Bali</div>
        <div className="flex flex-row">

            <div className=" max-h-64 flex-1"><img src={h_bali} className="m-auto object-contain size-full "/></div>
            <div className="flex-1">
                Si Hermana Bali ay isang relihiyosong indibidwal sa nobelang El Filibusterismo. Ang kanyang matinding pananampalataya at paggalang sa awtoridad ng Simbahan 
                ay nagpapakita kung gaano kalakas ang kontrol ng Simbahan sa buhay ng mga tao.
            </div>
        </div>

        <div className="text-lg underline indent-10">Basilio</div>
        <div className="flex flex-row">

            <div className=" max-h-64 flex-1"><img src={basilio} className="m-auto object-contain size-full "/></div>
            <div className="flex-1">
                Si Basilio ay ang anak ni Sisa at ang mas nakatatandang kapatid ni Crispin. Pagkatapos mamatay ang kanyang ina at mawala ang kanyang kapatid, tumakas si 
                Basilio sa bayan at sa kabutihang palad, tinanggap siya ni Kapitan Tiago kung saan ipinag-aral siya ng medisina. Sa panahon na iyon, nagkita si Basilio at
                 Huli at naging magkasintahan ang dalawa.
            </div>
        </div>

        <div className="text-2xl underline">Perspektibo ni Rizal</div>

        <p>
            Sa Kabanata 30 ng El Filibusterismo ni José Rizal, makikita kung paano abusuhin ng mga prayle, tulad ni Padre Camorra, ang relihiyon upang manipulahin at kontrolin ang mga ordinaryong indibidwal. 
        </p>

        <div className="text-2xl underline">Ang pagtulong ni Padre Camorra sa pagpapalaya kay Tandang Selo</div>

        <p>
        Nabanggit sa kabanata ang pagtulong ni Padre Camorra kay Tandang Selo upang makalaya sa bilangguan. Gayunpaman, dahil sa masamang reputasyon ni Padre Camorra, ang kaniyang aksyon ay kahina-hinala 
        at maaaring bigyang-kahulugan bilang isang paraan upang kontrolin at manipulahin ang mga tao. Sa pamamagitan ng pagpapakitang matulungin, napapalakas ang impluwensiya ni Padre Camorra sa komunidad. 
        Sa kasong ito, si Tandang Selo ay makararamdam ng utang-na-loob kay Padre Camorra na nagpapatibay sa posisyon ng mga prayle. Ang paglalarawan ng “tulong” ni Padre Camorra sa kalaunan ay nagbabadya 
        sa kaniyang mas mapanupil na pag-uugali kay Huli.
        </p>
        <img src={inside_church} width={400} height={480} className="m-auto"/>
        <p>
            Ipinapahiwatig ni Rizal na ang mga kilos o desisyon ng mga prayle ay kadalasang naglalayong mapaglingkuran ang kanilang mga sarili. Sa madaling salita, may mga pagkakataon na tumutulong sila sa ibang 
            mga tao hindi dahil sila ay nag-aalala kung hindi dahil sila ay mayroong masamang layunin o ulterior motive. Sa kabanatang ito ng El Filibusterismo, binibigyan-diin ni Rizal ang kalaswaan at potensyal 
            na manipulasyong umiiral sa Simbahan sa panahong iyon.
        </p>

        <div className="text-2xl underline">Ang mga nakaraang aksyon ni Padre Camorra sa mga taong naging parte ng buhay ni Huli</div>
        <img src={church_sunset} width={400} height={480} className="m-auto"/>

        <p>
            Sa parehong kabanata ng El Filibusterismo, nabanggit na pinaruhasan ni Padre Camorra ang mga kabataang lalaki na nanligaw kay Huli. Sa pangyayaring ito, ipinapakita ni Rizal kung gaano kadalas abusuhin 
            ng mga prayle ang kanilang kapangyarihan sa pamamagitan ng pananakot upang kontrolin ang mga tao sa panahon ng pananakop ng mga Kastila. Ang pagpaparusa sa mga kabataang lalaki ay maaaring paraan ng pagpapakita
             ng dominasyon sa posibleng mga karibal ni Padre Camorra para sa atensyon ni Huli. Ito ay nagtatanim ng takot at nagpapahina sa sinumang mag-isip na lumaban sa kaniya o lumabag sa kaniyang mga nais.
        </p>

        <p>
            Bukod dito, ang relihiyon ay kadalasang nagbibigay-diin sa pagmamahal at paghahabag. Gayunpaman, ang mga aksyon ni Padre Camorra ay nagpapakita ng selos at pagiging possessive. Sa pamamagitan ng eksenyang ito, 
            makikita kung paano maaaring gamitin ng mga prayle ang relihiyon upang paglingkuran ang kanilang sariling interes. Makikita rin sa kabanata ang pagwawalang-bahala ng mga prayle sa kalayaan ng bawat isa at higit sa lahat, 
            ang masalimuot na kontrol na kanilang ipinapataw sa buhay ng mga Pilipino.
        </p>

        <div className="text-2xl underline">Si Padre Camorra at ang pagkamatay ni Huli</div>
        <p>
            <img src={filipina_pic} width={400} height={480} className="m-auto shadow-2xl rounded"/>

            Ginamit ni Rizal ang pagkamatay ni Huli sa kamay ni Padre Camorra bilang isang matinding paglalarawan ng pang-aabuso ng relihiyosong kapangyarihan ng mga klero. Dito, binigyang-diin ni Rizal ang mga epekto kung walang 
            pananagutan ang mga awtoridad ng institusyong panrelihiyon. Ang mga aksyon ni Padre Camorra ay nagpapakita ng pagkabulok ng moralidad sa loob ng Simbahan, kung saan ipinagpalit ang kanilang sagradong tungkulin para sa pansariling
             pakinabang. Ang pagkamaty ni Huli ay sumisimbolo sa kalagayan ng mga mamamayan sa isang mapang-aping rehimen, kung saan ginagamit ng mga indibidwal tulad ni Padre Camorra ang kanilang impluwensiya upang biktiman ang mga mahihina. 
             Sa pamamagitan ng trahedyang kapalaran ni Huli, kinundena ni Rizal ang pagkukunwaring banal at imoral na pag-uugali ng mga pari, humihimok ng reporma sa loob ng Simbahan at ng pangkalahatang sistemang kolonyal. Ang hindi napapanahong 
             pagkamatay ng karakter na si Huli ay nagsilbing isang paaalala ng agarang pangangailangan para sa katarungan at pananagutan ng isang lipunang puno ng pang-aabuso at pagsasamantala.

        </p>
        <div className="text-2xl underline">Tawag sa Pagkilos</div>
        <p>
            <img src={protest_pic} width={400} height={480} className="m-auto shadow-2xl rounded"/>

            Ginamit ni Rizal ang pagkamatay ni Huli sa kamay ni Padre Camorra bilang isang matinding paglalarawan ng pang-aabuso ng relihiyosong kapangyarihan ng mga klero. Dito, binigyang-diin ni Rizal ang mga epekto kung walang pananagutan ang mga 
            awtoridad ng institusyong panrelihiyon. Ang mga aksyon ni Padre Camorra ay nagpapakita ng pagkabulok ng moralidad sa loob ng Simbahan, kung saan ipinagpalit ang kanilang sagradong tungkulin para sa pansariling pakinabang. Ang pagkamaty ni 
            Huli ay sumisimbolo sa kalagayan ng mga mamamayan sa isang mapang-aping rehimen, kung saan ginagamit ng mga indibidwal tulad ni Padre Camorra ang kanilang impluwensiya upang biktiman ang mga mahihina. Sa pamamagitan ng trahedyang kapalaran ni Huli, 
            kinundena ni Rizal ang pagkukunwaring banal at imoral na pag-uugali ng mga pari, humihimok ng reporma sa loob ng Simbahan at ng pangkalahatang sistemang kolonyal. Ang hindi napapanahong pagkamatay ng karakter na si Huli ay nagsilbing isang paaalala 
            ng agarang pangangailangan para sa katarungan at pananagutan ng isang lipunang puno ng pang-aabuso at pagsasamantala.
        </p>

    </div>
</article>
        </>
    )
}

export default K33Section