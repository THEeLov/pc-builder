import InternalError from "./errors/InternalError"
import ConflictError from "./errors/ConflictError"
import NotFoundError from "./errors/NotFoundError"
import { Result } from "@badrap/result"

const PRISMA_CONFLICT_ERROR = 'P2002'
const PRISMA_NOT_FOUND_ERROR = 'P2001'

const handleError = (error: any, message: string) => {
    if (error.code === PRISMA_CONFLICT_ERROR) {
      return Result.err(new ConflictError(message));
    }
    if (error.code === PRISMA_NOT_FOUND_ERROR) {
      return Result.err(new NotFoundError(message));
    }
    return Result.err(new InternalError());
  };
  
  export default handleError;