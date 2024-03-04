export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {

    // const ButtonsContainer = buttonsContainer;

    return (
        <ButtonsContainer>
            <menu>
                {buttons}
            </menu>
            {children}
        </ButtonsContainer>
    )
}