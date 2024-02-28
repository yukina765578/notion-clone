"use client";

import { Doc, Id } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">;
}

export const DocumentList = ({
  parentDocumentId,
  level = 0,
}: DocumentListProps) => {
  const params = useParams();
  const router = useRouter();
  return <div>DocumentList</div>;
};
