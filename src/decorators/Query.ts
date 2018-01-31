import { ReturnTypeFunc, TypeOptions } from "../types/decorators";
import { MetadataStorage } from "../metadata/metadata-storage";
import { getHandlerInfo } from "../helpers/handlers";

export function Query(
  returnTypeFunc?: ReturnTypeFunc,
  options: TypeOptions = {},
): MethodDecorator {
  return (prototype, methodName) => {
    const handler = getHandlerInfo(prototype, methodName, returnTypeFunc, options);
    MetadataStorage.registerQueryHandler(handler);
  };
}