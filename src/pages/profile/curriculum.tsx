import styled from "styled-components"
import { Text } from "../../components/Text";

export const Curriculum = () => {
    return (
        <Wrapper>
            <Text variant="Label" weight={700}>커리큘럼</Text>
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

const Button = styled.button`
    width: 100%;
    height: 57px;
    margin-top: auto;
    background-color: ${({theme}) => theme.colors.main[500]};
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;