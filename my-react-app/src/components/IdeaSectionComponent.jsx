
function IdeaSection({navListToggle,setnavListToggle,idea_toggle,setIdea_toggle}) {

    const returnSelection = () => {
        setIdea_toggle(!idea_toggle);
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
          <h1 className="text-5xl font-bold text-[#7B2543]">Ang ideya at perspektibo ni Rizal ukol sa napiling paksa</h1>
  
          <hr className="border border-[#7B2543] w-1/3 m-auto my-8"></hr>
          
          <div className=" p-8">
            <p className=" text-[#7B2543] leading-10 tracking-widest">
                Ipinahayag ang mga pananaw ni Rizal sa mga nobela at ibang sulatin niya. Noong Pebrero 22, 1889, mababasa ang relihiyosong perspektibo niya sa kanyang 
                liham para sa mga kadalagahan ng Malolos. “Napagkilala din ninyo na ang utos ng Dios ay iba sa utos ng Pari, na ang kabanalan ay hindi ang matagal na luhod
                mahabang dasal, malalaking kuentas, libaguing kalmin, kundi ang mabuting asal, malinis na loob at matuid na isip.” 
            </p>
            <br/>
            <p className="m-auto text-[#7B2543] leading-10 tracking-widest">
                Naniniwala si Rizal na ang relihiyon ang nagtuturo sa isang tao upang maging mabuti at moral. Subalit, nabigo si Rizal sa kapangyarihan ng simbahan,
                kanilang pagkakasangkot sa pulitika, at pagsasamantala sa mga mahihirap, na pinaniniwalaan niyang labag sa mga turo ng Diyos. Gayunpaman, ang pagpuna ni Rizal ay
                hindi isang pag-atake sa mismong institusyon ng relihiyon, bagkus isang panawagan para sa simbahan na bumalik sa tunay na layunin nito na paglingkuran at iangat ang mga minamaliit at inaapi.
              </p>  
            <br/>
            <p className="m-auto text-[#7B2543] leading-10 tracking-widest">
                Ang pagtuligsa ni Rizal sa pang-aabuso sa relihiyon ay maaaring masuri sa kanyang mga isinulat na aklat, ang Noli me Tangere at El Filibusterimo. Sa mga librong ito binabatikos niya
                ang pang-aabuso ng mga pari ng Simbahang Katoliko, partikular na ang kalupitan at nila sa mga Pilipino, ang pagkumpetensya nito sa mga institusyong pamahalaan at militar ng Espanya, 
                at ang pagpapalaganap ng mga maling ideya upang mapanatili nila ang kanilang kapangyarihan. Una, nakikita ang tinariya at korapsyon laban sa mga Filipino sa pamamagitan ng mga banta ng 
                ekskomunikasyon, parusa, at heresiya. Kasama na rin ang pagnakaw nila sa taumbayan sa pamamagitan ng indulhensiya at pang-aagaw ng lupa. Pangalawa, ang mga kumakatawan sa Simbahang Katoliko
                 ay nakikitang nakikipagkompetisyon sa gobyerno at militar sa pamamagitan ng panunuhol at pagkiling sa mga taong nagbibigay sa kanila ng pera. Sa huli, makikita rin ang mga pamamaraan ng mga
                  pari upang mapanatili ang kanilang kapangyarihan, sa pamamagitan ng paglaganap ng fanatisismo at pamahiin.
            </p>
            <br/>


          </div>
  
          </div>
  
      
      </div>   
  
    </div>
      </>
    )
  }
  
  export default IdeaSection
  