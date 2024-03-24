import kapitan_im from "../assets/kp_tyago.jpg"

function K6Section(props){

    const returnSelection = () => {
        props.set_k6_toggle(!props.k6_toggle)
        props.setKabanataNavToggle(!props.kabanataNavToggle)

    }
    return (

        <>
        <article className="text-slate-200 border relative  max-h-screen overflow-y-auto">

        <button className="sticky top-5 left-4 reading-list-selection-button" onClick={returnSelection}>Back</button>
            <h1 className="p-10 text-5xl font-extrabold stroke-black text-center">Kabanata 6: Si Kapitan Tiyago</h1>
            <hr className="border border-black w-3/4 m-auto my-5"/>
            <div className="text-md flex flex-col gap-10 leading-10 font-bold text-slate-600 p-14 text-justify"> 

                <img src={kapitan_im} width={300} height={400} className="m-auto"/>

                <p className="indent-3">
                Inilaan ni Rizal ang kabanata 6 ng Noli Me Tangere sa paglalarawan kay Kapitan Tiyago, isang lahing Pilipino na itinuturing
                isa sa pinakamayamang ari-arian ng rehiyon. Siya ay inilarawang isang impluwensyadong tao dahil sa kanyang kayamanan. Siya rin 
                ay malakas sa mga taong nasa gobyerno at halos kaibigan niya lahat ng mga prayle. Bukod sa mayaman at iginagalang sa mga lupon 
                ng gobyerno, isa rin siyang makadiyos na tao. Tunay ngang ang kanyang kayamanan ang nagsisiguro sa kanyang kabanalan, sapagkat 
                binabayaran niya ang mga pari at mahihirap na tao upang ipagdasal siya. At higit pa, kapag talagang may kailangan siya mula sa 
                kalangitan, nangangako siya ng lahat ng uri ng bagay sa ilang banal. Upang matiyak na nagbubunga ang kanyang kaugnayan sa relihiyon, 
                ipinalaganap niya ang kanyang debosyon sa iba't ibang mga santo, bilang isang 'polytheist' (taong naniniwala sa iba't ibang Diyos).
                </p>

                <p>
                    Dahil sa ugali at mga masasamang pinanggagawa ni Kapitan Tiyago, ang mga sumusunod ay ang pananaw ni  Rizal at maaaring reaksyon ng mga 
                    biktima at mambabasa ng nobela:
                </p>

                <ul className="list-disc">
                    <li>
                        Pagtutol: Hindi sang-ayon ang mga tao sa pagsasamantala ni Kapitan Tiyago sa relihiyon para lamang sa kanyang sariling pakinabang. 
                        Maaari nilang makita ito bilang mapagkunwari o walang galang sa kabanalan ng mga paniniwala at gawain ng relihiyon.
                    </li>
                    <li>
                        Galit: Maipahayag ng mamamayan ang galit nila kay Kapitan Tiyago dahil sa pagmamanipula ng kanilang pananampalataya at paggamit nito 
                        para sa kanyang pansariling layunin at makita nila ang kanyang mga aksyon bilang isang pagtataksil sa tiwala.
                    </li>
                    <li>
                        Malakas ang loob: Maaaring maipahayag ng iba na may kapangyarihang silang hamunin ang mga ginawa ni Kapitan Tiyago at magsalita laban sa pagsasamantala 
                        at katiwalian sa relihiyon. Maaari silang maghangad na turuan ang iba at magtaguyod ng mga reporma sa loob ng relihiyosong komunidad.
                    </li>
                </ul>

                <p>
                    Sa kabuuan, masalimuot at maraming aspeto ang reaksyon ng mga tao sa pang-aabuso ni Kapitan Tiyago sa relihiyon, na sumasalamin sa iba't 
                    ibang emosyon at pananaw sa loob ng lipunang ipinakita sa nobela.
                </p>

                <p>
                    Ginamit ni Rizal ang karakter na si Kapitan Tiyago sa pagpapakita ng kaniyang perspektibo sa mga gawain ng mayayaman kung saan ang mga ito ay 
                    kinukunsinti ng ibang miyembro ng Simbahang Katoliko. Sa nobelang Noli Me Tangere, kinakatawan ni Kapitan Tiyago ang mga Pilipinong inaapi at inaabuso ang
                     kapwa nilang Pilipino para lamang mapawi ang kanilang personal na interes. Sa kabilang dako, ang mga paring Katoliko naman ay sumisimbolo sa korapsyon at abusadong 
                     kapangyarihan. Ang ideya at pananaw na ito ni Rizal ay di hamak na may impluwensya sa kasalukuyang konteksto, lalong lalo na sa usaping Simbahang Katoliko. 
                </p>

                <p>
                    Dahil ang nobelang ito ni Rizal ay isinulat upang mapatunayan sa mga Espanyol na mayroong orihinal at sariling kultura ang Pilipinas bago pa ang mga pananakop, naging 
                    layunin dito ni Rizal ang panghihikayat sa mga Pilipino na lumaban kontra sa pang-aapi at pangmamaliit ng mga mananakop. Gamit ang ideyang ito, mapupuksa ang pang-aabuso ng mga 
                    korap at abusadong miyembro ng simbahang Katoliko sa pamamagitan ng pagiging mulat at edukado, tulad nina Crisostomo Ibarra na siyang pangitain ni Rizal sa kabataan, Don Rafael Ibarra
                    na siyang tumayo at tumulong sa kaniyang kapwa Pilipino, at Lieutenant Guevarra na siyang nanghamak sa korap at hindi makatarungang gawain ng spanish colonization. 
                </p>
            </div>
        </article>

        </>
    )
}

export default K6Section