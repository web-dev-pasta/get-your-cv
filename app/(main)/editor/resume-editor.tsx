"use client";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import BreadCrumbs from "./bread-crumbs";
import Footer from "./footer";

function ResumeEditor() {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("step") || steps[0].key;
  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }
  const FormComponent = steps.find((e) => e.key === currentStep)?.component;
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
          <BreadCrumbs currentStep={currentStep} setCurrentStep={setStep} />
          {FormComponent && <FormComponent />}
        </div>
        <div className="md:border-r" />
        <div className="right w-1/2 max-md:hidden">right</div>
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
}

export default ResumeEditor;
