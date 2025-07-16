import styled from "styled-components"
import { Text } from "../../components/Text";

export const ProfileIntroEdit = () => {
    return (
        <Wrapper>
            <Text variant="Label" weight={700}>자기소개</Text>
            <TextAreaBox>
                <TextArea placeholder="자기소개를 구체적으로 작성해주세요."></TextArea>
            </TextAreaBox>
            <Button>
                <Text variant="Caption" weight={700} color="white">작성 완료</Text>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px 20px 24px;
    height: 100vh;
`;

const TextAreaBox = styled.div`
    width: 100%;
    padding: 16px;
    height: 288px;
    background-color: #F8F8F8;
    border-radius: 4px;
    margin-top: 12px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
    border: none;
    font-family: 'Pretendard', sans-serif;
    outline: none;

    &::placeholder {
        font-size: 12px;
        color: ${({theme}) => theme.colors.gray[700]};
    }
`;

const Button = styled.button`
    width: 100%;
    height: 57px;
    border: none;
    background-color: ${({theme}) => theme.colors.main[500]};
    border-radius: 12px;
    margin-top: auto;
    align-items: center;
    justify-content: center;
`;