import Joi from 'joi';

export const signInSchema = Joi.object<SkillFormat>({
  roomId: Joi.number().integer().required(),
  calculations: Joi.string().required(),
  name: Joi.string().min(3).max(25).required()
});

export type SkillFormat = {
    roomId:number;
    calculations: string;
    name: string;
}