import styled from "styled-components";

export default function Rules() {
  return (
    <RulesContainer>
      <h2>How to play Dice game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>click on the dice to roll</p>
        <p>
          after rolling dice if selected mnumber is same as dice number then you
          will get the same score as Dice
        </p>
        <p>if your guess is wrong then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  border-radius: 20px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
