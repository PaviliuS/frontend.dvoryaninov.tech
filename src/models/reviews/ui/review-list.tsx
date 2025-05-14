import { useLocalizedData } from "@/shared/hooks/utils/use-localized-data";
import { Accordion } from "@/shared/ui/accordion";
import { reviews } from "../config";
import { ReviewItem } from "./review-item";

export function ReviewList() {
  const localizedReviews = useLocalizedData({ data: reviews });

  return (
    <Accordion
      defaultValue={["0"]}
      type="multiple"
      className="flex w-full flex-col gap-2"
    >
      {localizedReviews.map((review, index) => (
        <ReviewItem key={review.id} review={review} index={index} />
      ))}
    </Accordion>
  );
}
