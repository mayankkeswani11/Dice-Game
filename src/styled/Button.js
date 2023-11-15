import styled from "styled-components";

export const Button= styled.button`
color: white;
padding:10px 18px;
background-color:black;
border-radius:5px;
min-width: 220px;
border:none;
font-size: 16px;
//vo niche hover ke vaja se hil raha hai na uske liye ye border di hai
border: 1px solid transparent;
//vapas aate time bhi same behvae karna chaiye
transition:0.4s background ease-in;

cursor: pointer;
&:hover{
    background-color: #ffffff;
    color: black;
    border: 1px solid black;
    transition:0.3s background ease-in;
}
`;

export const OutlineButton= styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
}
`;