// yup.d.ts
import 'yup';

declare module 'yup' {
  interface SchemaSpec {
    meta?: CustomSchemaMetadata;
  }

  interface SchemaDescription {
    meta?: CustomSchemaMetadata;
  }

  interface SchemaFieldDescription<T = any> {
    meta?: CustomSchemaMetadata;
    fields?: SchemaObjectDescriptor<T>['fields'];
  }

  export type OneOfPredicate<T> = (
    value: T,
    item: T,
    index: number,
    array: readonly T[]
  ) => boolean;

  interface Schema<TType = any> {
    oneOf<T = TType>(
      enums: ReadonlyArray<T | Reference>,
      predicate: OneOfPredicate<T>,
      message?: Message<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        values: any;
      }>
    ): this;

    email(
      message?: Message<{
        regex: RegExp;
      }>
    ): this;
  }

  interface ObjectSchema {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    describe<TType = any>(
      options?: ResolveOptions<TContext>
    ): SchemaObjectDescriptor<TType>;
  }

  export interface CustomSchemaMetadata {
    label?: string;
    placeholder?: string;
  }

  export interface SchemaObjectDescriptor<T> extends SchemaObjectDescription {
    fields: {
      [Property in keyof T]: SchemaFieldDescription<T[Property]> &
        SchemaDescription;
    };
  }
}
