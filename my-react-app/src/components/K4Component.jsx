import angry_ib from "../assets/ibarra_angry.png"

function K4Section(props){

    const returnSelection = () => {
        props.set_k4_toggle(!props.k4_toggle)
        props.setKabanataNavToggle(!props.kabanataNavToggle)

    }
    return (

        <>
        <article className="text-slate-200 border relative">

        <button className="sticky top-5 left-4 reading-list-selection-button" onClick={returnSelection}>Back</button>
            <h1 className="p-10 text-5xl font-extrabold stroke-black text-center">Kabanata 4: Erehe at Filibustero</h1>
            <hr className="border border-black w-3/4 m-auto my-5"/>
            <div className="text-md flex flex-col gap-10 leading-10 font-bold text-slate-600 p-3 text-center"> 
                <p className="indent-3">
                    Isa sa mga teksto na pinili ng pangkat ay ang isa sa mga panimulang kabanata ng Noli Me Tangere; pumapatungkol
                    ito sa mga "Erehe at Filibustero." Nagsimula ang kabanata sa kalagitnaan ng paglalakbay patungo sa pansamantalang
                    silid ni Ibarra. Dito'y ibinahagi sa kanya ni Teniente Guevarraang ispesipikong detalye ng mga pangyayari sa buhay
                    ng kanyang ama bago ang kanyang kamatayan.
                </p>

                <p>
                    Sa kinalap na mga pagsusuri ng iba't-ibang mga sanggunian sa libro at internet, ilan sa mga ito ay nagsasabi na ang 
                    napiling kabanata ay pumapatungkol sa pribilehiyo ng isang dugong-Kastila anuman ang kanyang kalagayan o nararanasan, 
                    tulad ng kung paano ng pinagtatanggol ang isang kobrador kahit sa kanyang kamaliang ginawa. Para naman sa iba, 
                    pumapatungkol ang kabanata sa kasakiman o kayamuan ng tao sa kayamanan. Mula sa iniisip ng pangkat, ang Kabanata 4 ay 
                    nagbibigay-ilaw rin sa kung paano ginamit ang kapangyarihan at relihiyon sa maling pamamaraan upang hindi tuluyang
                    isulong ang tunay na hustisya at kalayaan para sa isang tapat at naglilingkod na mamamayan.
                </p>

                <p>
                    Ang napiling kabanata ay naglalaman ng nagsisilbing panimula sa pagsusuri sa panig ng mambabasa ukol sa katotohanan sa 
                    pagtrato kay Don Rafael sa kanyang mga huling karanasan bago ang kanyang pagkamatay. Kung pagbabasehan ang mga naunang kabanata
                    at ikukumpara ito sa Kabanata 4, makikita ang koneksyon sa kung paanong hindi nabigyan ng hustisya ang pagkamatay 
                    Don Rafael Ibarra, at bakit hinukay pa ito sa utos ni Padre Damaso. Patunay, bago mismo ang pangyayari sa pagitan ni Don Rafael,
                    ang kobrador at ang mga bata ay inilahad muna ni Tenyente Guevarra na may namuo nang tensyon sa pagitan ng Don at ang Padre.
                    Kung itutuloy pa, inilarawan ni Tenyente ang katatagan ni Don sa kanyang prinsipyo at moralidad. Para sa kanya, hindi sapat ang 
                    simpleng "pagtangis ni sa paglilimos sa simbahan" upang patawarin ang isang may sala sa kanyang nagawang pagkakamali bagamat 
                    sobrang bigat nito ay nadadamay ang pamilyang dinulutan ng kasawian. Ipinamalas ito ni Don Rafael sa pamamagitan ng kanyang
                    pagtanggol sa batang pinagtadyakan ng kobrador, na kung saa'y naging dahilan sa di-sinasadyang kamatayan ng dating artilyero. 
                    Kung tutuusin, isang malaking dilemma rin para sa isang tao na makapatay ng kanyang kapwa nang hindi sinasadya, ngunit kailangan
                    niyang harapin ang magiging parusa. Gayunpaman, hindi dahilan ang nagawa ng Don upang tawagin siyang isang erehe at filibustero, 
                    nagamit ang nasabing pangyayari upang isira ang pangalan at reputasyon ng Don. Ang tawagang "erehe" at "filibustero" ay 
                    sinasabing ilan sa mga pinakamabigat na insulto—o desgrasya ayon sa nobela—na maaaring iparatang sa mga mamamayan maski ang 
                    mga maykaya at impluwensya na tumututol sa plano ng gobyerno at ang simbahan.
                </p>

                <img src={angry_ib} width={800} height={400} className="m-auto"/>


                <p>
                    Matapos nito ay sunud-sunod na ang mga nangyari sa Don, mula sa kanyang pagkakulong hanggang sa pagtakwil sa kanya ng lahat ng kanyang
                    mga kayamanan at papeles, at higit sa lahat, ang kanyang kamatayan. Ang tanong: ano ginawa ng simbahan matapos ang mga pangyayaring ito?
                    Ano ang kanilang ginawa kay Don Rafael Ibarra? Dito muli bubuhayin ang inilahad sa mga naunang kabanata tungkol sa kura, ang paghukay sa
                    labi ni Don Rafael—at ang paghagis nito sa ilog. Upang mas maintindihan ang mga nangyari, narito ang isang bidyo ng pagsasadula sa mga nangyari
                    mula sa isa sa mga pumatok na historial na drama ng GMA, “Maria Clara at Ibarra.”
                </p>

                <p>
                    Kaya, ganun na lamang ang pagkakasulat ni Rizal sa napiling kabanata at sa iba pang mga kabanata; kahit ang paksa nito ay tungkol sa isang ginoong may 
                    matatag na prinsipyo laban sa mga mangmang na may pansariling interes, hindi maitatanggi na lihim na inilalarawan ni Rizal na ang pansariling kapangyarihang
                    nakabalot sa pangalan ng relihiyon ay purong kasamaan;<b>tila'y nagmamalinis ang mga tunay na marurumi, habang narurumihan ang iba sa mga tunay na malilinis.</b>
                </p>
            </div>
        </article>

        </>
    )
}

export default K4Section