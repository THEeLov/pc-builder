import { InternalError, NotFoundError, ConflictError } from "../types";
import { Result } from "@badrap/result";

export const internalError = (message?: string) => Result.err(new InternalError(message? message : "Internal error"));
export const notFoundError = (message?: string) => Result.err(new NotFoundError(message? message : "Not found"));
export const conflictError = (message?: string) => Result.err(new ConflictError(message? message : "Conflict"));