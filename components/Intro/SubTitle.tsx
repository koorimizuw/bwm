import styled from "styled-components"


const SubTitle = styled.div`
    font-family: 'Verdana';
    font-size: 14px;
    color: ${props => props.color ? props.color : '#ccc'};
    font-weight: 600;
    font-style: italic;
    margin: 22px 0;
    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${props => props.color ? props.color : '#ccc'};
        margin-bottom:  10px;
    }
    &::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${props => props.color ? props.color : '#ccc'};
        margin-top:  15px;
    }
`

export default SubTitle