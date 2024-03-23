import images from "../assets/Home.png"
function LandingSection() {

  return (
    <>
  <div className="h-[96vh] bg-no-repeat bg-auto bg-center bg-[#f5f3ff] relative" style={{
    backgroundImage:`url('${images}')`
  }}>
    <span className="absolute inset-x-4 text-center bottom-40">
      <a href="#get-started">
        <button className="border border-black inline-block bg-[#B093A8] text-white text-center w-48 h-12 font-bold">Saliksikin</button>
      </a>
    </span>
    
  </div>
    </>
  )
}

export default LandingSection
