import styled from "styled-components"
import { Text } from "../components/Text";
import { useState } from "react";
import RatingImg from "../assets/imgs/ratings/veryGood.svg";
import { Tag } from "../components/tag";

export const Matching = () => {
    const [selected, setSelected] = useState<number | 0>(0);
    const categories = ['운동', '음악', '미술'];
    
    return (
        <Wrapper>
            <TextWrapper>
                <Text variant="Stitle" weight={700}>회원님에게</Text>
                <Text variant="Stitle" weight={700}>딱 맞는 멘토분들을 찾았어요!</Text>
            </TextWrapper>
            <SelectBarWrapper>
                {categories.map((content, idx) => (
                    <SelectButton $selected={selected === idx} key={idx} onClick={() => setSelected(idx)}>
                        <Text color={selected === idx ? 'black' : 'gray.500'} variant="Caption">{content}</Text>
                    </SelectButton>
                ))}
            </SelectBarWrapper>
            <ContentBoxWrapper>
                <ContentBox>
                    <Picture />
                    <ContentWrapper>
                        <NameWrapper>
                            <Text variant="Caption">손희찬</Text>
                            <img src={RatingImg} alt="" />
                        </NameWrapper>
                        <Text color="gray.700" variant="Button">대전광역시, 중구</Text>
                        <Tag />
                    </ContentWrapper>
                </ContentBox>
                <ContentBox>
                    <Picture />
                    <ContentWrapper>
                        <NameWrapper>
                            <Text variant="Caption">손희찬</Text>
                            <img src={RatingImg} alt="" />
                        </NameWrapper>
                        <Text color="gray.700" variant="Button">대전광역시, 중구</Text>
                        <Tag />
                    </ContentWrapper>
                </ContentBox>
                <ContentBox>
                    <Picture />
                    <ContentWrapper>
                        <NameWrapper>
                            <Text variant="Caption">손희찬</Text>
                            <img src={RatingImg} alt="" />
                        </NameWrapper>
                        <Text color="gray.700" variant="Button">대전광역시, 중구</Text>
                        <Tag />
                    </ContentWrapper>
                </ContentBox>
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

const Picture = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
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