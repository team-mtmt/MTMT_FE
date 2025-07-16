import styled from "styled-components"
import { Text } from "../components/Text";
import { useState } from "react";
import { Tag } from "../components/tag";

export const Mento = () => {
    const [selected, setSelected] = useState<number | 0>(0);
    const categories = ['운동', '음악', '미술'];
    
    return (
        <Wrapper>
            <TextWrapper>
                <Text variant="Stitle" weight={700}>회원님에게</Text>
                <Text variant="Stitle" weight={700}>신청한 멘티분들이에요!</Text>
            </TextWrapper>
            <SelectBarWrapper>
                {categories.map((content, idx) => (
                    <SelectButton $selected={selected === idx} key={idx} onClick={() => setSelected(idx)}>
                        <Text color={selected === idx ? 'black' : 'gray.500'} variant="Caption">{content}</Text>
                    </SelectButton>
                ))}
            </SelectBarWrapper>
            <ContentBoxWrapper>
                <ContentBoxSubWrapper>
                    <ContentBox>
                        <Picture />
                        <ContentWrapper>
                            <NameWrapper>
                                <Text variant="Caption">손희찬</Text>
                                <Text variant="Button" color="main.500">Lv. 1</Text>
                            </NameWrapper>
                            <Text color="gray.700" variant="Button">대전광역시, 중구</Text>
                            <Tag />
                        </ContentWrapper>
                    </ContentBox>
                    <ButtonWrapper>
                        <AcceptButton>
                            승락
                        </AcceptButton>
                        <RefusalButton>
                            거절
                        </RefusalButton>
                    </ButtonWrapper>
                </ContentBoxSubWrapper>
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

const ContentBoxSubWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px 24px 10px 12px;
`;

const ContentBox = styled.div`
    display: flex;
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
    gap: 8px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const AcceptButton = styled.button`
    width: 69px;
    height: 34px;
    border: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    background-color: ${({theme}) => theme.colors.main[500]};
    color: white;
`;

const RefusalButton = styled.button`
    width: 69px;
    height: 34px;
    border: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid ${({theme}) => theme.colors.error[500]};
    background-color: white;
    color: ${({theme}) => theme.colors.error[500]};
`;