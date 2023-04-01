export interface Skill {
  id:string,
  priority:number
  title :string;
  description:string;
  img?:string;
}

export interface SkillCategory{
  id:string,
  priority:number
  title :string;
  description:string;
  img?:string;
  skills?:Skill[]
}
