import styled from "styled-components"
import { Text } from "../components/Text";
import { Tag } from "../components/tag";
import { Message } from "../components/message";
import SendIcon from "../assets/imgs/sendIcon.svg";
import { useEffect, useState, useRef } from "react";
import { putMentoringEnd } from "../apis";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import Img from "../assets/imgs/testImg.svg";

export const Chatting = () => {
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(false);
    const mentoringId = "mentoring-id-123";
    const [finishCount, setFinishCount] = useState(0); 
    const [waitingForOther, setWaitingForOther] = useState(false);
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");
    const socketRef = useRef<any>(null);
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

    const token = localStorage.getItem("accessToken");

    const [messages, setMessages] = useState<{ id: number; isMine: boolean; text: string }[]>([]);

    const handleFinish = async () => {
        if (loading) return;
        setLoading(true);
      
        try {
          const res = await putMentoringEnd(mentoringId);
          const { waitingForOther } = res.data;
      
          setFinishCount(1);
          setWaitingForOther(waitingForOther);
      
          if (!waitingForOther) {
            navigate('/firstPage');
          }
        } catch (error) {
          console.error("멘토링 종료 실패", error);
          navigate('/firstPage');
        } finally {
          setLoading(false);
          navigate('/firstPage');
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    
    useEffect(() => {
        // 소켓 연결
        const socket = io("http://localhost:3000", {
          auth: { token },
          transports: ["websocket", "polling"],
        });
        socketRef.current = socket;
    
        socket.on("connect", () => {
          console.log("✅ Socket connected:", socket.id);
          // 채팅방 입장 이벤트
          socket.emit("join-chat", { mentoringId });
        });
    
        socket.on("connect_error", (error: Error) => {
          console.error("❌ Connection failed:", error.message);
          if (error.message === "Authentication error") {
            // 토큰 재발급 or 로그아웃 처리 등
            alert("인증에 실패했습니다. 다시 로그인 해주세요.");
          }
        });
    
        socket.on("disconnect", (reason: string) => {
          console.log("🔌 Disconnected:", reason);
        });
    
        // 서버에서 메시지 받을 때 이벤트
        socket.on("receive-message", (data: { mentoringId: string; message: string; senderId: string }) => {
          // 메시지 받으면 messages 상태에 추가 (내가 보낸 메시지 아니면 isMine: false)
          setMessages((prev) => [
            ...prev,
            { id: Date.now(), isMine: false, text: data.message },
          ]);
        });
    
        return () => {
          socket.emit("leave-chat", { mentoringId });
          socket.disconnect();
        };
    }, [mentoringId, token]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;
    
        // 소켓으로 메시지 보내기
        socketRef.current.emit("send-message", {
          mentoringId,
          message: inputText,
        });
    
        // 내가 보낸 메시지 화면에 바로 보여주기
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), isMine: true, text: inputText },
        ]);
        setInputText("");
    
    };


    return (
        <Wrapper>
            <SubWrapper>
                <TopWrpaper>
                    <ProfileWrapper>
                        <ProfileImg src={Img} />
                        <NameWrapper>
                            <Text variant="Caption">손희찬</Text>
                        </NameWrapper>
                    </ProfileWrapper>
                    <RightWrapper>
                        <Tag />
                    </RightWrapper>
                </TopWrpaper>
                <FinishBox>
                    <TextWrapper>
                        <Text variant="Caption">마무리 하기</Text>
                        <Text variant="Caption" color="gray.700">({finishCount}/2)</Text>
                    </TextWrapper>
                    <FinishButton onClick={handleFinish} disabled={loading}>끝내기</FinishButton>
                </FinishBox>
                <ContentWrapper>
                    <DateLine>
                        <DateBox>
                            <Text variant="Button" color="gray.200">{formattedDate}</Text>
                        </DateBox>
                    </DateLine>
                    {messages.map((msg, index) => {
                        const prev = messages[index - 1];
                        const isSameSender = prev && prev.isMine === msg.isMine;
                        const marginTop = isSameSender ? 4 : 16;

                        return (
                            <Message key={`${index}-${msg.text}`} isMine={msg.isMine} marginTop={marginTop}>
                            {msg.text}
                            </Message>
                        );
                    })}
                    <div ref={bottomRef} />
                </ContentWrapper>
            </SubWrapper>
            <BottomWrapper>
                <Input  placeholder="메시지 입력 ..." value={inputText} onChange={(e) => setInputText(e.target.value)}></Input>
                <Link to={'/firstPage'}></Link>
                <SendButton onClick={handleSendMessage}>
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
    height: 100%;
    overflow-y: auto;
`;

const TopWrpaper = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 24px 7px 12px;
    justify-content: space-between;
    border-bottom: 0.2px solid ${({theme}) => theme.colors.gray[200]};
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ProfileImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    border: 0.2px solid ${({theme}) => theme.colors.gray[300]};
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

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    align-items: center;
`;

const FinishBox = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 0.4px solid ${({theme}) => theme.colors.gray[200]};
    border-top: 0.4px solid ${({theme}) => theme.colors.gray[200]};
    padding: 10px 24px;
    height: 47px;
    width: 100%;
    gap: 8px;
    position: sticky;
    top: 46px; 
    background-color: white;
    z-index: 9;
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

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
`;

const FinishButton = styled.button`
    width: 62px;
    height: 27px;
    border-radius: 50px;
    background-color: ${({theme}) => theme.colors.main[500]};
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    color: white;
`;