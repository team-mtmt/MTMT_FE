import styled from "styled-components"
import CheckIcon from "../assets/imgs/blueCheckIcon.svg";
import { Text } from "./Text";

export const Toast = () => {
    return (
        <ToastWrapper>
            <img src={CheckIcon} alt="" />
            <Text variant="Caption" color="main.500">변경 사항이 저장되었어요!</Text>
        </ToastWrapper>
    )
}

const ToastWrapper = styled.div`
    display: flex;
    padding: 12px 24px;
    border: 1px solid ${({theme}) => theme.colors.main[500]};
    border-radius: 50px;
    gap: 12px;
    align-items: center;
`;