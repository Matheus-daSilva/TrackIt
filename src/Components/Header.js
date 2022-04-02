import styled from 'styled-components';
import { useImage } from "../context/Image";

export default function Header(){
    const { image } = useImage();
    return (
        <Top>
            <h2>TrackIt</h2>
            <img src={image} />
        </Top>
    )
}

const Top = styled.header`
position: fixed;
width: 375px;
height: 70px;
left: 0px;
top: 0px;
right: 0px;
display: flex:
align-items: center;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

h2 {
    margin-left: 18px;
    margin-top: 10px;
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
    margin-top: 10px;
    margin-left: 191px;
    border-radius: 98.5px;
}
`