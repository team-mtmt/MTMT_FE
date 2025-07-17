import styled from "styled-components"
import { Text } from "./Text";

type ReviewBoxProps = {
    children: React.ReactNode;
    selected: boolean;
    onClick: () => void;
};

export const ReviewBox = ({ children, selected, onClick }: ReviewBoxProps) => {
    return (
        <ReviewBoxWrapper $selected={selected} onClick={onClick}>
            <Text variant="Button" color={selected ? "black" : "gray.700"}>{children}</Text>
        </ReviewBoxWrapper>
    )
}

const ReviewBoxWrapper = styled.div<{ $selected: boolean }>`
    display: flex;
    padding: 8px 12px;
    border: 0.8px solid
        ${({ $selected, theme }) =>
            $selected ? theme.colors.main[500] : theme.colors.gray[300]};
    border-radius: 0px 8px 8px 8px;
    background-color: ${({ $selected }) => ($selected ? "#ECF3FF" : "transparent")};
    width: fit-content;
`;