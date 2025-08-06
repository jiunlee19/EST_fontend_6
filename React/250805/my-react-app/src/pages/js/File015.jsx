import styled from "styled-components";

const TitleSection = styled.h1`
    color: ${(props) => props.color || "blue"};
`;

const StyledHeader = styled.header`
    background-color: lightgray;
    padding: 10px;
`;

function File015() {
    return (
        <>
            <TitleSection>안녕하세요</TitleSection>
            <header>
                <nav>
                    <ul>
                        <li></li>
                        <a href=""></a>
                        <li></li>
                        <a href=""></a>
                        <li></li>
                        <a href=""></a>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default File015;
