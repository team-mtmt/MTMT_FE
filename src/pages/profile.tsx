import styled from "styled-components"
import { Text } from "../components/Text";
import RatingImg from "../assets/imgs/ratings/good.svg";
import MapIcon from "../assets/imgs/mapIcon.svg";
import { useState, useEffect } from "react";
import { ProfileIntro } from "../components/profileInfo";
import { ProfileReview } from "../components/profileInfo";
import { ProfileCurriculum } from "../components/profileInfo";
import { Toast } from "../components/toast";
import { postMentoringApply } from "../apis";
import { getMentoDetail } from "../apis";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const { id } = useParams<{ id: string }>();
    const [toastVisible, setToastVisible] = useState(false);
    const [toastFadeClass, setToastFadeClass] = useState("fade-in");
    const [active, setActive] = useState<boolean>(true);
    const [selected, setSelected] = useState<number | 0>(0);
    const categories = ['자기소개', '후기', '커리큘럼'];
    const [mentor, setMentor] = useState<any>(null);
    const [applyData, setApplyData] = useState({
        mentorId: "mentor-id-123",
        subject: "수학 멘토링",
        startDate: "2025-07-17",
        endDate: "2025-07-17",
    });
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/chatting');
    }

    // const handleApplyClick = async () => {
    //     setActive(false);
    
    //       setToastVisible(true);
    //       setToastFadeClass("fade-in");
    
    //       setTimeout(() => {
    //         setToastFadeClass("fade-out");
    //       }, 1500);
    
    //       setTimeout(() => {
    //         setToastVisible(false);
    //       }, 2000);
    // };

    // useEffect(() => {
    //     if (!id) return;
    //     const fetchMentor = async () => {
    //       try {
    //         const res = await getMentoDetail(id);
    //         setMentor(res.data.mentor);
    //       } catch (error) {
    //         console.error("멘토 프로필 불러오기 실패", error);
    //       }
    //     };
    //     fetchMentor();
    //   }, [id]);

    //   useEffect(() => {
    //     if (mentor?.id) {
    //       setApplyData((prev) => ({ ...prev, mentorId: mentor.id }));
    //     }
    //   }, [mentor]);
    

    const handleApplyClick = () => {
        setToastVisible(true);
        setToastFadeClass("fade-in");
      
        setTimeout(() => {
          setToastFadeClass("fade-out");
        }, 1500);
      
        setTimeout(() => {
          setToastVisible(false);
        }, 2000);
      };

    return (
        <Wrapper>
            <Container>
                <SubContainer>
                    <SubWrapper>
                        <TitleWrapper>
                            <NameWrapper>
                                <NameInfo>
                                    <Text variant="Label" weight={700}>손희찬</Text>
                                    <img src={RatingImg} alt="" />
                                </NameInfo>
                                <Text variant="Caption" color="gray.700">남자 | 18세</Text>
                            </NameWrapper>
                            <ProfileImg />
                        </TitleWrapper>
                        <TagWrapper>
                            <TagBox>
                                <Text variant="Caption">⚽️</Text>
                                <Text variant="Caption">축구</Text>
                            </TagBox>
                        </TagWrapper>
                        <LocationWrapper>
                            <LocationTitle>
                                <img src={MapIcon} alt="" />
                                <Text variant="Caption" color="gray.400">지역</Text>
                            </LocationTitle>
                            <Text variant="Caption">대전광역시, 유성구</Text>
                        </LocationWrapper>
                    </SubWrapper>
                    <Line />
                    <SelectBarWrapper>
                        {categories.map((content, idx) => (
                            <SelectButton $selected={selected === idx} key={idx} onClick={() => setSelected(idx)}>
                                <Text color={selected === idx ? 'black' : 'gray.500'} variant="Caption">{content}</Text>
                            </SelectButton>
                        ))}
                    </SelectBarWrapper>
                </SubContainer>
                <ContentWrapper>
                    {selected === 0 && <ProfileIntro />}
                    {selected === 1 && <ProfileReview />}
                    {selected === 2 && <ProfileCurriculum />}
                </ContentWrapper>
            </Container>
            {toastVisible && (
                <ToastContainer className={toastFadeClass}>
                    <Toast content="신청이 완료되었습니다!" />
                </ToastContainer>
            )}
            <BottomWrapper>
                <Button onClick={handleApplyClick}>
                    <Text variant="Caption" color="white">신청하기</Text>
                </Button>
            </BottomWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 46px 24px 26px 24px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const NameInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ProfileImg = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: white;
    border: 0.2px solid ${({theme}) => theme.colors.gray[300]};
`;

const TagWrapper = styled.div`
    margin-top: 11px;
`;

const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
`;

const LocationTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const TagBox = styled.div`
    display: flex;
    width: fit-content;
    padding: 6px 12px;
    border: 1px solid ${({theme}) => theme.colors.main[500]};
    border-radius: 50px;
    gap: 8px;
`;

const Line = styled.div`
    height: 10px;
    width: 100%;
    background-color: #F8F8F8;
`;

const SelectBarWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    width: 100vw;
    justify-content: space-between;
`;

const SelectButton = styled.div<{$selected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-bottom: ${({$selected}) => ($selected ? '1px solid #2C6FED' : 'none')};
`;

const BottomWrapper = styled.div`
    padding: 12px 24px 20px 24px;
`;

const Button = styled.button`
    width: 100%;
    height: 57px;
    border: none;
    background-color: ${({theme}) => theme.colors.main[500]};
    border-radius: 10px;
    outline: none;
`;

const ContentWrapper = styled.div`
    padding: 12px 24px;
    flex: 1;
    overflow-y: auto;
`;

const ToastContainer = styled.div`
    position: fixed;
    bottom: 90px; 
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.fade-in {
        opacity: 1;
    }

    &.fade-out {
        opacity: 0;
    }
`;