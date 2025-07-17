import styled from "styled-components"
import { Text } from "../components/Text";
import { useState } from "react";
import RatingImg from "../assets/imgs/ratings/veryGood.svg";
import { Tag } from "../components/tag";
import { Link } from "react-router-dom";
import { getMatchingMento } from "../apis";
import { useEffect } from "react";
import { categoryLabels } from "../apis/type";
import { ratingIcons } from "../apis/type";
import { MentorsResponse } from "../apis/type";

export const Matching = () => {
    const [selected, setSelected] = useState<number | 0>(0);
    const [mentors, setMentors] = useState<MentorsResponse>({});

    const categories = Object.keys(mentors);

    useEffect(() => {
        const fetchMentors = async () => {
        try {
        const res = await getMatchingMento();
        setMentors(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    fetchMentors();
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
    
        if (token) {
          localStorage.setItem("token", token);
          console.log("토큰 저장됨:", token);
        }
    }, []);

    const selectedCategory = categories[selected] || "";
    const selectedMentors = mentors[selectedCategory] || [];

    const getRealImgUrl = (url: string | null) => {
        if (!url) return RatingImg; // 기본 이미지 대체
      
        // Imgur 링크인 경우
        if (url.includes("imgur.com") && !url.includes("i.imgur.com")) {
          const id = url.split("/").pop(); // "54lBcBj"
          return `https://i.imgur.com/${id}.jpg`;
        }
      
        return url;
    };

    return (
        <Wrapper>
            <TextWrapper>
                <Text variant="Stitle" weight={700}>회원님에게</Text>
                <Text variant="Stitle" weight={700}>딱 맞는 멘토분들을 찾았어요!</Text>
            </TextWrapper>
            <SelectBarWrapper>
                {categories.map((category, idx) => (
                        <SelectButton
                        $selected={selected === idx}
                        key={category}
                        onClick={() => setSelected(idx)}
                        >
                        <Text color={selected === idx ? "black" : "gray.500"} variant="Caption">
                            {categoryLabels[category] ?? category}
                        </Text>
                        </SelectButton>
                    )
                )}
            </SelectBarWrapper>
            <ContentBoxWrapper>
            {selectedMentors.map((mentor) => (
            <Link to={`/profile/${mentor.id}`} key={mentor.id}>
              <ContentBox>
                <Picture src={getRealImgUrl(mentor.thumbnail)}/>
                <ContentWrapper>
                  <NameWrapper>
                    <Text variant="Caption">{mentor.name}</Text>
                    <img src={ratingIcons[mentor.rating_section] ?? RatingImg} alt={`${mentor.rating_section} rating`} />
                  </NameWrapper>
                  <Text color="gray.700" variant="Button">
                    {mentor.location}
                  </Text>
                  <Tag />
                </ContentWrapper>
              </ContentBox>
            </Link>
          )
        )}
            </ContentBoxWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
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

const ContentBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ContentBox = styled.div`
    display: flex;
    padding: 10px 12px;
    gap: 12px;
`;

const Picture = styled.img`
    width: 60px;
    height: 60px;
    border: 0.2px solid ${({theme}) => theme.colors.gray[300]};
    border-radius: 4px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;