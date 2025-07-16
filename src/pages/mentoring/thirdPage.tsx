import styled from "styled-components"
import ExpIcon from "../../assets/imgs/expIcon.svg";
import { Text } from "../../components/Text";

export const ThirdPage = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <img src={ExpIcon} alt="" />
                <TextWrapper>
                    <Text variant="Mtitle" color="main.500" weight={700}>경험치 상승!</Text>
                    <Text variant="Mtitle" color="gray.900" weight={700}>+ 50 exp를 얻었어요!</Text>
                </TextWrapper>
            </ContentWrapper>
            <Button>
                <Text variant="Caption" weight={700} color="white">확인</Text>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    flex: 1;               
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    gap: 87px;
    width: 100%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    margin-top: auto;
    width: 100%;
    height: 57px;
    border: none;
    background-color: ${({theme}) => theme.colors.main[500]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;