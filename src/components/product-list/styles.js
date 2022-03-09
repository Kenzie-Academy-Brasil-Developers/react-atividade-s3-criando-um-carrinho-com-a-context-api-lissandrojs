import styled from "styled-components"


export const ContainerVitrine = styled.div`
    background-color:#5d5c5c ;
    width:100% ;
    border-radius: 6px;
   li{
       display:flex ;
       list-style:none ;
       justify-content: space-around;
        align-items: center;
        align-content: center;
        padding: 10px;
    }
    button{
        color:white ;
        color:white;
        border-radius:6px ;
        border:none ;
        background-color: grey;
    }

`

export const ContainerCarrinho = styled.div`
    width: 100% ;
    background-color:#929292 ;
    border-radius:8px ;
    li{
       display:flex ;
       list-style:none ;
       justify-content: space-around;
        align-items: center;
        align-content: center;
        padding: 10px;
    }
    button{
        border:none ;
        color:white ;
        background-color: grey;
        border-radius:6px ;
    }

`