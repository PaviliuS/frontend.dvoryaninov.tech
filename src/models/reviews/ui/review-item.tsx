import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { ChevronDownCircle } from "lucide-react";
import type { ReviewType } from "../types";

interface ReviewItemProps {
  index: number;
  review: ReviewType;
}
export function ReviewItem({ index, review }: ReviewItemProps) {
  const { author, position, review: text } = review;

  return (
    <AccordionItem
      value={String(index)}
      className="flex w-full flex-col rounded-base bg-primary/5"
    >
      <AccordionTrigger className="group flex w-full flex-col rounded-base p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple">
        <div className="flex w-full flex-row items-center gap-3 overflow-hidden">
          <p className="w-full truncate text-base transition group-hover:text-purple lg:text-lg">
            {author}
          </p>
          <ChevronDownCircle className="ml-auto flex size-4 shrink-0 transition group-data-[state=open]:rotate-180 lg:size-5" />
        </div>
        <p className="w-full truncate font-medium text-primary/80 text-sm lg:text-base">
          {position}
        </p>
      </AccordionTrigger>
      <AccordionContent className="w-full text-pretty break-words p-4 pt-0 text-base text-primary/80 lg:text-lg">
        <blockquote>{text}</blockquote>
      </AccordionContent>
    </AccordionItem>
  );
}
