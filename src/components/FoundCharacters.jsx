import { 
    createContext, 
    useContext,
    useReducer 
} from "react";
import PropTypes from "prop-types"

const FoundCharactersContext = createContext()
const FoundCharactersDispatchContext = createContext(null);


function FoundCharactersProvider({children}){
    const [foundCharacters, dispatch] = useReducer(foundNamesReducer,[])

    return(
        <FoundCharactersContext.Provider value={foundCharacters}>
            <FoundCharactersDispatchContext.Provider value={dispatch}>
                {children}
            </FoundCharactersDispatchContext.Provider>
        </FoundCharactersContext.Provider>
    )
}

function useFoundCharacters(){
    return useContext(FoundCharactersContext)
}

function useFoundCharactersDispatch(){
    return useContext(FoundCharactersDispatchContext)
}

function foundNamesReducer(foundCharacters, action){
    switch(action.type  ){
        case 'found':
            return [...foundCharacters, action.name]
        case 'clear':
            return []   
        default:
            throw new Error("Unknown Action: " + action.type)
    }   
}

FoundCharactersProvider.propTypes = {
    children: PropTypes.array
}

export {
    FoundCharactersProvider,
    useFoundCharacters,
    useFoundCharactersDispatch
}