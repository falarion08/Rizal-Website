
function IISection({navListToggle,setnavListToggle,ii_toggle,set_ii_toggle}) {

    const returnSelection = () => {
        setnavListToggle(!navListToggle);
        set_ii_toggle(!ii_toggle)
    } 
  
    return (
      <>
    <div className=" max-h-screen overflow-y-auto bg-[#FFF8ED] relative">
  
    <div className="sticky top-2 mx-10">
        <button className="py-4 px-12 bg-[#642B62] font-bold text-white" onClick={returnSelection}>Back</button>
    </div>
  
      <div className="flex">
  
          <div className="flex-1 text-center text-md w-4/5 m-auto leading-loose p-3">
          <h1 className="text-5xl font-bold text-[#7B2543]">Ang ideya at perspektibo ni Rizal ukol sa napiling paksa</h1>
  
          <hr className="border border-[#7B2543] w-1/3 m-auto my-8"></hr>
          
          <div className=" p-8">
            <p className=" text-[#7B2543] leading-10 tracking-widest">
            Ang ideya at perspektibo ni Rizal tungkol sa pang-aabuso ng kapangyarihan sa loob ng Simbahang Katoliko ay may malaking kahalagahan sa kasalukuyan. 
            Ito ay nagsisilbing gabay para sa bawat indibidwal, lalo na sa mga kabataan, upang masusing suriin ang mga organisasyon at establisimyento—tulad ng
             gobyerno at mga simbahan—na nagtataglay ng kapangyarihan at impluwensya. Sa pamamaraan na ito, matitiyak ng bawat isa kung sila ay tunay na tapat
              sa kanilang mga layunin at walang mga pang-aapi o korapsyon na nangyayari sa loob ng mga institusyon na ito. 
            </p>
            <br/>
            <p className="m-auto text-[#7B2543] leading-10 tracking-widest">
            Bukod dito, ang Simbahang Katolika ay maaaring magkaroon ng pagkakasangkot sa pulitika. Binigyang-diin ni Rizal sa kaniyang mga teksto kung paano maaaring 
            gamitin ng mga Prayle ang relihiyon upang kontrolin at apihin ang mga indibidwal na mas nakabababa sa kanila. Ang ideyang ito ay nagtutulak sa mga tao na 
            maging maingat laban sa anumang pang-aabuso ng mga institusyong relihiyoso para sa pulitikal o pansarili nilang kapakinabangan. 
              </p>  
            <br/>
            <p className="m-auto text-[#7B2543] leading-10 tracking-widest">
            Gamit ang mga nobela ni Rizal, maihahambing ang pang-aabuso ng ibang miyembro ng simbahang Katoliko sa ilang karakter ng Noli Me Tangere at El Filibusterismo. 
            Hindi rin lingid sa ating kaalaman na ang dalawang nobelang ito ni Rizal ay kaniyang isinulat hindi lamang para mapawalang bisa ang akusasyon ng mga Kastila sa
             mga Pilipino at sa bansa, kundi ay pati rin upang mamulat ang kapwa nating Pilipino sa mga pang-aapi ng mga espanyol, kabilang na ang simbahan. Kaya naman, 
             angkop gamitin ang Noli Me Tangere at El Filibusterismo sa pag-aaral ng pang-aabuso ng Simbahang Katoliko dahil tinalakay rin nito ang mga nangyari sa ating nakaraan.
              Maaari ding magbigay linaw ang mga pangyayari sa mga nobelang ito sa mga ginagawa ng simbahang katoliko, na siyang may direktang epekto hindi lamang sa pulitika, kundi 
            ay pati na rin sa ating kasalukuyang komunidad. 
            </p>
            <br/>


          </div>
  
          </div>
  
      
      </div>   
  
    </div>
      </>
    )
  }
  
  export default IISection
  