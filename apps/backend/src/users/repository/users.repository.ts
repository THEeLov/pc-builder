import {prisma} from '../../../client'
import { User, UserType } from '@prisma/client'
import { DbResult, UserCreate, UserEdit } from '../../../types'
import { ConflictError, InternalError, NotFoundError } from '../../../types'
import bcrypt from 'bcryptjs'
import { Result } from '@badrap/result'

const saltRounds = 10;

async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, saltRounds);
}

async function create(data: UserCreate): DbResult<User> {
    try {
        const newUser = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: await hashPassword(data.password),
            }
        });
        return Result.ok(newUser);
    }
    catch (error) {
        if (error.code === 'P2002') {
            return Result.err(new ConflictError('User already exists'));
        }
        else {
            return Result.err(new InternalError(error.message));
        }
    }
    finally {
        await prisma.$disconnect();
    }  
};

async function update(id: number, data: UserEdit): DbResult<User> {
    try {
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: data
        });
        if (!user) {
            return Result.err(new NotFoundError('User not found'));
        }
        return Result.ok(user);
    }
    catch (error) {
        return Result.err(new InternalError(error.message));
    }
    finally {
        await prisma.$disconnect();
    }  
};

async function remove(id: number): DbResult<void> {
    try {
        await prisma.user.delete({
            where: {
                id: id
            }
        });
        return Result.ok(undefined);
    }
    catch (error) {
        return Result.err(new InternalError(error.message));
    }
    finally {
        await prisma.$disconnect();
    }  
};

async function get(identifier: number | string): DbResult<User> {
    try {
        let user;
        if (typeof identifier === 'number') {
            user = await prisma.user.findUnique({
                where: {
                    id: identifier
                }
            });
        } else {
            user = await prisma.user.findUnique({
                where: {
                    email: identifier
                }
            });
        }
        
        if (!user) {
            return Result.err(new NotFoundError('User not found'));
        }
        
        return Result.ok(user);
    }
    catch (error) {
        return Result.err(new InternalError(error.message));
    }
    finally {
        await prisma.$disconnect();
    }  
}


export const UsersRepository = {
    create,
    update,
    remove,
    get,
};