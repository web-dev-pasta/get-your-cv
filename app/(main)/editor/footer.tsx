import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";
interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

function Footer({ currentStep, setCurrentStep }: FooterProps) {
  const prevStep = steps.find((_, i) => steps[i + 1]?.key === currentStep)?.key;
  const nextStep = steps.find((_, i) => steps[i - 1]?.key === currentStep)?.key;
  return (
    <footer className="border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            disabled={!prevStep}
            onClick={() => setCurrentStep(prevStep!)}
            variant="secondary"
          >
            Previous Step
          </Button>
          <Button
            disabled={!nextStep}
            onClick={() => setCurrentStep(nextStep!)}
          >
            Next Step
          </Button>
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
  );
}

export default Footer;
