import styled from "styled-components"
import { Text } from "./Text"

export const ProfileIntro = () => {
    return (
        <Text>
            {`저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.
            저는 농구를 좋아하는 학생입니다.
            
            저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.
            
            저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.
            
            저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.`}

        </Text>
    )
}

export const ProfileReview = () => {
    return (
        <ProfileReviewWrapper>
            <ReviewBoxWrapper>
                <ReviewBox>
                    <Text variant="Button">시간 약속을 잘 지켜요.</Text>
                </ReviewBox>
                <Text variant="Caption" weight={700}>1</Text>
            </ReviewBoxWrapper>
            <ReviewBoxWrapper>
                <ReviewBox>
                    <Text variant="Button">열정이 느껴졌어요.</Text>
                </ReviewBox>
                <Text variant="Caption" weight={700}>2</Text>
            </ReviewBoxWrapper>
        </ProfileReviewWrapper>
    )
}

const ProfileReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ReviewBoxWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const ReviewBox = styled.div`
    padding: 8px 12px;
    border: 1px solid ${({theme}) => theme.colors.gray[300]};
    background-color: #F8F8F8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
`;

export const ProfileCurriculum = () => {
    return (
        <ProfileCurriculumWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>1일차</Text>
                <Text variant="Button">저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저</Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>1일차</Text>
                <Text variant="Button">저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저</Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>1일차</Text>
                <Text variant="Button">저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저</Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>1일차</Text>
                <Text variant="Button">저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저는 농구를 좋아하는 학생입니다.저</Text>
            </CurriculumBoxWrapper>
        </ProfileCurriculumWrapper>
    )
}

const ProfileCurriculumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

`;

const CurriculumBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;