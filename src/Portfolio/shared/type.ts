





export enum SelectedPage {
    E = "e",
    Skills = "skills",
    Experiences = "experiences",
    Work = "work",
    Contact = "contact"
}

export interface BenefitsType {
    icon: React.ElementType
    title: string
    description: string
}

export interface ClassType {
    title: string
    description: string
    image: string
}