import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { steps } from "./steps";
import React from "react";
interface BreadCrumbsProbs {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}
function BreadCrumbs({ currentStep, setCurrentStep }: BreadCrumbsProbs) {
  return (
    <Breadcrumb className="mb-4 flex justify-center">
      <BreadcrumbList>
        {steps.map(({ title, key }) => (
          <React.Fragment key={key}>
            <BreadcrumbItem>
              {key === currentStep ? (
                <BreadcrumbPage>{title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <button onClick={() => setCurrentStep(key)}>{title}</button>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="last:hidden" />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
