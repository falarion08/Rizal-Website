
function KI_Section({navListToggle,setnavListToggle,KI_toggle,setKI_toggle}) {

  const returnSelection = () => {
    setKI_toggle(!KI_toggle);
    setnavListToggle(!navListToggle)
  } 

  return (
    <>
  <div className=" max-h-screen overflow-y-auto bg-[#FFF8ED] relative">

  <div className="sticky top-2 mx-10">
      <button className="py-4 px-12 bg-[#642B62] font-bold text-white" onClick={returnSelection}>Back</button>
  </div>

    <div className="flex">

        <div className="flex-1 text-center text-md w-4/5 m-auto leading-loose p-3">
        <h1 className="text-5xl font-bold text-[#7B2543]">Kaligirang Impormasyon</h1>

        <hr className="border border-[#7B2543] w-1/3 m-auto my-8"></hr>
        
        <div className=" p-8">
          <p className=" text-[#7B2543] leading-10 tracking-widest">
              Ang pamumuno ng mga Kastila sa teritoryo ng kasalukuyang Pilipinas sa nakalipas na 333 taon ay napasailalim sa impluwensya ng relihiyon;
              patunay nito ang mas malawak na impluwensya ng Simbahang Katoliko kumpara sa mismong pamahalaan—ang estado na tinawag ni Marcelo H. del Pilar na "Frailocracia.”
              Sa kabila ng misyon na palawakin ang Kristiyanismo at panatilihin ang pananampalatayang Katolisismo, tila'y pangngalan na lamang ang salitang “Kristiyano” para sa mga nagtataguyod nito; ibig sabihin
              ay yaong mga itinuturing ang kanilang sarili bilang tapat ay nag-aangking mga tagasunod ni Kristo ngunit itinataguyod ang isang pamumuhay na salungat sa itinuturo sa Bibliya. Sa kadahilanang ito,
              hindi nakakagulat na ang mga nasa posisyon sa Simbahan tulad ng mga prayle ay ginagamit ang relihiyon upang maitaguyod ang kanilang kahigitan o superyoridad sa mga mamamayang walang kapangyarihan.
          </p>
          <br/>
          <p className="m-auto text-[#7B2543] leading-10 tracking-widest">
          Ito ang pagkakalarawan sa mga prayle mula sa perspektibo ng mga tulad ni Rizal. Makikita sa dalawang nobela kung paano ihinabi ang mga tauhan 
              at banghay upang maipakita sa mga mambabasa ang kritisismo ni Rizal laban sa mga gumagamit ng relihiyon para sa pansariling interes. Hati ang 
              publiko ukol sa kanilang reaksyon sa pagkabasa ng dalawang nobela, at maging sa diskusyon ng pagpasa ng Batas Rizal ay nagkaroon ng pagtatalo 
              sa kung bakit o bakit hindi dapat i-mandato ang pag-aaral sa dalawang nobela sa mga paaralan. Maging sa ilan sa mga turo ng Katekismo sa kasalukuya'y kinakatuwiran 
              ang pakikibahagi nila Rizal at del Pilar sa mga Mason bilang ugat sa pagbuo ng poot laban sa Simbahang Katolika. Habang katuwiran ng Simbahan na ang mga naganap ukol 
              sa pang-aabuso ng mga relihiyoso ay para sa ika-19 na siglo lamang, makikita sa reyalidad ng kasalukuyang Pilipinas ang patuloy na pang-aabuso ng relihiyon—sa iba't-ibang 
              sekta o paniniwala, hindi lamang limitado sa Katolisismo—na siyang sagabal sa pagtataguyod ng hustisya sa mga nangangailangan nito.    
          </p>  
        </div>

        </div>

    
    </div>   

  </div>
    </>
  )
}

export default KI_Section
