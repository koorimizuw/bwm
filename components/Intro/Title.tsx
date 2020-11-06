import styled from "styled-components"


const Title = styled.div`
    margin-top: 10px;
    font-weight: 600;
    font-family: YuGothic;
    font-size: 36px;
    color: ${props => props.color ? props.color : '#000'};
    @media (max-width: 480px) {
        font-size: 24px;
    }
`

export default Title