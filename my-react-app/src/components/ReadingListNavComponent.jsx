import images from "../assets/KI_SI1.jpeg"

function ReadingListNav({navListToggle,setnavListToggle,KI_toggle, setKI_toggle,idea_toggle, setIdea_toggle,ii_toggle,set_ii_toggle}){

    const setToggleNav = (e) => {
        setnavListToggle(!navListToggle);

        if (e.target.id == "rl-1")
        {
            setKI_toggle(!KI_toggle);
        }

        else if (e.target.id == "rl-2")
        {
            setIdea_toggle(!idea_toggle);
        }

        else{
            set_ii_toggle(!ii_toggle);
        }
    }

    return(
        <>
            <div className="h-[87vh] bg-auto bg-[#FFF8ED] flex">
                <div className="flex-1"> 
                    <h1 className="text-center my-20 text-5xl font-extrabold text-[#642B62]">Mga Babasahin</h1>
                    <div className="flex flex-col w-3/4 m-auto gap-10 items-center">
                        <button className="reading-list-selection-button" id="rl-1" onClick={(e) => setToggleNav(e)}>Kaligirang impormasyon</button>
                        <button className="reading-list-selection-button" id = "rl-2" onClick={(e) => setToggleNav(e)}>Ang ideya at perspektibo ni Rizal ukol sa napiling paksa</button>
                        <button className="reading-list-selection-button" id ="rl-3" onClick={(e) => setToggleNav(e)}>Kahalagahan ng ideya at perspektibo ni Rizal</button>
                
                    </div>
                </div>

                <div className="flex-1 bg-no-repeat bg-cover" style={{backgroundImage:`url('${images}')`}}></div>    

                    {/* <div className="transform bg-black w-32 h-12 hover:opacity-0 hover:w-64 transition-all delay-100 duration-700 ease-in-out"></div> */}
            </div>
  
        </>
    ) 

    
}

export default ReadingListNav;