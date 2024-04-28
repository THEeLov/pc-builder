import z from 'zod';

const Register = z.object({
    username: z.string().min(3).max(40),
    email: z.string().email(),
    password: z.string()
});

const Login = z.object({
    email: z.string().email(),
    password: z.string()
});

const getParams = z.object({
    id: z.number()
});

const Edit = z.object({
    username: z.string().min(3).max(40).optional(),
    email: z.string().email().optional(),
    password: z.string().optional()
});

export const UserSchema = {
    Register,
    Login,
    getParams,
    Edit
}