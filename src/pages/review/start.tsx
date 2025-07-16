import styled from "styled-components"
import { Text } from "../../components/Text";
import Characters from "../../assets/imgs/characters.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ReviewStart = () => {
    const navigate = useNavigate();
    const [showReviewPrompt, setShowReviewPrompt] = useState(false);
    const [fade, setFade] = useState(true); 
    const [displayPrompt, setDisplayPrompt] = useState(false); 

    useEffect(() => {
        const timer1 = setTimeout(() => setFade(false), 1000);
        const timer2 = setTimeout(() => {
            setDisplayPrompt(true);
            setFade(true);
        }, 1500); 

        const timer3 = setTimeout(() => setShowReviewPrompt(true), 1500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }, []);

    const handleNext = () => {
        navigate('/reviewWrite')
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <img src={Characters} alt="" style={{width: '393px', height: '312px'}} />
                {!displayPrompt ? (
                    <TextWrapper fade={fade}>
                        <Text variant="Mtitle" color="gray.900" weight={700}>
                        일주일 동안
                        </Text>
                        <Text variant="Mtitle" color="gray.900" weight={700}>
                        수고하셨습니다!
                        </Text>
                    </TextWrapper>
                    ) : (
                    <TextWrapper fade={fade}>
                        <Text variant="Mtitle" color="gray.900" weight={700}>이제 멘토님의</Text>
                        <Text variant="Mtitle" color="gray.900" weight={700}>후기를 작성해주세요!</Text>
                    </TextWrapper>
                )}
            </ContentWrapper>
            <ButtonWrapper>
                <Button onClick={handleNext} active={showReviewPrompt}>
                    <Text variant="Caption" weight={700} color="white">다음</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 32px;
`;

const TextWrapper = styled.div<{ fade: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({ fade }) => (fade ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
    padding: 20px 24px;
`;

const Button = styled.div<{ active: boolean }>`
    display: flex;
    margin-top: auto;
    width: 100%;
    height: 57px;
    border: none;
    background-color: ${({ theme, active }) =>
    active ? theme.colors.main[500] : theme.colors.main[200]};
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 20px 24px;
`;