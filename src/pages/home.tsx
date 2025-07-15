import { Text } from "../components/Text"
import styled from "styled-components"

export const Home = () => {
    return (
        <div>
            <Text variant="Title" weight={600}>제목</Text>
            <Example></Example>
        </div>
    )
}

const Example = styled.div`
    background-color: ${({theme}) => theme.colors.main[50]};
    width: 50px;
    height: 50px;
`;