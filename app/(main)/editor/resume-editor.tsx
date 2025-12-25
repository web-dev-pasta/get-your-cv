"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GeneralInfoForm from "./forms/general-info-form";
import PersonalInfoForm from "./forms/personal-info-form";

function ResumeEditor() {
  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps bellow to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>
      <main className="relative flex flex-1">
        <div className="left w-full p-3 md:w-1/2">
          <PersonalInfoForm />
        </div>
        <div className="md:border-r" />
        <div className="right w-1/2 max-md:hidden">right</div>
      </main>
      <footer className="border-t px-3 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="secondary">Previous Step</Button>
            <Button>Next Step</Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" asChild>
              <Link href="/resumes">Close</Link>
            </Button>
            <span className="text-muted-foreground hidden text-sm">
              Saving...
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ResumeEditor;
