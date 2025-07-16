import styled from "styled-components"
import { Text } from "../../components/Text";
import MentoringEndImg from "../../assets/imgs/mentoringEnds.svg";
import { useNavigate } from "react-router-dom";

export const FirstPage = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/secondPage");
    };
    return (
      <Wrapper>
        <SubWrapper>
          <img src={MentoringEndImg} alt="" />
          <TextWrapper>
            <Text variant="Mtitle" color="gray.900" weight={700}>
              1일차가 무사히 끝났어요!
            </Text>
            <Text variant="Mtitle" color="gray.900" weight={700}>
              수고하셨습니다!
            </Text>
          </TextWrapper>
        </SubWrapper>
        <NextButton onClick={handleNext}>
          <Text variant="Caption" color="white" weight={700}>
            다음
          </Text>
        </NextButton>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 24px;
`;

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    flex: 1;
    justify-content: center;
`; 

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NextButton = styled.button`
    /* width: 345px; */
    height: 57px;
    border: none;
    width: 100%;
    border-radius: 12px;
    background-color: ${({theme})=> theme.colors.main[500]};
    margin-top: auto;

`