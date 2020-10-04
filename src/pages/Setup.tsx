import React, { useContext } from "react";
import { setupContext } from "../context/SetupContext"

// Import Setup
import { UserStep } from './setup/UserStep'
import { BalanceStep } from './setup/BalanceStep'
import { GroupStep } from './setup/GroupStep'

const Setup = () => {
    const useSetup = () => useContext(setupContext);
    const setup = useSetup()!;

    switch (setup.setup.step) {
        case 1:
            return (<UserStep></UserStep>)
        
        case 2:
            return (<BalanceStep></BalanceStep>)
        
        case 3:
            return (<GroupStep></GroupStep>)
    
        default:
            return (<div></div>)
    }
}

export default Setup;