import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Resumes",
};
function ResumesPage() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-6">
      <Button asChild className="mx-auto flex w-fit items-center gap-3">
        <Link href="/editor">
          <PlusSquare className="size-5" />
          New resume
        </Link>
      </Button>
    </div>
  );
}

export default ResumesPage;
