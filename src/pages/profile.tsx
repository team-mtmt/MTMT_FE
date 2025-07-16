import styled from "styled-components"
import { Text } from "../components/Text";
import RatingImg from "../assets/imgs/ratings/good.svg";
import MapIcon from "../assets/imgs/mapIcon.svg";
import { useState } from "react";
import { ProfileIntro } from "../components/profileInfo";
import { ProfileReview } from "../components/profileInfo";
import { ProfileCurriculum } from "../components/profileInfo";

export const Profile = () => {
    const [selected, setSelected] = useState<number | 0>(0);
    const categories = ['자기소개', '후기', '커리큘럼'];

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
                            <Text variant="Caption">대전 광역시, 중구 문화동</Text>
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
            <BottomWrapper>
                <Button>
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
    background-color: black;
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