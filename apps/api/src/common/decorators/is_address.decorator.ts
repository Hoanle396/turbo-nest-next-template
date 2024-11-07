import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { registerDecorator } from 'class-validator';

function isValidAddress(address: any) {
  if (typeof address !== 'string' || address.length !== 42) return false;

  if (!address.startsWith('0x')) return false;

  const hexPattern = /^[0-9a-fA-F]{40}$/;
  return hexPattern.test(address.slice(2));
}

export function IsAddress(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsAddress',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          return isValidAddress(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid wallet address`;
        },
      },
    });
  };
}
