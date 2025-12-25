import GeneralInfoForm from "./forms/general-info-form";
import PersonalInfoForm from "./forms/personal-info-form";

export const steps: {
  title: string;
  component: React.ComponentType;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
];
