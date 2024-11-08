const { createContext, useState, useContext } = require("react");

const CompilerContext = createContext({
    openCompiler: undefined,
    setOpenCompiler: undefined,
})

export function CompilerContextProvider({ children }) {
    const [openCompiler, setOpenCompiler] = useState(false)

    return (
        <CompilerContext.Provider value={{ openCompiler, setOpenCompiler }}>
            <>
                {
                    openCompiler &&
                        <div style={{ width: "100%", top: "10%", left: 0, position: "fixed" }}>
                            <div
                                style={{ 
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "end",
                                    justifyContent: "end"
                                }}
                            >
                                <button 
                                    style={{ 
                                        backgroundColor: "#FF0000", 
                                        paddingTop: "6px",
                                        paddingBottom: "6px",
                                        paddingRight: "12px", 
                                        paddingLeft: "12px", 
                                        color: "white", 
                                        borderTopLeftRadius: "12px",
                                        borderTopRightRadius: "12px", 
                                        fontSize: "14px",
                                    }}
                                    onClick={() => setOpenCompiler(false)}
                                >
                                    Fechar
                                </button>
                            </div>
                            <iframe frameBorder="0" height="700px" width="100%" 
                                src="https://onecompiler.com/embed/c?theme=dark&hideLanguageSelection=true">
                            </iframe>    
                        </div>
                }
                { children }
            </>
        </CompilerContext.Provider>
    )
}

export function useCompilerContext() {
    const context = useContext(CompilerContext)

    return context
}
