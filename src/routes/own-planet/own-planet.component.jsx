import { useState, useEffect } from "react";

const OwnPlanet = () => {
    const [searchField, setSearchField] = useState('')
    // useEffect(()=> {
    //     fetch...
    // }, [searchField])

    // const onSearchChange = (event) => {

    // }
    return (
        <>
            <h1>Let's find your favorite planet</h1>
            {/* form for sending data to the API  */}
            <form action="">
                <input type="text" name="searchField" value="searchField" placeholder="planet name" />
                <button >Submit</button>
            </form>
        </>
    )
}

export default OwnPlanet;