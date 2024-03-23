import images from "../assets/page2-theme-bg.png"
function QuoteSection() {

  return (
    <>
  <div className="h-screen bg-no-repeat bg-auto bg-center bg-[#642B62] relative" id="get-started" style={{
    backgroundImage:`url('${images}')`
  }}>

    <div className="absolute top-7 w-full">
        <h1 className="text-center text-white m-auto w-4/5 text-4xl font-bold">
            <i>"I'll go where there are no slaves, tyrants or hangmen
            Where faith does not kill and where God alone does reign."</i> -Jose Rizal
        </h1>
    </div>

    <div className="absolute bottom-10">
        <p className="text-white text-center w-4/5 m-auto text-xl text-wrap tracking-wide">
        Ang pamumuno ng mga Kastila sa teritoryo ng kasalukuyang Pilipinas 
        sa nakalipas na 333 taon ay napasailalim sa impluwensya ng relihiyon; 
        patunay nito ang mas malawak na impluwensya ng Simbahang Katoliko 
        kumpara sa mismong pamahalaan—ang estado na tinawag ni Marcelo H. del Pilar
        na "Frailocracia.”
        </p>    
    </div>
  </div>
    </>
  )
}

export default QuoteSection
