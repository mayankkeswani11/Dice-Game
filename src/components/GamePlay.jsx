import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


export default function GamePlay() {
  const [selectedNumber, setSelectednumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);

  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const GenerateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore =()=>{
    setScore(0);
  }
  const roleDice = () => {
    if (!selectedNumber) {
      setError("you have not selected the number");
      return;
    }
    let getRandom = GenerateRandomNumber(1, 7);
    setcurrentDice((prev) => getRandom);

    if (selectedNumber === getRandom) {
      setScore((prev) => prev + getRandom);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectednumber(undefined);
  };

  const [showRules,SetShowRules]=useState(false);
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectednumber={setSelectednumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
        onClick={()=>SetShowRules((prev)=>!prev)}
        >{showRules?"hide":"show"} rules</Button>
      </div>
      {showRules&&<Rules/>}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
