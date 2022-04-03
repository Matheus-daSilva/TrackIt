import styled from 'styled-components';
import { useImage } from "../context/Image";

export default function Header(){
    const { image } = useImage();
    return (
        <Top>
            <h2>TrackIt</h2>
            <img src={image} alt="usuario"/>
        </Top>
    )
}

const Top = styled.header`
position: fixed;
width: 100%;
height: 70px;
left: 0px;
top: 0px;
right: 0px;
z-index: 3;
display: flex;
justify-content: space-between;
align-items: center;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

h2 {
    margin-left: 18px;
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
}

img {
    width: 51px;
    height: 51px;
    margin-right: 9px;
    border-radius: 98.5px;
}
`