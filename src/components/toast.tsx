import styled from "styled-components"
import CheckIcon from "../assets/imgs/blueCheckIcon.svg";
import { Text } from "./Text";

interface ToastType {
    content?: string;
}

export const Toast = ({content}: ToastType) => {
    return (
        <ToastWrapper>
            <img src={CheckIcon} alt="" />
            <Text variant="Caption" color="main.500">{content}</Text>
        </ToastWrapper>
    )
}

const ToastWrapper = styled.div`
    display: flex;
    padding: 12px 24px;
    border: 1px solid ${({theme}) => theme.colors.main[500]};
    border-radius: 50px;
    width: 260px;
    gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: white;
`;