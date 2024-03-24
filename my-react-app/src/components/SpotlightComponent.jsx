
function CharacterSpotlightView(props)
{
    return (
        <>
            <div className="flex flex-row">
                <div className="flex-1">{props.card}</div>
                <div className="flex-1">{props}</div>
            </div>
        </>
    )
}