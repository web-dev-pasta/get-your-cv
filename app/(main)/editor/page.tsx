import type { Metadata } from "next";
import ResumeEditor from "./resume-editor";

export const metadata: Metadata = {
  title: "Design Your Resume",
  description:
    "Build a professional resume that will help you land your dream job.",
};
function ResumePage() {
  return <ResumeEditor />;
}

export default ResumePage;
