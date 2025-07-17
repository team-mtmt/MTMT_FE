import styled from "styled-components"
import { Text } from "../../components/Text";
import NextIcon from "../../assets/imgs/nextButton.svg";
import ChangeIcon from "../../assets/imgs/changeIcon.svg";
import { Toast } from "../../components/toast";
import { useState } from "react";

export const ProfileEdit = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastFadeClass, setToastFadeClass] = useState("fade-in");
    const [isRotating, setIsRotating] = useState(false);

    const handleSaveClick = () => {
        setToastVisible(true);
        setToastFadeClass("fade-in"); 
      
        setTimeout(() => {
          setToastFadeClass("fade-out"); 
        }, 1500);
      
        setTimeout(() => {
          setToastVisible(false); 
        }, 2000);
    };

    const handleRotateClick = () => {
        setIsRotating(true);
        setTimeout(() => {
          setIsRotating(false);
        }, 1000);
    };

    return (
        <Wrapper>
            <SubWrapper>
                <ProfileImg />
                <InputWrapper>
                    <InputBox>
                        <Text variant="Button" color="gray.300">이름</Text>
                        <Input placeholder="손희찬" />
                    </InputBox>
                    <InputBox>
                        <Text variant="Button" color="gray.300">생년월일</Text>
                        <Input placeholder="2000.1.1" />
                    </InputBox>
                </InputWrapper>
                <NavWrapper>
                    <Nav>
                        <Text variant="Caption" color="gray.700">관심 분야 변경</Text>
                        <img src={NextIcon} alt="" />
                    </Nav>
                    <Nav>
                        <Text variant="Caption" color="gray.700">성별 변경</Text>
                        <img src={NextIcon} alt="" />
                    </Nav>
                    <Nav>
                        <Text variant="Caption" color="gray.700">멘티로 전환</Text>
                        <RotatingIcon
                            src={ChangeIcon}
                            alt=""
                            onClick={handleRotateClick}
                            className={isRotating ? "rotate" : ""}
                        />
                    </Nav>
                </NavWrapper>
            </SubWrapper>
            {toastVisible && (
                <ToastWrapper className={toastFadeClass}>
                    <Toast content="변경 사항이 저장되었어요!"/>
                </ToastWrapper>
            )}
            <Button onClick={handleSaveClick}>
                <Text variant="Caption" weight={700} color="white">변경 사항 저장</Text>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 20px 24px;
`;

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ProfileImg = styled.img`
    width: 83px;
    height: 83px;
    background-color: white;
    border-radius: 50px;
    border: 0.2px solid ${({theme}) => theme.colors.gray[300]};
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Input = styled.input`
    display: flex;
    padding: 14px 12px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.colors.gray[200]};
    outline: none;
    font-size: 16px;
    &::placeholder {
        color: ${({theme}) => theme.colors.gray[300]};
    }
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main[500]};
    border: none;
    width: 100%;
    margin-top: auto;
    height: 57px;
    border-radius: 12px;
`;

const ToastWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex: 1;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.fade-in {
        opacity: 1;
    }

    &.fade-out {
        opacity: 0;
    }
`;

const RotatingIcon = styled.img`
  transition: transform 1s ease;
  
  &.rotate {
    transform: rotate(360deg);
  }
`;