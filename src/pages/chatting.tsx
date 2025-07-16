import styled from "styled-components"
import { Text } from "../components/Text";
import RatingImg from "../assets/imgs/ratings/veryGood.svg";
import { Tag } from "../components/tag";
import { Message } from "../components/message";
import SendIcon from "../assets/imgs/sendIcon.svg";

const messages = [
    { id: 1, isMine: false, text: "안녕하세요." },
    { id: 2, isMine: false, text: "오늘도 좋은 하루 보내세요." },
    { id: 3, isMine: true, text: "감사합니다." },
];

export const Chatting = () => {
    return (
        <Wrapper>
            <SubWrapper>
                <TopWrpaper>
                    <ProfileWrapper>
                        <ProfileImg />
                        <NameWrapper>
                            <Text variant="Caption">손희찬</Text>
                            <img src={RatingImg} alt="" />
                        </NameWrapper>
                    </ProfileWrapper>
                    <RightWrapper>
                        <TimeBox>29:57</TimeBox>
                        <Tag />
                    </RightWrapper>
                </TopWrpaper>
                <ContentWrapper>
                    <RespectBox>
                        <Text variant="Button" color="white">서로 존중하고 배우는 대화를 진행 해주세요.</Text>
                    </RespectBox>
                    <DateLine>
                        <DateBox>
                            <Text variant="Button" color="gray.200">7월 15일</Text>
                        </DateBox>
                    </DateLine>
                    {messages.map((msg, index) => {
                        const prev = messages[index - 1];
                        const isSameSender = prev && prev.isMine === msg.isMine;
                        const marginTop = isSameSender ? 4 : 16;

                        return (
                            <Message key={msg.id} isMine={msg.isMine} marginTop={marginTop}>
                                {msg.text}
                            </Message>
                        );
                    })}
                </ContentWrapper>
            </SubWrapper>
            <BottomWrapper>
                <Input placeholder="메시지 입력 ..."></Input>
                <SendButton>
                    <img src={SendIcon} alt="" />
                </SendButton>
            </BottomWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopWrpaper = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 24px 7px 12px;
    justify-content: space-between;
    border-bottom: 0.2px solid ${({theme}) => theme.colors.gray[200]};
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ProfileImg = styled.div`
    width: 32px;
    height: 32px;
    background-color: black;
    border-radius: 50px;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const TimeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.colors.main[500]};
    border-radius: 50px;
    width: 113px;
    height: 21px;
    color: ${({theme}) => theme.colors.main[500]};
    font-size: 11px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    align-items: center;
`;

const RespectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.colors.main[200]};
    padding: 11px 27px;
    width: fit-content;
    background-color: ${({theme}) => theme.colors.main[300]};
    border-radius: 50px;
`;

const DateLine = styled.div`
    display: flex;
    width: 100%;
    height: 1px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray[200]};
    margin-top: 18px;
    margin-bottom: 18px;
    position: relative;
`;

const DateBox = styled.div`
    background-color: white;
    height: 14px;
    position: absolute;
    left: calc(50% - 34px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
`;

const BottomWrapper = styled.div`
    display: flex;
    padding: 6px 16px;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
    border-top: 0.2px solid ${({theme}) => theme.colors.gray[200]};
`;

const Input = styled.input`
    padding: 11px 16px;
    border-radius: 21px;
    font-size: 12px;
    border: none;
    background-color: #F8F8F8;
    outline: none;
    height: 35px;
    flex: 1;
`;

const SendButton = styled.div`
    width: 50px;
    height: 35px;
    border-radius: 21px;
    background-color: ${({theme}) => theme.colors.main[500]};
    display: flex;
    align-items: center;
    justify-content: center;
`;