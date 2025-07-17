import styled from "styled-components"
import { Text } from "../components/Text";
import Green from "../assets/imgs/greenCharacter.svg";
import { useNavigate } from "react-router-dom";

export const StartFindMento = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/findMento");
    };
    return (
      <Wrapper>
        <SubWrapper>
          <img src={Green} alt="" />
          <TextWrapper>
            <Text variant="Mtitle" color="gray.900" weight={700}>
              회원님의 멘토를
            </Text>
            <Text variant="Mtitle" color="gray.900" weight={700}>
              찾았어요!
            </Text>
          </TextWrapper>
        </SubWrapper>
        <NextButton onClick={handleNext}>
          <Text variant="Caption" color="white" weight={700}>
            확인
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