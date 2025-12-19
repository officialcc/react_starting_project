export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    // const ButtonsContainer = buttonsContainer; // <- Either use a const or directly set Prop (starting with Upper Case character)
    // ButtonsContainer = "menu" <-- the default ButtonsContainer if not specified will be "menu" tags                                                                                              
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}