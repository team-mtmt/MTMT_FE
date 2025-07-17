import styled from "styled-components"
import { Text } from "../../components/Text";
import RatingImg from "../../assets/imgs/ratings/veryBad.svg";
import { ReviewBox } from "../../components/reviewBox";
import { useNavigate } from "react-router-dom";
import { postReview } from "../../apis";
import { MentoringEvaluation } from "../../apis/type";
import { useState } from "react";

export const ReviewWrite = () => {
    const [selectedEvaluations, setSelectedEvaluations] = useState<MentoringEvaluation[]>([]);
    const [reviewContent, setReviewContent] = useState('');
    const navigate = useNavigate();
    const mentoringId = 2;

    const handleNext = async () => { 
        try {
          await postReview({
            mentoringId,
            review_content: reviewContent,
            mentoring_evaluation: selectedEvaluations, 
          });
      
          navigate("/chatting");
        } catch (err) {
          console.error(err);
        }
    };
    const toggleEvaluation = (value: MentoringEvaluation) => {
        setSelectedEvaluations(prev =>
        prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
    };

    const reviewOptions: { label: string; value: MentoringEvaluation }[] = [
        { label: "시간 약속을 잘 지켜요.", value: "TIME_COMMITMENT_GOOD" },
        { label: "설명이 정말 이해하기 쉬웠어요.", value: "EXPLANATION_EASY" },
        { label: "친절하고 배려심이 있어요.", value: "KIND_AND_PATIENT" },
        { label: "소통이 원활했어요.", value: "COMMUNICATION_GOOD" },
        { label: "열정이 느껴졌어요.", value: "PASSIONATE" },
        { label: "함께하는 시간이 즐거웠어요.", value: "ENJOYABLE_TIME" },
        { label: "시간 약속을 지키지 않았어요.", value: "TIME_COMMITMENT_BAD" },
        { label: "소통이 잘 안 되었어요.", value: "COMMUNICATION_BAD" },
        { label: "설명이 어려웠어요.", value: "EXPLANATION_HARD" },
        { label: "조금 더 적극적이었으면 좋겠어요.", value: "NEED_MORE_ACTIVE" },
    ];

    return (
        <Wrapper>
            <ProfileInfoWrapper>
                <ProfileImg />
                <TextInfoWrapper>
                    <NameWrapper>
                        <Text variant="Label" weight={700}>손희찬</Text>
                        <img src={RatingImg} alt="" />
                    </NameWrapper>
                    <Text variant="Caption" color="gray.700">남자 | 18세</Text>
                    <TagBox>
                        <Text variant="Caption">⚽️</Text>
                        <Text variant="Caption">축구</Text>
                    </TagBox>
                </TextInfoWrapper>
            </ProfileInfoWrapper>
            <ContentWrapper>
                <GapContainer>
                    <TextAreaBox>
                        <ReviewContentTextarea value={reviewContent} onChange={(e) => setReviewContent(e.target.value)} placeholder="후기를 남겨주세요."/>
                    </TextAreaBox>
                    <Text variant="Label" weight={700}>간단 후기</Text>
                    <ReviewBoxWrapper>
                        {reviewOptions.map(({ label, value }) => (
                            <ReviewBox
                            key={value}
                            selected={selectedEvaluations.includes(value)}
                            onClick={() => toggleEvaluation(value)}
                            >
                            {label}
                            </ReviewBox>
                        ))}
                    </ReviewBoxWrapper>
                </GapContainer>
            </ContentWrapper>
            <Button onClick={handleNext}>
                <Text variant="Caption" weight={700} color="white">완료</Text>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 0px 24px 20px 24px;
`;

const ProfileInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    margin-top: 32px;
`;

const ProfileImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: white;
    border: 0.2px solid ${({theme}) => theme.colors.gray[300]};
`;

const TextInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const TagBox = styled.div`
    display: flex;
    width: fit-content;
    padding: 6px 12px;
    border: 1px solid ${({theme}) => theme.colors.main[500]};
    border-radius: 50px;
    gap: 8px;
`;

const TextAreaBox = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    background-color: #F8F8F8;
    margin-top: 16px;
    border-radius: 4px;
    flex: 1;
`;

const ReviewContentTextarea = styled.textarea`
    background-color: #F8F8F8;
    border: none;
    outline: none;
    font-size: 12px;
    width: 100%;
    font-family: 'Pretendard', sans-serif;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
`;

const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 38px;
  flex: 1;
`;

const ReviewBoxWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.main[500]};
    width: 100%;
    height: 57px;
    border: none;
    border-radius: 12px;
    margin-top: auto;
`;