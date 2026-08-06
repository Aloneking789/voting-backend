
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Election
 * 
 */
export type Election = $Result.DefaultSelection<Prisma.$ElectionPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model ElectionResult
 * 
 */
export type ElectionResult = $Result.DefaultSelection<Prisma.$ElectionResultPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ElectionStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED',
  RESULT_DECLARED: 'RESULT_DECLARED'
};

export type ElectionStatus = (typeof ElectionStatus)[keyof typeof ElectionStatus]


export const AdminRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]

}

export type ElectionStatus = $Enums.ElectionStatus

export const ElectionStatus: typeof $Enums.ElectionStatus

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.election`: Exposes CRUD operations for the **Election** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elections
    * const elections = await prisma.election.findMany()
    * ```
    */
  get election(): Prisma.ElectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.electionResult`: Exposes CRUD operations for the **ElectionResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElectionResults
    * const electionResults = await prisma.electionResult.findMany()
    * ```
    */
  get electionResult(): Prisma.ElectionResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Election: 'Election',
    Position: 'Position',
    Candidate: 'Candidate',
    Vote: 'Vote',
    ElectionResult: 'ElectionResult',
    Admin: 'Admin',
    AuditLog: 'AuditLog',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "election" | "position" | "candidate" | "vote" | "electionResult" | "admin" | "auditLog" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Election: {
        payload: Prisma.$ElectionPayload<ExtArgs>
        fields: Prisma.ElectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findFirst: {
            args: Prisma.ElectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findMany: {
            args: Prisma.ElectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          create: {
            args: Prisma.ElectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          createMany: {
            args: Prisma.ElectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          delete: {
            args: Prisma.ElectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          update: {
            args: Prisma.ElectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          deleteMany: {
            args: Prisma.ElectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          upsert: {
            args: Prisma.ElectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          aggregate: {
            args: Prisma.ElectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElection>
          }
          groupBy: {
            args: Prisma.ElectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      ElectionResult: {
        payload: Prisma.$ElectionResultPayload<ExtArgs>
        fields: Prisma.ElectionResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>
          }
          findFirst: {
            args: Prisma.ElectionResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>
          }
          findMany: {
            args: Prisma.ElectionResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>[]
          }
          create: {
            args: Prisma.ElectionResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>
          }
          createMany: {
            args: Prisma.ElectionResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElectionResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>[]
          }
          delete: {
            args: Prisma.ElectionResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>
          }
          update: {
            args: Prisma.ElectionResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>
          }
          deleteMany: {
            args: Prisma.ElectionResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElectionResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>[]
          }
          upsert: {
            args: Prisma.ElectionResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionResultPayload>
          }
          aggregate: {
            args: Prisma.ElectionResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElectionResult>
          }
          groupBy: {
            args: Prisma.ElectionResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionResultCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionResultCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    election?: ElectionOmit
    position?: PositionOmit
    candidate?: CandidateOmit
    vote?: VoteOmit
    electionResult?: ElectionResultOmit
    admin?: AdminOmit
    auditLog?: AuditLogOmit
    setting?: SettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    votes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | UserCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type ElectionCountOutputType
   */

  export type ElectionCountOutputType = {
    positions: number
    votes: number
    results: number
    candidates: number
  }

  export type ElectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | ElectionCountOutputTypeCountPositionsArgs
    votes?: boolean | ElectionCountOutputTypeCountVotesArgs
    results?: boolean | ElectionCountOutputTypeCountResultsArgs
    candidates?: boolean | ElectionCountOutputTypeCountCandidatesArgs
  }

  // Custom InputTypes
  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCountOutputType
     */
    select?: ElectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionResultWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    candidates: number
    votes: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | PositionCountOutputTypeCountCandidatesArgs
    votes?: boolean | PositionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    votes: number
    results: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | CandidateCountOutputTypeCountVotesArgs
    results?: boolean | CandidateCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionResultWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    auditLogs: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | AdminCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    loginCount: number | null
  }

  export type UserSumAggregateOutputType = {
    loginCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    admissionId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    mobile: string | null
    fatherMobile: string | null
    motherMobile: string | null
    email: string | null
    gender: string | null
    dob: Date | null
    className: string | null
    section: string | null
    batchId: string | null
    courseId: string | null
    sessionId: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    bloodGroup: string | null
    religion: string | null
    nationality: string | null
    loginCount: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    admissionId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    mobile: string | null
    fatherMobile: string | null
    motherMobile: string | null
    email: string | null
    gender: string | null
    dob: Date | null
    className: string | null
    section: string | null
    batchId: string | null
    courseId: string | null
    sessionId: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    bloodGroup: string | null
    religion: string | null
    nationality: string | null
    loginCount: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    studentId: number
    admissionId: number
    firstName: number
    middleName: number
    lastName: number
    fatherName: number
    motherName: number
    mobile: number
    fatherMobile: number
    motherMobile: number
    email: number
    gender: number
    dob: number
    className: number
    section: number
    batchId: number
    courseId: number
    sessionId: number
    address: number
    city: number
    state: number
    country: number
    pincode: number
    bloodGroup: number
    religion: number
    nationality: number
    loginCount: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    loginCount?: true
  }

  export type UserSumAggregateInputType = {
    loginCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    studentId?: true
    admissionId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    mobile?: true
    fatherMobile?: true
    motherMobile?: true
    email?: true
    gender?: true
    dob?: true
    className?: true
    section?: true
    batchId?: true
    courseId?: true
    sessionId?: true
    address?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    bloodGroup?: true
    religion?: true
    nationality?: true
    loginCount?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    studentId?: true
    admissionId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    mobile?: true
    fatherMobile?: true
    motherMobile?: true
    email?: true
    gender?: true
    dob?: true
    className?: true
    section?: true
    batchId?: true
    courseId?: true
    sessionId?: true
    address?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    bloodGroup?: true
    religion?: true
    nationality?: true
    loginCount?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    studentId?: true
    admissionId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    mobile?: true
    fatherMobile?: true
    motherMobile?: true
    email?: true
    gender?: true
    dob?: true
    className?: true
    section?: true
    batchId?: true
    courseId?: true
    sessionId?: true
    address?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    bloodGroup?: true
    religion?: true
    nationality?: true
    loginCount?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    studentId: string
    admissionId: string | null
    firstName: string
    middleName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    mobile: string | null
    fatherMobile: string | null
    motherMobile: string | null
    email: string | null
    gender: string | null
    dob: Date | null
    className: string | null
    section: string | null
    batchId: string | null
    courseId: string | null
    sessionId: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    bloodGroup: string | null
    religion: string | null
    nationality: string | null
    loginCount: number
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    mobile?: boolean
    fatherMobile?: boolean
    motherMobile?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    className?: boolean
    section?: boolean
    batchId?: boolean
    courseId?: boolean
    sessionId?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    bloodGroup?: boolean
    religion?: boolean
    nationality?: boolean
    loginCount?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    mobile?: boolean
    fatherMobile?: boolean
    motherMobile?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    className?: boolean
    section?: boolean
    batchId?: boolean
    courseId?: boolean
    sessionId?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    bloodGroup?: boolean
    religion?: boolean
    nationality?: boolean
    loginCount?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    mobile?: boolean
    fatherMobile?: boolean
    motherMobile?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    className?: boolean
    section?: boolean
    batchId?: boolean
    courseId?: boolean
    sessionId?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    bloodGroup?: boolean
    religion?: boolean
    nationality?: boolean
    loginCount?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    mobile?: boolean
    fatherMobile?: boolean
    motherMobile?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    className?: boolean
    section?: boolean
    batchId?: boolean
    courseId?: boolean
    sessionId?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    bloodGroup?: boolean
    religion?: boolean
    nationality?: boolean
    loginCount?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "admissionId" | "firstName" | "middleName" | "lastName" | "fatherName" | "motherName" | "mobile" | "fatherMobile" | "motherMobile" | "email" | "gender" | "dob" | "className" | "section" | "batchId" | "courseId" | "sessionId" | "address" | "city" | "state" | "country" | "pincode" | "bloodGroup" | "religion" | "nationality" | "loginCount" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      admissionId: string | null
      firstName: string
      middleName: string | null
      lastName: string | null
      fatherName: string | null
      motherName: string | null
      mobile: string | null
      fatherMobile: string | null
      motherMobile: string | null
      email: string | null
      gender: string | null
      dob: Date | null
      className: string | null
      section: string | null
      batchId: string | null
      courseId: string | null
      sessionId: string | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      pincode: string | null
      bloodGroup: string | null
      religion: string | null
      nationality: string | null
      loginCount: number
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly studentId: FieldRef<"User", 'String'>
    readonly admissionId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly fatherName: FieldRef<"User", 'String'>
    readonly motherName: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly fatherMobile: FieldRef<"User", 'String'>
    readonly motherMobile: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly className: FieldRef<"User", 'String'>
    readonly section: FieldRef<"User", 'String'>
    readonly batchId: FieldRef<"User", 'String'>
    readonly courseId: FieldRef<"User", 'String'>
    readonly sessionId: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly pincode: FieldRef<"User", 'String'>
    readonly bloodGroup: FieldRef<"User", 'String'>
    readonly religion: FieldRef<"User", 'String'>
    readonly nationality: FieldRef<"User", 'String'>
    readonly loginCount: FieldRef<"User", 'Int'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Election
   */

  export type AggregateElection = {
    _count: ElectionCountAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  export type ElectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.ElectionStatus | null
    isCurrent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ElectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.ElectionStatus | null
    isCurrent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ElectionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startAt: number
    endAt: number
    status: number
    isCurrent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ElectionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startAt?: true
    endAt?: true
    status?: true
    isCurrent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ElectionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startAt?: true
    endAt?: true
    status?: true
    isCurrent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ElectionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startAt?: true
    endAt?: true
    status?: true
    isCurrent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ElectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Election to aggregate.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elections
    **/
    _count?: true | ElectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionMaxAggregateInputType
  }

  export type GetElectionAggregateType<T extends ElectionAggregateArgs> = {
        [P in keyof T & keyof AggregateElection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElection[P]>
      : GetScalarType<T[P], AggregateElection[P]>
  }




  export type ElectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionWhereInput
    orderBy?: ElectionOrderByWithAggregationInput | ElectionOrderByWithAggregationInput[]
    by: ElectionScalarFieldEnum[] | ElectionScalarFieldEnum
    having?: ElectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionCountAggregateInputType | true
    _min?: ElectionMinAggregateInputType
    _max?: ElectionMaxAggregateInputType
  }

  export type ElectionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startAt: Date
    endAt: Date
    status: $Enums.ElectionStatus
    isCurrent: boolean
    createdAt: Date
    updatedAt: Date
    _count: ElectionCountAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  type GetElectionGroupByPayload<T extends ElectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionGroupByOutputType[P]>
        }
      >
    >


  export type ElectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    positions?: boolean | Election$positionsArgs<ExtArgs>
    votes?: boolean | Election$votesArgs<ExtArgs>
    results?: boolean | Election$resultsArgs<ExtArgs>
    candidates?: boolean | Election$candidatesArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ElectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startAt" | "endAt" | "status" | "isCurrent" | "createdAt" | "updatedAt", ExtArgs["result"]["election"]>
  export type ElectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | Election$positionsArgs<ExtArgs>
    votes?: boolean | Election$votesArgs<ExtArgs>
    results?: boolean | Election$resultsArgs<ExtArgs>
    candidates?: boolean | Election$candidatesArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ElectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ElectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Election"
    objects: {
      positions: Prisma.$PositionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      results: Prisma.$ElectionResultPayload<ExtArgs>[]
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startAt: Date
      endAt: Date
      status: $Enums.ElectionStatus
      isCurrent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["election"]>
    composites: {}
  }

  type ElectionGetPayload<S extends boolean | null | undefined | ElectionDefaultArgs> = $Result.GetResult<Prisma.$ElectionPayload, S>

  type ElectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionCountAggregateInputType | true
    }

  export interface ElectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Election'], meta: { name: 'Election' } }
    /**
     * Find zero or one Election that matches the filter.
     * @param {ElectionFindUniqueArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionFindUniqueArgs>(args: SelectSubset<T, ElectionFindUniqueArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Election that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionFindUniqueOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionFindFirstArgs>(args?: SelectSubset<T, ElectionFindFirstArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.election.findMany()
     * 
     * // Get first 10 Elections
     * const elections = await prisma.election.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionWithIdOnly = await prisma.election.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElectionFindManyArgs>(args?: SelectSubset<T, ElectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Election.
     * @param {ElectionCreateArgs} args - Arguments to create a Election.
     * @example
     * // Create one Election
     * const Election = await prisma.election.create({
     *   data: {
     *     // ... data to create a Election
     *   }
     * })
     * 
     */
    create<T extends ElectionCreateArgs>(args: SelectSubset<T, ElectionCreateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elections.
     * @param {ElectionCreateManyArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionCreateManyArgs>(args?: SelectSubset<T, ElectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elections and returns the data saved in the database.
     * @param {ElectionCreateManyAndReturnArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elections and only return the `id`
     * const electionWithIdOnly = await prisma.election.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ElectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Election.
     * @param {ElectionDeleteArgs} args - Arguments to delete one Election.
     * @example
     * // Delete one Election
     * const Election = await prisma.election.delete({
     *   where: {
     *     // ... filter to delete one Election
     *   }
     * })
     * 
     */
    delete<T extends ElectionDeleteArgs>(args: SelectSubset<T, ElectionDeleteArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Election.
     * @param {ElectionUpdateArgs} args - Arguments to update one Election.
     * @example
     * // Update one Election
     * const election = await prisma.election.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionUpdateArgs>(args: SelectSubset<T, ElectionUpdateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elections.
     * @param {ElectionDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.election.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionDeleteManyArgs>(args?: SelectSubset<T, ElectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionUpdateManyArgs>(args: SelectSubset<T, ElectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections and returns the data updated in the database.
     * @param {ElectionUpdateManyAndReturnArgs} args - Arguments to update many Elections.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elections and only return the `id`
     * const electionWithIdOnly = await prisma.election.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ElectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Election.
     * @param {ElectionUpsertArgs} args - Arguments to update or create a Election.
     * @example
     * // Update or create a Election
     * const election = await prisma.election.upsert({
     *   create: {
     *     // ... data to create a Election
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Election we want to update
     *   }
     * })
     */
    upsert<T extends ElectionUpsertArgs>(args: SelectSubset<T, ElectionUpsertArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.election.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
    **/
    count<T extends ElectionCountArgs>(
      args?: Subset<T, ElectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionAggregateArgs>(args: Subset<T, ElectionAggregateArgs>): Prisma.PrismaPromise<GetElectionAggregateType<T>>

    /**
     * Group by Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionGroupByArgs['orderBy'] }
        : { orderBy?: ElectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Election model
   */
  readonly fields: ElectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Election.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    positions<T extends Election$positionsArgs<ExtArgs> = {}>(args?: Subset<T, Election$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Election$votesArgs<ExtArgs> = {}>(args?: Subset<T, Election$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Election$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Election$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidates<T extends Election$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Election$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Election model
   */
  interface ElectionFieldRefs {
    readonly id: FieldRef<"Election", 'String'>
    readonly title: FieldRef<"Election", 'String'>
    readonly description: FieldRef<"Election", 'String'>
    readonly startAt: FieldRef<"Election", 'DateTime'>
    readonly endAt: FieldRef<"Election", 'DateTime'>
    readonly status: FieldRef<"Election", 'ElectionStatus'>
    readonly isCurrent: FieldRef<"Election", 'Boolean'>
    readonly createdAt: FieldRef<"Election", 'DateTime'>
    readonly updatedAt: FieldRef<"Election", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Election findUnique
   */
  export type ElectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findUniqueOrThrow
   */
  export type ElectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findFirst
   */
  export type ElectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findFirstOrThrow
   */
  export type ElectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findMany
   */
  export type ElectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election create
   */
  export type ElectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Election.
     */
    data: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
  }

  /**
   * Election createMany
   */
  export type ElectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election createManyAndReturn
   */
  export type ElectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election update
   */
  export type ElectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Election.
     */
    data: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
    /**
     * Choose, which Election to update.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election updateMany
   */
  export type ElectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election updateManyAndReturn
   */
  export type ElectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election upsert
   */
  export type ElectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Election to update in case it exists.
     */
    where: ElectionWhereUniqueInput
    /**
     * In case the Election found by the `where` argument doesn't exist, create a new Election with this data.
     */
    create: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
    /**
     * In case the Election was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
  }

  /**
   * Election delete
   */
  export type ElectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter which Election to delete.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election deleteMany
   */
  export type ElectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elections to delete
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to delete.
     */
    limit?: number
  }

  /**
   * Election.positions
   */
  export type Election$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Election.votes
   */
  export type Election$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Election.results
   */
  export type Election$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    where?: ElectionResultWhereInput
    orderBy?: ElectionResultOrderByWithRelationInput | ElectionResultOrderByWithRelationInput[]
    cursor?: ElectionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionResultScalarFieldEnum | ElectionResultScalarFieldEnum[]
  }

  /**
   * Election.candidates
   */
  export type Election$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Election without action
   */
  export type ElectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    maxVotes: number | null
    displayOrder: number | null
  }

  export type PositionSumAggregateOutputType = {
    maxVotes: number | null
    displayOrder: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    electionId: string | null
    name: string | null
    description: string | null
    maxVotes: number | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    electionId: string | null
    name: string | null
    description: string | null
    maxVotes: number | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    electionId: number
    name: number
    description: number
    maxVotes: number
    displayOrder: number
    createdAt: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    maxVotes?: true
    displayOrder?: true
  }

  export type PositionSumAggregateInputType = {
    maxVotes?: true
    displayOrder?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    electionId?: true
    name?: true
    description?: true
    maxVotes?: true
    displayOrder?: true
    createdAt?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    electionId?: true
    name?: true
    description?: true
    maxVotes?: true
    displayOrder?: true
    createdAt?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    electionId?: true
    name?: true
    description?: true
    maxVotes?: true
    displayOrder?: true
    createdAt?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: string
    electionId: string
    name: string
    description: string | null
    maxVotes: number
    displayOrder: number
    createdAt: Date
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    name?: boolean
    description?: boolean
    maxVotes?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidates?: boolean | Position$candidatesArgs<ExtArgs>
    votes?: boolean | Position$votesArgs<ExtArgs>
    result?: boolean | Position$resultArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    name?: boolean
    description?: boolean
    maxVotes?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    name?: boolean
    description?: boolean
    maxVotes?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    electionId?: boolean
    name?: boolean
    description?: boolean
    maxVotes?: boolean
    displayOrder?: boolean
    createdAt?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "electionId" | "name" | "description" | "maxVotes" | "displayOrder" | "createdAt", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidates?: boolean | Position$candidatesArgs<ExtArgs>
    votes?: boolean | Position$votesArgs<ExtArgs>
    result?: boolean | Position$resultArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      result: Prisma.$ElectionResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      electionId: string
      name: string
      description: string | null
      maxVotes: number
      displayOrder: number
      createdAt: Date
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidates<T extends Position$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Position$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Position$votesArgs<ExtArgs> = {}>(args?: Subset<T, Position$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    result<T extends Position$resultArgs<ExtArgs> = {}>(args?: Subset<T, Position$resultArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'String'>
    readonly electionId: FieldRef<"Position", 'String'>
    readonly name: FieldRef<"Position", 'String'>
    readonly description: FieldRef<"Position", 'String'>
    readonly maxVotes: FieldRef<"Position", 'Int'>
    readonly displayOrder: FieldRef<"Position", 'Int'>
    readonly createdAt: FieldRef<"Position", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.candidates
   */
  export type Position$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Position.votes
   */
  export type Position$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Position.result
   */
  export type Position$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    where?: ElectionResultWhereInput
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateAvgAggregateOutputType = {
    voteCount: number | null
  }

  export type CandidateSumAggregateOutputType = {
    voteCount: number | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    electionId: string | null
    positionId: string | null
    studentId: string | null
    admissionId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fullName: string | null
    className: string | null
    section: string | null
    image: string | null
    slogan: string | null
    manifesto: string | null
    symbol: string | null
    voteCount: number | null
    isWinner: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    electionId: string | null
    positionId: string | null
    studentId: string | null
    admissionId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fullName: string | null
    className: string | null
    section: string | null
    image: string | null
    slogan: string | null
    manifesto: string | null
    symbol: string | null
    voteCount: number | null
    isWinner: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    electionId: number
    positionId: number
    studentId: number
    admissionId: number
    firstName: number
    middleName: number
    lastName: number
    fullName: number
    className: number
    section: number
    image: number
    slogan: number
    manifesto: number
    symbol: number
    voteCount: number
    isWinner: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CandidateAvgAggregateInputType = {
    voteCount?: true
  }

  export type CandidateSumAggregateInputType = {
    voteCount?: true
  }

  export type CandidateMinAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    studentId?: true
    admissionId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fullName?: true
    className?: true
    section?: true
    image?: true
    slogan?: true
    manifesto?: true
    symbol?: true
    voteCount?: true
    isWinner?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    studentId?: true
    admissionId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fullName?: true
    className?: true
    section?: true
    image?: true
    slogan?: true
    manifesto?: true
    symbol?: true
    voteCount?: true
    isWinner?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    studentId?: true
    admissionId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fullName?: true
    className?: true
    section?: true
    image?: true
    slogan?: true
    manifesto?: true
    symbol?: true
    voteCount?: true
    isWinner?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _avg?: CandidateAvgAggregateInputType
    _sum?: CandidateSumAggregateInputType
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    electionId: string
    positionId: string
    studentId: string
    admissionId: string | null
    firstName: string
    middleName: string | null
    lastName: string | null
    fullName: string
    className: string | null
    section: string | null
    image: string | null
    slogan: string | null
    manifesto: string | null
    symbol: string | null
    voteCount: number
    isWinner: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    className?: boolean
    section?: boolean
    image?: boolean
    slogan?: boolean
    manifesto?: boolean
    symbol?: boolean
    voteCount?: boolean
    isWinner?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    votes?: boolean | Candidate$votesArgs<ExtArgs>
    results?: boolean | Candidate$resultsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    className?: boolean
    section?: boolean
    image?: boolean
    slogan?: boolean
    manifesto?: boolean
    symbol?: boolean
    voteCount?: boolean
    isWinner?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    className?: boolean
    section?: boolean
    image?: boolean
    slogan?: boolean
    manifesto?: boolean
    symbol?: boolean
    voteCount?: boolean
    isWinner?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    studentId?: boolean
    admissionId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    className?: boolean
    section?: boolean
    image?: boolean
    slogan?: boolean
    manifesto?: boolean
    symbol?: boolean
    voteCount?: boolean
    isWinner?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "electionId" | "positionId" | "studentId" | "admissionId" | "firstName" | "middleName" | "lastName" | "fullName" | "className" | "section" | "image" | "slogan" | "manifesto" | "symbol" | "voteCount" | "isWinner" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    votes?: boolean | Candidate$votesArgs<ExtArgs>
    results?: boolean | Candidate$resultsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
      results: Prisma.$ElectionResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      electionId: string
      positionId: string
      studentId: string
      admissionId: string | null
      firstName: string
      middleName: string | null
      lastName: string | null
      fullName: string
      className: string | null
      section: string | null
      image: string | null
      slogan: string | null
      manifesto: string | null
      symbol: string | null
      voteCount: number
      isWinner: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Candidate$votesArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Candidate$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly electionId: FieldRef<"Candidate", 'String'>
    readonly positionId: FieldRef<"Candidate", 'String'>
    readonly studentId: FieldRef<"Candidate", 'String'>
    readonly admissionId: FieldRef<"Candidate", 'String'>
    readonly firstName: FieldRef<"Candidate", 'String'>
    readonly middleName: FieldRef<"Candidate", 'String'>
    readonly lastName: FieldRef<"Candidate", 'String'>
    readonly fullName: FieldRef<"Candidate", 'String'>
    readonly className: FieldRef<"Candidate", 'String'>
    readonly section: FieldRef<"Candidate", 'String'>
    readonly image: FieldRef<"Candidate", 'String'>
    readonly slogan: FieldRef<"Candidate", 'String'>
    readonly manifesto: FieldRef<"Candidate", 'String'>
    readonly symbol: FieldRef<"Candidate", 'String'>
    readonly voteCount: FieldRef<"Candidate", 'Int'>
    readonly isWinner: FieldRef<"Candidate", 'Boolean'>
    readonly isActive: FieldRef<"Candidate", 'Boolean'>
    readonly createdAt: FieldRef<"Candidate", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.votes
   */
  export type Candidate$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Candidate.results
   */
  export type Candidate$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    where?: ElectionResultWhereInput
    orderBy?: ElectionResultOrderByWithRelationInput | ElectionResultOrderByWithRelationInput[]
    cursor?: ElectionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionResultScalarFieldEnum | ElectionResultScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    electionId: string | null
    positionId: string | null
    candidateId: string | null
    voterId: string | null
    createdAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    electionId: string | null
    positionId: string | null
    candidateId: string | null
    voterId: string | null
    createdAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    electionId: number
    positionId: number
    candidateId: number
    voterId: number
    createdAt: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    candidateId?: true
    voterId?: true
    createdAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    candidateId?: true
    voterId?: true
    createdAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    candidateId?: true
    voterId?: true
    createdAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    electionId: string
    positionId: string
    candidateId: string
    voterId: string
    createdAt: Date
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    candidateId?: boolean
    voterId?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    candidateId?: boolean
    voterId?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    candidateId?: boolean
    voterId?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    candidateId?: boolean
    voterId?: boolean
    createdAt?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "electionId" | "positionId" | "candidateId" | "voterId" | "createdAt", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      candidate: Prisma.$CandidatePayload<ExtArgs>
      voter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      electionId: string
      positionId: string
      candidateId: string
      voterId: string
      createdAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly electionId: FieldRef<"Vote", 'String'>
    readonly positionId: FieldRef<"Vote", 'String'>
    readonly candidateId: FieldRef<"Vote", 'String'>
    readonly voterId: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model ElectionResult
   */

  export type AggregateElectionResult = {
    _count: ElectionResultCountAggregateOutputType | null
    _avg: ElectionResultAvgAggregateOutputType | null
    _sum: ElectionResultSumAggregateOutputType | null
    _min: ElectionResultMinAggregateOutputType | null
    _max: ElectionResultMaxAggregateOutputType | null
  }

  export type ElectionResultAvgAggregateOutputType = {
    totalVotes: number | null
  }

  export type ElectionResultSumAggregateOutputType = {
    totalVotes: number | null
  }

  export type ElectionResultMinAggregateOutputType = {
    id: string | null
    electionId: string | null
    positionId: string | null
    winnerId: string | null
    totalVotes: number | null
    declaredAt: Date | null
  }

  export type ElectionResultMaxAggregateOutputType = {
    id: string | null
    electionId: string | null
    positionId: string | null
    winnerId: string | null
    totalVotes: number | null
    declaredAt: Date | null
  }

  export type ElectionResultCountAggregateOutputType = {
    id: number
    electionId: number
    positionId: number
    winnerId: number
    totalVotes: number
    declaredAt: number
    _all: number
  }


  export type ElectionResultAvgAggregateInputType = {
    totalVotes?: true
  }

  export type ElectionResultSumAggregateInputType = {
    totalVotes?: true
  }

  export type ElectionResultMinAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    winnerId?: true
    totalVotes?: true
    declaredAt?: true
  }

  export type ElectionResultMaxAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    winnerId?: true
    totalVotes?: true
    declaredAt?: true
  }

  export type ElectionResultCountAggregateInputType = {
    id?: true
    electionId?: true
    positionId?: true
    winnerId?: true
    totalVotes?: true
    declaredAt?: true
    _all?: true
  }

  export type ElectionResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionResult to aggregate.
     */
    where?: ElectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionResults to fetch.
     */
    orderBy?: ElectionResultOrderByWithRelationInput | ElectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElectionResults
    **/
    _count?: true | ElectionResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionResultMaxAggregateInputType
  }

  export type GetElectionResultAggregateType<T extends ElectionResultAggregateArgs> = {
        [P in keyof T & keyof AggregateElectionResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectionResult[P]>
      : GetScalarType<T[P], AggregateElectionResult[P]>
  }




  export type ElectionResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionResultWhereInput
    orderBy?: ElectionResultOrderByWithAggregationInput | ElectionResultOrderByWithAggregationInput[]
    by: ElectionResultScalarFieldEnum[] | ElectionResultScalarFieldEnum
    having?: ElectionResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionResultCountAggregateInputType | true
    _avg?: ElectionResultAvgAggregateInputType
    _sum?: ElectionResultSumAggregateInputType
    _min?: ElectionResultMinAggregateInputType
    _max?: ElectionResultMaxAggregateInputType
  }

  export type ElectionResultGroupByOutputType = {
    id: string
    electionId: string
    positionId: string
    winnerId: string
    totalVotes: number
    declaredAt: Date
    _count: ElectionResultCountAggregateOutputType | null
    _avg: ElectionResultAvgAggregateOutputType | null
    _sum: ElectionResultSumAggregateOutputType | null
    _min: ElectionResultMinAggregateOutputType | null
    _max: ElectionResultMaxAggregateOutputType | null
  }

  type GetElectionResultGroupByPayload<T extends ElectionResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionResultGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionResultGroupByOutputType[P]>
        }
      >
    >


  export type ElectionResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    winnerId?: boolean
    totalVotes?: boolean
    declaredAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    winner?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionResult"]>

  export type ElectionResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    winnerId?: boolean
    totalVotes?: boolean
    declaredAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    winner?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionResult"]>

  export type ElectionResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    winnerId?: boolean
    totalVotes?: boolean
    declaredAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    winner?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionResult"]>

  export type ElectionResultSelectScalar = {
    id?: boolean
    electionId?: boolean
    positionId?: boolean
    winnerId?: boolean
    totalVotes?: boolean
    declaredAt?: boolean
  }

  export type ElectionResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "electionId" | "positionId" | "winnerId" | "totalVotes" | "declaredAt", ExtArgs["result"]["electionResult"]>
  export type ElectionResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    winner?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ElectionResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    winner?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ElectionResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    winner?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $ElectionResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElectionResult"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      winner: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      electionId: string
      positionId: string
      winnerId: string
      totalVotes: number
      declaredAt: Date
    }, ExtArgs["result"]["electionResult"]>
    composites: {}
  }

  type ElectionResultGetPayload<S extends boolean | null | undefined | ElectionResultDefaultArgs> = $Result.GetResult<Prisma.$ElectionResultPayload, S>

  type ElectionResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionResultCountAggregateInputType | true
    }

  export interface ElectionResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElectionResult'], meta: { name: 'ElectionResult' } }
    /**
     * Find zero or one ElectionResult that matches the filter.
     * @param {ElectionResultFindUniqueArgs} args - Arguments to find a ElectionResult
     * @example
     * // Get one ElectionResult
     * const electionResult = await prisma.electionResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionResultFindUniqueArgs>(args: SelectSubset<T, ElectionResultFindUniqueArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElectionResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionResultFindUniqueOrThrowArgs} args - Arguments to find a ElectionResult
     * @example
     * // Get one ElectionResult
     * const electionResult = await prisma.electionResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultFindFirstArgs} args - Arguments to find a ElectionResult
     * @example
     * // Get one ElectionResult
     * const electionResult = await prisma.electionResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionResultFindFirstArgs>(args?: SelectSubset<T, ElectionResultFindFirstArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultFindFirstOrThrowArgs} args - Arguments to find a ElectionResult
     * @example
     * // Get one ElectionResult
     * const electionResult = await prisma.electionResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElectionResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElectionResults
     * const electionResults = await prisma.electionResult.findMany()
     * 
     * // Get first 10 ElectionResults
     * const electionResults = await prisma.electionResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionResultWithIdOnly = await prisma.electionResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElectionResultFindManyArgs>(args?: SelectSubset<T, ElectionResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElectionResult.
     * @param {ElectionResultCreateArgs} args - Arguments to create a ElectionResult.
     * @example
     * // Create one ElectionResult
     * const ElectionResult = await prisma.electionResult.create({
     *   data: {
     *     // ... data to create a ElectionResult
     *   }
     * })
     * 
     */
    create<T extends ElectionResultCreateArgs>(args: SelectSubset<T, ElectionResultCreateArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElectionResults.
     * @param {ElectionResultCreateManyArgs} args - Arguments to create many ElectionResults.
     * @example
     * // Create many ElectionResults
     * const electionResult = await prisma.electionResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionResultCreateManyArgs>(args?: SelectSubset<T, ElectionResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ElectionResults and returns the data saved in the database.
     * @param {ElectionResultCreateManyAndReturnArgs} args - Arguments to create many ElectionResults.
     * @example
     * // Create many ElectionResults
     * const electionResult = await prisma.electionResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ElectionResults and only return the `id`
     * const electionResultWithIdOnly = await prisma.electionResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElectionResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ElectionResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ElectionResult.
     * @param {ElectionResultDeleteArgs} args - Arguments to delete one ElectionResult.
     * @example
     * // Delete one ElectionResult
     * const ElectionResult = await prisma.electionResult.delete({
     *   where: {
     *     // ... filter to delete one ElectionResult
     *   }
     * })
     * 
     */
    delete<T extends ElectionResultDeleteArgs>(args: SelectSubset<T, ElectionResultDeleteArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElectionResult.
     * @param {ElectionResultUpdateArgs} args - Arguments to update one ElectionResult.
     * @example
     * // Update one ElectionResult
     * const electionResult = await prisma.electionResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionResultUpdateArgs>(args: SelectSubset<T, ElectionResultUpdateArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElectionResults.
     * @param {ElectionResultDeleteManyArgs} args - Arguments to filter ElectionResults to delete.
     * @example
     * // Delete a few ElectionResults
     * const { count } = await prisma.electionResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionResultDeleteManyArgs>(args?: SelectSubset<T, ElectionResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElectionResults
     * const electionResult = await prisma.electionResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionResultUpdateManyArgs>(args: SelectSubset<T, ElectionResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectionResults and returns the data updated in the database.
     * @param {ElectionResultUpdateManyAndReturnArgs} args - Arguments to update many ElectionResults.
     * @example
     * // Update many ElectionResults
     * const electionResult = await prisma.electionResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ElectionResults and only return the `id`
     * const electionResultWithIdOnly = await prisma.electionResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElectionResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ElectionResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ElectionResult.
     * @param {ElectionResultUpsertArgs} args - Arguments to update or create a ElectionResult.
     * @example
     * // Update or create a ElectionResult
     * const electionResult = await prisma.electionResult.upsert({
     *   create: {
     *     // ... data to create a ElectionResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElectionResult we want to update
     *   }
     * })
     */
    upsert<T extends ElectionResultUpsertArgs>(args: SelectSubset<T, ElectionResultUpsertArgs<ExtArgs>>): Prisma__ElectionResultClient<$Result.GetResult<Prisma.$ElectionResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ElectionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultCountArgs} args - Arguments to filter ElectionResults to count.
     * @example
     * // Count the number of ElectionResults
     * const count = await prisma.electionResult.count({
     *   where: {
     *     // ... the filter for the ElectionResults we want to count
     *   }
     * })
    **/
    count<T extends ElectionResultCountArgs>(
      args?: Subset<T, ElectionResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElectionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionResultAggregateArgs>(args: Subset<T, ElectionResultAggregateArgs>): Prisma.PrismaPromise<GetElectionResultAggregateType<T>>

    /**
     * Group by ElectionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionResultGroupByArgs['orderBy'] }
        : { orderBy?: ElectionResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElectionResult model
   */
  readonly fields: ElectionResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElectionResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ElectionResult model
   */
  interface ElectionResultFieldRefs {
    readonly id: FieldRef<"ElectionResult", 'String'>
    readonly electionId: FieldRef<"ElectionResult", 'String'>
    readonly positionId: FieldRef<"ElectionResult", 'String'>
    readonly winnerId: FieldRef<"ElectionResult", 'String'>
    readonly totalVotes: FieldRef<"ElectionResult", 'Int'>
    readonly declaredAt: FieldRef<"ElectionResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ElectionResult findUnique
   */
  export type ElectionResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionResult to fetch.
     */
    where: ElectionResultWhereUniqueInput
  }

  /**
   * ElectionResult findUniqueOrThrow
   */
  export type ElectionResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionResult to fetch.
     */
    where: ElectionResultWhereUniqueInput
  }

  /**
   * ElectionResult findFirst
   */
  export type ElectionResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionResult to fetch.
     */
    where?: ElectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionResults to fetch.
     */
    orderBy?: ElectionResultOrderByWithRelationInput | ElectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionResults.
     */
    cursor?: ElectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionResults.
     */
    distinct?: ElectionResultScalarFieldEnum | ElectionResultScalarFieldEnum[]
  }

  /**
   * ElectionResult findFirstOrThrow
   */
  export type ElectionResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionResult to fetch.
     */
    where?: ElectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionResults to fetch.
     */
    orderBy?: ElectionResultOrderByWithRelationInput | ElectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionResults.
     */
    cursor?: ElectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionResults.
     */
    distinct?: ElectionResultScalarFieldEnum | ElectionResultScalarFieldEnum[]
  }

  /**
   * ElectionResult findMany
   */
  export type ElectionResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionResults to fetch.
     */
    where?: ElectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionResults to fetch.
     */
    orderBy?: ElectionResultOrderByWithRelationInput | ElectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElectionResults.
     */
    cursor?: ElectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionResults.
     */
    distinct?: ElectionResultScalarFieldEnum | ElectionResultScalarFieldEnum[]
  }

  /**
   * ElectionResult create
   */
  export type ElectionResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ElectionResult.
     */
    data: XOR<ElectionResultCreateInput, ElectionResultUncheckedCreateInput>
  }

  /**
   * ElectionResult createMany
   */
  export type ElectionResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElectionResults.
     */
    data: ElectionResultCreateManyInput | ElectionResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ElectionResult createManyAndReturn
   */
  export type ElectionResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * The data used to create many ElectionResults.
     */
    data: ElectionResultCreateManyInput | ElectionResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElectionResult update
   */
  export type ElectionResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ElectionResult.
     */
    data: XOR<ElectionResultUpdateInput, ElectionResultUncheckedUpdateInput>
    /**
     * Choose, which ElectionResult to update.
     */
    where: ElectionResultWhereUniqueInput
  }

  /**
   * ElectionResult updateMany
   */
  export type ElectionResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElectionResults.
     */
    data: XOR<ElectionResultUpdateManyMutationInput, ElectionResultUncheckedUpdateManyInput>
    /**
     * Filter which ElectionResults to update
     */
    where?: ElectionResultWhereInput
    /**
     * Limit how many ElectionResults to update.
     */
    limit?: number
  }

  /**
   * ElectionResult updateManyAndReturn
   */
  export type ElectionResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * The data used to update ElectionResults.
     */
    data: XOR<ElectionResultUpdateManyMutationInput, ElectionResultUncheckedUpdateManyInput>
    /**
     * Filter which ElectionResults to update
     */
    where?: ElectionResultWhereInput
    /**
     * Limit how many ElectionResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElectionResult upsert
   */
  export type ElectionResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ElectionResult to update in case it exists.
     */
    where: ElectionResultWhereUniqueInput
    /**
     * In case the ElectionResult found by the `where` argument doesn't exist, create a new ElectionResult with this data.
     */
    create: XOR<ElectionResultCreateInput, ElectionResultUncheckedCreateInput>
    /**
     * In case the ElectionResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionResultUpdateInput, ElectionResultUncheckedUpdateInput>
  }

  /**
   * ElectionResult delete
   */
  export type ElectionResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
    /**
     * Filter which ElectionResult to delete.
     */
    where: ElectionResultWhereUniqueInput
  }

  /**
   * ElectionResult deleteMany
   */
  export type ElectionResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionResults to delete
     */
    where?: ElectionResultWhereInput
    /**
     * Limit how many ElectionResults to delete.
     */
    limit?: number
  }

  /**
   * ElectionResult without action
   */
  export type ElectionResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionResult
     */
    select?: ElectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionResult
     */
    omit?: ElectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionResultInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.AdminRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditLogs?: boolean | Admin$auditLogsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | Admin$auditLogsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.AdminRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends Admin$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'AdminRole'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.auditLogs
   */
  export type Admin$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    entity: number
    entityId: number
    description: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    adminId: string
    action: string
    entity: string
    entityId: string | null
    description: string | null
    ipAddress: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "entity" | "entityId" | "description" | "ipAddress" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      action: string
      entity: string
      entityId: string | null
      description: string | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly adminId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    key: string
    value: string
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "updatedAt", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    admissionId: 'admissionId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    fatherName: 'fatherName',
    motherName: 'motherName',
    mobile: 'mobile',
    fatherMobile: 'fatherMobile',
    motherMobile: 'motherMobile',
    email: 'email',
    gender: 'gender',
    dob: 'dob',
    className: 'className',
    section: 'section',
    batchId: 'batchId',
    courseId: 'courseId',
    sessionId: 'sessionId',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    pincode: 'pincode',
    bloodGroup: 'bloodGroup',
    religion: 'religion',
    nationality: 'nationality',
    loginCount: 'loginCount',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ElectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startAt: 'startAt',
    endAt: 'endAt',
    status: 'status',
    isCurrent: 'isCurrent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ElectionScalarFieldEnum = (typeof ElectionScalarFieldEnum)[keyof typeof ElectionScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    electionId: 'electionId',
    name: 'name',
    description: 'description',
    maxVotes: 'maxVotes',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    electionId: 'electionId',
    positionId: 'positionId',
    studentId: 'studentId',
    admissionId: 'admissionId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    fullName: 'fullName',
    className: 'className',
    section: 'section',
    image: 'image',
    slogan: 'slogan',
    manifesto: 'manifesto',
    symbol: 'symbol',
    voteCount: 'voteCount',
    isWinner: 'isWinner',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    electionId: 'electionId',
    positionId: 'positionId',
    candidateId: 'candidateId',
    voterId: 'voterId',
    createdAt: 'createdAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const ElectionResultScalarFieldEnum: {
    id: 'id',
    electionId: 'electionId',
    positionId: 'positionId',
    winnerId: 'winnerId',
    totalVotes: 'totalVotes',
    declaredAt: 'declaredAt'
  };

  export type ElectionResultScalarFieldEnum = (typeof ElectionResultScalarFieldEnum)[keyof typeof ElectionResultScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ElectionStatus'
   */
  export type EnumElectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ElectionStatus'>
    


  /**
   * Reference to a field of type 'ElectionStatus[]'
   */
  export type ListEnumElectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ElectionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    studentId?: StringFilter<"User"> | string
    admissionId?: StringNullableFilter<"User"> | string | null
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    fatherMobile?: StringNullableFilter<"User"> | string | null
    motherMobile?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    className?: StringNullableFilter<"User"> | string | null
    section?: StringNullableFilter<"User"> | string | null
    batchId?: StringNullableFilter<"User"> | string | null
    courseId?: StringNullableFilter<"User"> | string | null
    sessionId?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    religion?: StringNullableFilter<"User"> | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    loginCount?: IntFilter<"User"> | number
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    votes?: VoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    fatherMobile?: SortOrderInput | SortOrder
    motherMobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    courseId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    loginCount?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votes?: VoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    admissionId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    fatherMobile?: StringNullableFilter<"User"> | string | null
    motherMobile?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    className?: StringNullableFilter<"User"> | string | null
    section?: StringNullableFilter<"User"> | string | null
    batchId?: StringNullableFilter<"User"> | string | null
    courseId?: StringNullableFilter<"User"> | string | null
    sessionId?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    religion?: StringNullableFilter<"User"> | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    loginCount?: IntFilter<"User"> | number
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    votes?: VoteListRelationFilter
  }, "id" | "studentId" | "admissionId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    fatherMobile?: SortOrderInput | SortOrder
    motherMobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    courseId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    loginCount?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    studentId?: StringWithAggregatesFilter<"User"> | string
    admissionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    fatherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    motherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    fatherMobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    motherMobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    className?: StringNullableWithAggregatesFilter<"User"> | string | null
    section?: StringNullableWithAggregatesFilter<"User"> | string | null
    batchId?: StringNullableWithAggregatesFilter<"User"> | string | null
    courseId?: StringNullableWithAggregatesFilter<"User"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    bloodGroup?: StringNullableWithAggregatesFilter<"User"> | string | null
    religion?: StringNullableWithAggregatesFilter<"User"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginCount?: IntWithAggregatesFilter<"User"> | number
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ElectionWhereInput = {
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    id?: StringFilter<"Election"> | string
    title?: StringFilter<"Election"> | string
    description?: StringNullableFilter<"Election"> | string | null
    startAt?: DateTimeFilter<"Election"> | Date | string
    endAt?: DateTimeFilter<"Election"> | Date | string
    status?: EnumElectionStatusFilter<"Election"> | $Enums.ElectionStatus
    isCurrent?: BoolFilter<"Election"> | boolean
    createdAt?: DateTimeFilter<"Election"> | Date | string
    updatedAt?: DateTimeFilter<"Election"> | Date | string
    positions?: PositionListRelationFilter
    votes?: VoteListRelationFilter
    results?: ElectionResultListRelationFilter
    candidates?: CandidateListRelationFilter
  }

  export type ElectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    positions?: PositionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    results?: ElectionResultOrderByRelationAggregateInput
    candidates?: CandidateOrderByRelationAggregateInput
  }

  export type ElectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    title?: StringFilter<"Election"> | string
    description?: StringNullableFilter<"Election"> | string | null
    startAt?: DateTimeFilter<"Election"> | Date | string
    endAt?: DateTimeFilter<"Election"> | Date | string
    status?: EnumElectionStatusFilter<"Election"> | $Enums.ElectionStatus
    isCurrent?: BoolFilter<"Election"> | boolean
    createdAt?: DateTimeFilter<"Election"> | Date | string
    updatedAt?: DateTimeFilter<"Election"> | Date | string
    positions?: PositionListRelationFilter
    votes?: VoteListRelationFilter
    results?: ElectionResultListRelationFilter
    candidates?: CandidateListRelationFilter
  }, "id">

  export type ElectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ElectionCountOrderByAggregateInput
    _max?: ElectionMaxOrderByAggregateInput
    _min?: ElectionMinOrderByAggregateInput
  }

  export type ElectionScalarWhereWithAggregatesInput = {
    AND?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    OR?: ElectionScalarWhereWithAggregatesInput[]
    NOT?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Election"> | string
    title?: StringWithAggregatesFilter<"Election"> | string
    description?: StringNullableWithAggregatesFilter<"Election"> | string | null
    startAt?: DateTimeWithAggregatesFilter<"Election"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Election"> | Date | string
    status?: EnumElectionStatusWithAggregatesFilter<"Election"> | $Enums.ElectionStatus
    isCurrent?: BoolWithAggregatesFilter<"Election"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Election"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Election"> | Date | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: StringFilter<"Position"> | string
    electionId?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    description?: StringNullableFilter<"Position"> | string | null
    maxVotes?: IntFilter<"Position"> | number
    displayOrder?: IntFilter<"Position"> | number
    createdAt?: DateTimeFilter<"Position"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    candidates?: CandidateListRelationFilter
    votes?: VoteListRelationFilter
    result?: XOR<ElectionResultNullableScalarRelationFilter, ElectionResultWhereInput> | null
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    electionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    maxVotes?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    election?: ElectionOrderByWithRelationInput
    candidates?: CandidateOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    result?: ElectionResultOrderByWithRelationInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    electionId_name?: PositionElectionIdNameCompoundUniqueInput
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    electionId?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    description?: StringNullableFilter<"Position"> | string | null
    maxVotes?: IntFilter<"Position"> | number
    displayOrder?: IntFilter<"Position"> | number
    createdAt?: DateTimeFilter<"Position"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    candidates?: CandidateListRelationFilter
    votes?: VoteListRelationFilter
    result?: XOR<ElectionResultNullableScalarRelationFilter, ElectionResultWhereInput> | null
  }, "id" | "electionId_name">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    electionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    maxVotes?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Position"> | string
    electionId?: StringWithAggregatesFilter<"Position"> | string
    name?: StringWithAggregatesFilter<"Position"> | string
    description?: StringNullableWithAggregatesFilter<"Position"> | string | null
    maxVotes?: IntWithAggregatesFilter<"Position"> | number
    displayOrder?: IntWithAggregatesFilter<"Position"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    electionId?: StringFilter<"Candidate"> | string
    positionId?: StringFilter<"Candidate"> | string
    studentId?: StringFilter<"Candidate"> | string
    admissionId?: StringNullableFilter<"Candidate"> | string | null
    firstName?: StringFilter<"Candidate"> | string
    middleName?: StringNullableFilter<"Candidate"> | string | null
    lastName?: StringNullableFilter<"Candidate"> | string | null
    fullName?: StringFilter<"Candidate"> | string
    className?: StringNullableFilter<"Candidate"> | string | null
    section?: StringNullableFilter<"Candidate"> | string | null
    image?: StringNullableFilter<"Candidate"> | string | null
    slogan?: StringNullableFilter<"Candidate"> | string | null
    manifesto?: StringNullableFilter<"Candidate"> | string | null
    symbol?: StringNullableFilter<"Candidate"> | string | null
    voteCount?: IntFilter<"Candidate"> | number
    isWinner?: BoolFilter<"Candidate"> | boolean
    isActive?: BoolFilter<"Candidate"> | boolean
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    votes?: VoteListRelationFilter
    results?: ElectionResultListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fullName?: SortOrder
    className?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    manifesto?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    voteCount?: SortOrder
    isWinner?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    election?: ElectionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
    results?: ElectionResultOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    electionId?: StringFilter<"Candidate"> | string
    positionId?: StringFilter<"Candidate"> | string
    studentId?: StringFilter<"Candidate"> | string
    admissionId?: StringNullableFilter<"Candidate"> | string | null
    firstName?: StringFilter<"Candidate"> | string
    middleName?: StringNullableFilter<"Candidate"> | string | null
    lastName?: StringNullableFilter<"Candidate"> | string | null
    fullName?: StringFilter<"Candidate"> | string
    className?: StringNullableFilter<"Candidate"> | string | null
    section?: StringNullableFilter<"Candidate"> | string | null
    image?: StringNullableFilter<"Candidate"> | string | null
    slogan?: StringNullableFilter<"Candidate"> | string | null
    manifesto?: StringNullableFilter<"Candidate"> | string | null
    symbol?: StringNullableFilter<"Candidate"> | string | null
    voteCount?: IntFilter<"Candidate"> | number
    isWinner?: BoolFilter<"Candidate"> | boolean
    isActive?: BoolFilter<"Candidate"> | boolean
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    votes?: VoteListRelationFilter
    results?: ElectionResultListRelationFilter
  }, "id">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fullName?: SortOrder
    className?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    manifesto?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    voteCount?: SortOrder
    isWinner?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _avg?: CandidateAvgOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
    _sum?: CandidateSumOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    electionId?: StringWithAggregatesFilter<"Candidate"> | string
    positionId?: StringWithAggregatesFilter<"Candidate"> | string
    studentId?: StringWithAggregatesFilter<"Candidate"> | string
    admissionId?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    firstName?: StringWithAggregatesFilter<"Candidate"> | string
    middleName?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    fullName?: StringWithAggregatesFilter<"Candidate"> | string
    className?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    section?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    image?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    slogan?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    manifesto?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    symbol?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    voteCount?: IntWithAggregatesFilter<"Candidate"> | number
    isWinner?: BoolWithAggregatesFilter<"Candidate"> | boolean
    isActive?: BoolWithAggregatesFilter<"Candidate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    electionId?: StringFilter<"Vote"> | string
    positionId?: StringFilter<"Vote"> | string
    candidateId?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    voter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    candidateId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    election?: ElectionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    candidate?: CandidateOrderByWithRelationInput
    voter?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId_positionId?: VoteVoterIdPositionIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    electionId?: StringFilter<"Vote"> | string
    positionId?: StringFilter<"Vote"> | string
    candidateId?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    voter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "voterId_positionId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    candidateId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    electionId?: StringWithAggregatesFilter<"Vote"> | string
    positionId?: StringWithAggregatesFilter<"Vote"> | string
    candidateId?: StringWithAggregatesFilter<"Vote"> | string
    voterId?: StringWithAggregatesFilter<"Vote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type ElectionResultWhereInput = {
    AND?: ElectionResultWhereInput | ElectionResultWhereInput[]
    OR?: ElectionResultWhereInput[]
    NOT?: ElectionResultWhereInput | ElectionResultWhereInput[]
    id?: StringFilter<"ElectionResult"> | string
    electionId?: StringFilter<"ElectionResult"> | string
    positionId?: StringFilter<"ElectionResult"> | string
    winnerId?: StringFilter<"ElectionResult"> | string
    totalVotes?: IntFilter<"ElectionResult"> | number
    declaredAt?: DateTimeFilter<"ElectionResult"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    winner?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type ElectionResultOrderByWithRelationInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    winnerId?: SortOrder
    totalVotes?: SortOrder
    declaredAt?: SortOrder
    election?: ElectionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    winner?: CandidateOrderByWithRelationInput
  }

  export type ElectionResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    positionId?: string
    AND?: ElectionResultWhereInput | ElectionResultWhereInput[]
    OR?: ElectionResultWhereInput[]
    NOT?: ElectionResultWhereInput | ElectionResultWhereInput[]
    electionId?: StringFilter<"ElectionResult"> | string
    winnerId?: StringFilter<"ElectionResult"> | string
    totalVotes?: IntFilter<"ElectionResult"> | number
    declaredAt?: DateTimeFilter<"ElectionResult"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    winner?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id" | "positionId">

  export type ElectionResultOrderByWithAggregationInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    winnerId?: SortOrder
    totalVotes?: SortOrder
    declaredAt?: SortOrder
    _count?: ElectionResultCountOrderByAggregateInput
    _avg?: ElectionResultAvgOrderByAggregateInput
    _max?: ElectionResultMaxOrderByAggregateInput
    _min?: ElectionResultMinOrderByAggregateInput
    _sum?: ElectionResultSumOrderByAggregateInput
  }

  export type ElectionResultScalarWhereWithAggregatesInput = {
    AND?: ElectionResultScalarWhereWithAggregatesInput | ElectionResultScalarWhereWithAggregatesInput[]
    OR?: ElectionResultScalarWhereWithAggregatesInput[]
    NOT?: ElectionResultScalarWhereWithAggregatesInput | ElectionResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ElectionResult"> | string
    electionId?: StringWithAggregatesFilter<"ElectionResult"> | string
    positionId?: StringWithAggregatesFilter<"ElectionResult"> | string
    winnerId?: StringWithAggregatesFilter<"ElectionResult"> | string
    totalVotes?: IntWithAggregatesFilter<"ElectionResult"> | number
    declaredAt?: DateTimeWithAggregatesFilter<"ElectionResult"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    auditLogs?: AuditLogListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"Admin"> | $Enums.AdminRole
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    adminId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    adminId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    adminId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    description?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "id" | "key">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fatherName?: string | null
    motherName?: string | null
    mobile?: string | null
    fatherMobile?: string | null
    motherMobile?: string | null
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    className?: string | null
    section?: string | null
    batchId?: string | null
    courseId?: string | null
    sessionId?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    bloodGroup?: string | null
    religion?: string | null
    nationality?: string | null
    loginCount?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fatherName?: string | null
    motherName?: string | null
    mobile?: string | null
    fatherMobile?: string | null
    motherMobile?: string | null
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    className?: string | null
    section?: string | null
    batchId?: string | null
    courseId?: string | null
    sessionId?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    bloodGroup?: string | null
    religion?: string | null
    nationality?: string | null
    loginCount?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fatherName?: string | null
    motherName?: string | null
    mobile?: string | null
    fatherMobile?: string | null
    motherMobile?: string | null
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    className?: string | null
    section?: string | null
    batchId?: string | null
    courseId?: string | null
    sessionId?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    bloodGroup?: string | null
    religion?: string | null
    nationality?: string | null
    loginCount?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionCreateInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    results?: ElectionResultCreateNestedManyWithoutElectionInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutElectionInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ElectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutPositionsInput
    candidates?: CandidateCreateNestedManyWithoutPositionInput
    votes?: VoteCreateNestedManyWithoutPositionInput
    result?: ElectionResultCreateNestedOneWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    id?: string
    electionId: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutPositionInput
    votes?: VoteUncheckedCreateNestedManyWithoutPositionInput
    result?: ElectionResultUncheckedCreateNestedOneWithoutPositionInput
  }

  export type PositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutPositionsNestedInput
    candidates?: CandidateUpdateManyWithoutPositionNestedInput
    votes?: VoteUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUpdateOneWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutPositionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUncheckedUpdateOneWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: string
    electionId: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
  }

  export type PositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    election: ElectionCreateNestedOneWithoutCandidatesInput
    position: PositionCreateNestedOneWithoutCandidatesInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
    results?: ElectionResultCreateNestedManyWithoutWinnerInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    electionId: string
    positionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutCandidatesNestedInput
    position?: PositionUpdateOneRequiredWithoutCandidatesNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
    results?: ElectionResultUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: string
    electionId: string
    positionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    id?: string
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutVotesInput
    position: PositionCreateNestedOneWithoutVotesInput
    candidate: CandidateCreateNestedOneWithoutVotesInput
    voter: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    electionId: string
    positionId: string
    candidateId: string
    voterId: string
    createdAt?: Date | string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
    position?: PositionUpdateOneRequiredWithoutVotesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
    voter?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: string
    electionId: string
    positionId: string
    candidateId: string
    voterId: string
    createdAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultCreateInput = {
    id?: string
    totalVotes: number
    declaredAt?: Date | string
    election: ElectionCreateNestedOneWithoutResultsInput
    position: PositionCreateNestedOneWithoutResultInput
    winner: CandidateCreateNestedOneWithoutResultsInput
  }

  export type ElectionResultUncheckedCreateInput = {
    id?: string
    electionId: string
    positionId: string
    winnerId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type ElectionResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutResultsNestedInput
    position?: PositionUpdateOneRequiredWithoutResultNestedInput
    winner?: CandidateUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ElectionResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultCreateManyInput = {
    id?: string
    electionId: string
    positionId: string
    winnerId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type ElectionResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    adminId: string
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    adminId: string
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    mobile?: SortOrder
    fatherMobile?: SortOrder
    motherMobile?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    section?: SortOrder
    batchId?: SortOrder
    courseId?: SortOrder
    sessionId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    bloodGroup?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    loginCount?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    loginCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    mobile?: SortOrder
    fatherMobile?: SortOrder
    motherMobile?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    section?: SortOrder
    batchId?: SortOrder
    courseId?: SortOrder
    sessionId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    bloodGroup?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    loginCount?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    mobile?: SortOrder
    fatherMobile?: SortOrder
    motherMobile?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    section?: SortOrder
    batchId?: SortOrder
    courseId?: SortOrder
    sessionId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    bloodGroup?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    loginCount?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    loginCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumElectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusFilter<$PrismaModel> | $Enums.ElectionStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type ElectionResultListRelationFilter = {
    every?: ElectionResultWhereInput
    some?: ElectionResultWhereInput
    none?: ElectionResultWhereInput
  }

  export type CandidateListRelationFilter = {
    every?: CandidateWhereInput
    some?: CandidateWhereInput
    none?: CandidateWhereInput
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumElectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ElectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumElectionStatusFilter<$PrismaModel>
    _max?: NestedEnumElectionStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ElectionScalarRelationFilter = {
    is?: ElectionWhereInput
    isNot?: ElectionWhereInput
  }

  export type ElectionResultNullableScalarRelationFilter = {
    is?: ElectionResultWhereInput | null
    isNot?: ElectionResultWhereInput | null
  }

  export type PositionElectionIdNameCompoundUniqueInput = {
    electionId: string
    name: string
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    maxVotes?: SortOrder
    displayOrder?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    maxVotes?: SortOrder
    displayOrder?: SortOrder
  }

  export type PositionScalarRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    className?: SortOrder
    section?: SortOrder
    image?: SortOrder
    slogan?: SortOrder
    manifesto?: SortOrder
    symbol?: SortOrder
    voteCount?: SortOrder
    isWinner?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateAvgOrderByAggregateInput = {
    voteCount?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    className?: SortOrder
    section?: SortOrder
    image?: SortOrder
    slogan?: SortOrder
    manifesto?: SortOrder
    symbol?: SortOrder
    voteCount?: SortOrder
    isWinner?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    studentId?: SortOrder
    admissionId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    className?: SortOrder
    section?: SortOrder
    image?: SortOrder
    slogan?: SortOrder
    manifesto?: SortOrder
    symbol?: SortOrder
    voteCount?: SortOrder
    isWinner?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateSumOrderByAggregateInput = {
    voteCount?: SortOrder
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VoteVoterIdPositionIdCompoundUniqueInput = {
    voterId: string
    positionId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    candidateId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    candidateId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    candidateId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
  }

  export type ElectionResultCountOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    winnerId?: SortOrder
    totalVotes?: SortOrder
    declaredAt?: SortOrder
  }

  export type ElectionResultAvgOrderByAggregateInput = {
    totalVotes?: SortOrder
  }

  export type ElectionResultMaxOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    winnerId?: SortOrder
    totalVotes?: SortOrder
    declaredAt?: SortOrder
  }

  export type ElectionResultMinOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    positionId?: SortOrder
    winnerId?: SortOrder
    totalVotes?: SortOrder
    declaredAt?: SortOrder
  }

  export type ElectionResultSumOrderByAggregateInput = {
    totalVotes?: SortOrder
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoteCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VoteUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type PositionCreateNestedManyWithoutElectionInput = {
    create?: XOR<PositionCreateWithoutElectionInput, PositionUncheckedCreateWithoutElectionInput> | PositionCreateWithoutElectionInput[] | PositionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutElectionInput | PositionCreateOrConnectWithoutElectionInput[]
    createMany?: PositionCreateManyElectionInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionResultCreateNestedManyWithoutElectionInput = {
    create?: XOR<ElectionResultCreateWithoutElectionInput, ElectionResultUncheckedCreateWithoutElectionInput> | ElectionResultCreateWithoutElectionInput[] | ElectionResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutElectionInput | ElectionResultCreateOrConnectWithoutElectionInput[]
    createMany?: ElectionResultCreateManyElectionInputEnvelope
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
  }

  export type CandidateCreateNestedManyWithoutElectionInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type PositionUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<PositionCreateWithoutElectionInput, PositionUncheckedCreateWithoutElectionInput> | PositionCreateWithoutElectionInput[] | PositionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutElectionInput | PositionCreateOrConnectWithoutElectionInput[]
    createMany?: PositionCreateManyElectionInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionResultUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<ElectionResultCreateWithoutElectionInput, ElectionResultUncheckedCreateWithoutElectionInput> | ElectionResultCreateWithoutElectionInput[] | ElectionResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutElectionInput | ElectionResultCreateOrConnectWithoutElectionInput[]
    createMany?: ElectionResultCreateManyElectionInputEnvelope
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type EnumElectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ElectionStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PositionUpdateManyWithoutElectionNestedInput = {
    create?: XOR<PositionCreateWithoutElectionInput, PositionUncheckedCreateWithoutElectionInput> | PositionCreateWithoutElectionInput[] | PositionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutElectionInput | PositionCreateOrConnectWithoutElectionInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutElectionInput | PositionUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: PositionCreateManyElectionInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutElectionInput | PositionUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutElectionInput | PositionUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutElectionInput | VoteUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutElectionInput | VoteUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutElectionInput | VoteUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ElectionResultUpdateManyWithoutElectionNestedInput = {
    create?: XOR<ElectionResultCreateWithoutElectionInput, ElectionResultUncheckedCreateWithoutElectionInput> | ElectionResultCreateWithoutElectionInput[] | ElectionResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutElectionInput | ElectionResultCreateOrConnectWithoutElectionInput[]
    upsert?: ElectionResultUpsertWithWhereUniqueWithoutElectionInput | ElectionResultUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: ElectionResultCreateManyElectionInputEnvelope
    set?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    disconnect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    delete?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    update?: ElectionResultUpdateWithWhereUniqueWithoutElectionInput | ElectionResultUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: ElectionResultUpdateManyWithWhereWithoutElectionInput | ElectionResultUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: ElectionResultScalarWhereInput | ElectionResultScalarWhereInput[]
  }

  export type CandidateUpdateManyWithoutElectionNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutElectionInput | CandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutElectionInput | CandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutElectionInput | CandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type PositionUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<PositionCreateWithoutElectionInput, PositionUncheckedCreateWithoutElectionInput> | PositionCreateWithoutElectionInput[] | PositionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutElectionInput | PositionCreateOrConnectWithoutElectionInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutElectionInput | PositionUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: PositionCreateManyElectionInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutElectionInput | PositionUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutElectionInput | PositionUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutElectionInput | VoteUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutElectionInput | VoteUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutElectionInput | VoteUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ElectionResultUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<ElectionResultCreateWithoutElectionInput, ElectionResultUncheckedCreateWithoutElectionInput> | ElectionResultCreateWithoutElectionInput[] | ElectionResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutElectionInput | ElectionResultCreateOrConnectWithoutElectionInput[]
    upsert?: ElectionResultUpsertWithWhereUniqueWithoutElectionInput | ElectionResultUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: ElectionResultCreateManyElectionInputEnvelope
    set?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    disconnect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    delete?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    update?: ElectionResultUpdateWithWhereUniqueWithoutElectionInput | ElectionResultUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: ElectionResultUpdateManyWithWhereWithoutElectionInput | ElectionResultUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: ElectionResultScalarWhereInput | ElectionResultScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutElectionInput | CandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutElectionInput | CandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutElectionInput | CandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type ElectionCreateNestedOneWithoutPositionsInput = {
    create?: XOR<ElectionCreateWithoutPositionsInput, ElectionUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutPositionsInput
    connect?: ElectionWhereUniqueInput
  }

  export type CandidateCreateNestedManyWithoutPositionInput = {
    create?: XOR<CandidateCreateWithoutPositionInput, CandidateUncheckedCreateWithoutPositionInput> | CandidateCreateWithoutPositionInput[] | CandidateUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutPositionInput | CandidateCreateOrConnectWithoutPositionInput[]
    createMany?: CandidateCreateManyPositionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutPositionInput = {
    create?: XOR<VoteCreateWithoutPositionInput, VoteUncheckedCreateWithoutPositionInput> | VoteCreateWithoutPositionInput[] | VoteUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPositionInput | VoteCreateOrConnectWithoutPositionInput[]
    createMany?: VoteCreateManyPositionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionResultCreateNestedOneWithoutPositionInput = {
    create?: XOR<ElectionResultCreateWithoutPositionInput, ElectionResultUncheckedCreateWithoutPositionInput>
    connectOrCreate?: ElectionResultCreateOrConnectWithoutPositionInput
    connect?: ElectionResultWhereUniqueInput
  }

  export type CandidateUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<CandidateCreateWithoutPositionInput, CandidateUncheckedCreateWithoutPositionInput> | CandidateCreateWithoutPositionInput[] | CandidateUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutPositionInput | CandidateCreateOrConnectWithoutPositionInput[]
    createMany?: CandidateCreateManyPositionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<VoteCreateWithoutPositionInput, VoteUncheckedCreateWithoutPositionInput> | VoteCreateWithoutPositionInput[] | VoteUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPositionInput | VoteCreateOrConnectWithoutPositionInput[]
    createMany?: VoteCreateManyPositionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionResultUncheckedCreateNestedOneWithoutPositionInput = {
    create?: XOR<ElectionResultCreateWithoutPositionInput, ElectionResultUncheckedCreateWithoutPositionInput>
    connectOrCreate?: ElectionResultCreateOrConnectWithoutPositionInput
    connect?: ElectionResultWhereUniqueInput
  }

  export type ElectionUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<ElectionCreateWithoutPositionsInput, ElectionUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutPositionsInput
    upsert?: ElectionUpsertWithoutPositionsInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutPositionsInput, ElectionUpdateWithoutPositionsInput>, ElectionUncheckedUpdateWithoutPositionsInput>
  }

  export type CandidateUpdateManyWithoutPositionNestedInput = {
    create?: XOR<CandidateCreateWithoutPositionInput, CandidateUncheckedCreateWithoutPositionInput> | CandidateCreateWithoutPositionInput[] | CandidateUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutPositionInput | CandidateCreateOrConnectWithoutPositionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutPositionInput | CandidateUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: CandidateCreateManyPositionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutPositionInput | CandidateUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutPositionInput | CandidateUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutPositionNestedInput = {
    create?: XOR<VoteCreateWithoutPositionInput, VoteUncheckedCreateWithoutPositionInput> | VoteCreateWithoutPositionInput[] | VoteUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPositionInput | VoteCreateOrConnectWithoutPositionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPositionInput | VoteUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: VoteCreateManyPositionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPositionInput | VoteUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPositionInput | VoteUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ElectionResultUpdateOneWithoutPositionNestedInput = {
    create?: XOR<ElectionResultCreateWithoutPositionInput, ElectionResultUncheckedCreateWithoutPositionInput>
    connectOrCreate?: ElectionResultCreateOrConnectWithoutPositionInput
    upsert?: ElectionResultUpsertWithoutPositionInput
    disconnect?: ElectionResultWhereInput | boolean
    delete?: ElectionResultWhereInput | boolean
    connect?: ElectionResultWhereUniqueInput
    update?: XOR<XOR<ElectionResultUpdateToOneWithWhereWithoutPositionInput, ElectionResultUpdateWithoutPositionInput>, ElectionResultUncheckedUpdateWithoutPositionInput>
  }

  export type CandidateUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<CandidateCreateWithoutPositionInput, CandidateUncheckedCreateWithoutPositionInput> | CandidateCreateWithoutPositionInput[] | CandidateUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutPositionInput | CandidateCreateOrConnectWithoutPositionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutPositionInput | CandidateUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: CandidateCreateManyPositionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutPositionInput | CandidateUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutPositionInput | CandidateUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<VoteCreateWithoutPositionInput, VoteUncheckedCreateWithoutPositionInput> | VoteCreateWithoutPositionInput[] | VoteUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPositionInput | VoteCreateOrConnectWithoutPositionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPositionInput | VoteUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: VoteCreateManyPositionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPositionInput | VoteUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPositionInput | VoteUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ElectionResultUncheckedUpdateOneWithoutPositionNestedInput = {
    create?: XOR<ElectionResultCreateWithoutPositionInput, ElectionResultUncheckedCreateWithoutPositionInput>
    connectOrCreate?: ElectionResultCreateOrConnectWithoutPositionInput
    upsert?: ElectionResultUpsertWithoutPositionInput
    disconnect?: ElectionResultWhereInput | boolean
    delete?: ElectionResultWhereInput | boolean
    connect?: ElectionResultWhereUniqueInput
    update?: XOR<XOR<ElectionResultUpdateToOneWithWhereWithoutPositionInput, ElectionResultUpdateWithoutPositionInput>, ElectionResultUncheckedUpdateWithoutPositionInput>
  }

  export type ElectionCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutCandidatesInput
    connect?: ElectionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<PositionCreateWithoutCandidatesInput, PositionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutCandidatesInput
    connect?: PositionWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutCandidateInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionResultCreateNestedManyWithoutWinnerInput = {
    create?: XOR<ElectionResultCreateWithoutWinnerInput, ElectionResultUncheckedCreateWithoutWinnerInput> | ElectionResultCreateWithoutWinnerInput[] | ElectionResultUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutWinnerInput | ElectionResultCreateOrConnectWithoutWinnerInput[]
    createMany?: ElectionResultCreateManyWinnerInputEnvelope
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionResultUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<ElectionResultCreateWithoutWinnerInput, ElectionResultUncheckedCreateWithoutWinnerInput> | ElectionResultCreateWithoutWinnerInput[] | ElectionResultUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutWinnerInput | ElectionResultCreateOrConnectWithoutWinnerInput[]
    createMany?: ElectionResultCreateManyWinnerInputEnvelope
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
  }

  export type ElectionUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutCandidatesInput
    upsert?: ElectionUpsertWithoutCandidatesInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutCandidatesInput, ElectionUpdateWithoutCandidatesInput>, ElectionUncheckedUpdateWithoutCandidatesInput>
  }

  export type PositionUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<PositionCreateWithoutCandidatesInput, PositionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutCandidatesInput
    upsert?: PositionUpsertWithoutCandidatesInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutCandidatesInput, PositionUpdateWithoutCandidatesInput>, PositionUncheckedUpdateWithoutCandidatesInput>
  }

  export type VoteUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCandidateInput | VoteUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCandidateInput | VoteUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCandidateInput | VoteUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ElectionResultUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<ElectionResultCreateWithoutWinnerInput, ElectionResultUncheckedCreateWithoutWinnerInput> | ElectionResultCreateWithoutWinnerInput[] | ElectionResultUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutWinnerInput | ElectionResultCreateOrConnectWithoutWinnerInput[]
    upsert?: ElectionResultUpsertWithWhereUniqueWithoutWinnerInput | ElectionResultUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: ElectionResultCreateManyWinnerInputEnvelope
    set?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    disconnect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    delete?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    update?: ElectionResultUpdateWithWhereUniqueWithoutWinnerInput | ElectionResultUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: ElectionResultUpdateManyWithWhereWithoutWinnerInput | ElectionResultUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: ElectionResultScalarWhereInput | ElectionResultScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCandidateInput | VoteUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCandidateInput | VoteUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCandidateInput | VoteUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ElectionResultUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<ElectionResultCreateWithoutWinnerInput, ElectionResultUncheckedCreateWithoutWinnerInput> | ElectionResultCreateWithoutWinnerInput[] | ElectionResultUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ElectionResultCreateOrConnectWithoutWinnerInput | ElectionResultCreateOrConnectWithoutWinnerInput[]
    upsert?: ElectionResultUpsertWithWhereUniqueWithoutWinnerInput | ElectionResultUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: ElectionResultCreateManyWinnerInputEnvelope
    set?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    disconnect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    delete?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    connect?: ElectionResultWhereUniqueInput | ElectionResultWhereUniqueInput[]
    update?: ElectionResultUpdateWithWhereUniqueWithoutWinnerInput | ElectionResultUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: ElectionResultUpdateManyWithWhereWithoutWinnerInput | ElectionResultUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: ElectionResultScalarWhereInput | ElectionResultScalarWhereInput[]
  }

  export type ElectionCreateNestedOneWithoutVotesInput = {
    create?: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotesInput
    connect?: ElectionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutVotesInput = {
    create?: XOR<PositionCreateWithoutVotesInput, PositionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutVotesInput
    connect?: PositionWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutVotesInput = {
    create?: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutVotesInput
    connect?: CandidateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type ElectionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotesInput
    upsert?: ElectionUpsertWithoutVotesInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutVotesInput, ElectionUpdateWithoutVotesInput>, ElectionUncheckedUpdateWithoutVotesInput>
  }

  export type PositionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PositionCreateWithoutVotesInput, PositionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutVotesInput
    upsert?: PositionUpsertWithoutVotesInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutVotesInput, PositionUpdateWithoutVotesInput>, PositionUncheckedUpdateWithoutVotesInput>
  }

  export type CandidateUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutVotesInput
    upsert?: CandidateUpsertWithoutVotesInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutVotesInput, CandidateUpdateWithoutVotesInput>, CandidateUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionCreateNestedOneWithoutResultsInput = {
    create?: XOR<ElectionCreateWithoutResultsInput, ElectionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutResultsInput
    connect?: ElectionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutResultInput = {
    create?: XOR<PositionCreateWithoutResultInput, PositionUncheckedCreateWithoutResultInput>
    connectOrCreate?: PositionCreateOrConnectWithoutResultInput
    connect?: PositionWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutResultsInput = {
    create?: XOR<CandidateCreateWithoutResultsInput, CandidateUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutResultsInput
    connect?: CandidateWhereUniqueInput
  }

  export type ElectionUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ElectionCreateWithoutResultsInput, ElectionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutResultsInput
    upsert?: ElectionUpsertWithoutResultsInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutResultsInput, ElectionUpdateWithoutResultsInput>, ElectionUncheckedUpdateWithoutResultsInput>
  }

  export type PositionUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<PositionCreateWithoutResultInput, PositionUncheckedCreateWithoutResultInput>
    connectOrCreate?: PositionCreateOrConnectWithoutResultInput
    upsert?: PositionUpsertWithoutResultInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutResultInput, PositionUpdateWithoutResultInput>, PositionUncheckedUpdateWithoutResultInput>
  }

  export type CandidateUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<CandidateCreateWithoutResultsInput, CandidateUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutResultsInput
    upsert?: CandidateUpsertWithoutResultsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutResultsInput, CandidateUpdateWithoutResultsInput>, CandidateUncheckedUpdateWithoutResultsInput>
  }

  export type AuditLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type AuditLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutAdminInput | AuditLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutAdminInput | AuditLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutAdminInput | AuditLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutAdminInput | AuditLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutAdminInput | AuditLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutAdminInput | AuditLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAuditLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAuditLogsInput
    upsert?: AdminUpsertWithoutAuditLogsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutAuditLogsInput, AdminUpdateWithoutAuditLogsInput>, AdminUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumElectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusFilter<$PrismaModel> | $Enums.ElectionStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumElectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ElectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumElectionStatusFilter<$PrismaModel>
    _max?: NestedEnumElectionStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type VoteCreateWithoutVoterInput = {
    id?: string
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutVotesInput
    position: PositionCreateNestedOneWithoutVotesInput
    candidate: CandidateCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutVoterInput = {
    id?: string
    electionId: string
    positionId: string
    candidateId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutVoterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteCreateManyVoterInputEnvelope = {
    data: VoteCreateManyVoterInput | VoteCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type VoteUpsertWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUpdateManyWithWhereWithoutVoterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVoterInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    electionId?: StringFilter<"Vote"> | string
    positionId?: StringFilter<"Vote"> | string
    candidateId?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type PositionCreateWithoutElectionInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutPositionInput
    votes?: VoteCreateNestedManyWithoutPositionInput
    result?: ElectionResultCreateNestedOneWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutElectionInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutPositionInput
    votes?: VoteUncheckedCreateNestedManyWithoutPositionInput
    result?: ElectionResultUncheckedCreateNestedOneWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutElectionInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutElectionInput, PositionUncheckedCreateWithoutElectionInput>
  }

  export type PositionCreateManyElectionInputEnvelope = {
    data: PositionCreateManyElectionInput | PositionCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutElectionInput = {
    id?: string
    createdAt?: Date | string
    position: PositionCreateNestedOneWithoutVotesInput
    candidate: CandidateCreateNestedOneWithoutVotesInput
    voter: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutElectionInput = {
    id?: string
    positionId: string
    candidateId: string
    voterId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutElectionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput>
  }

  export type VoteCreateManyElectionInputEnvelope = {
    data: VoteCreateManyElectionInput | VoteCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type ElectionResultCreateWithoutElectionInput = {
    id?: string
    totalVotes: number
    declaredAt?: Date | string
    position: PositionCreateNestedOneWithoutResultInput
    winner: CandidateCreateNestedOneWithoutResultsInput
  }

  export type ElectionResultUncheckedCreateWithoutElectionInput = {
    id?: string
    positionId: string
    winnerId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type ElectionResultCreateOrConnectWithoutElectionInput = {
    where: ElectionResultWhereUniqueInput
    create: XOR<ElectionResultCreateWithoutElectionInput, ElectionResultUncheckedCreateWithoutElectionInput>
  }

  export type ElectionResultCreateManyElectionInputEnvelope = {
    data: ElectionResultCreateManyElectionInput | ElectionResultCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type CandidateCreateWithoutElectionInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    position: PositionCreateNestedOneWithoutCandidatesInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
    results?: ElectionResultCreateNestedManyWithoutWinnerInput
  }

  export type CandidateUncheckedCreateWithoutElectionInput = {
    id?: string
    positionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type CandidateCreateOrConnectWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput>
  }

  export type CandidateCreateManyElectionInputEnvelope = {
    data: CandidateCreateManyElectionInput | CandidateCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type PositionUpsertWithWhereUniqueWithoutElectionInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutElectionInput, PositionUncheckedUpdateWithoutElectionInput>
    create: XOR<PositionCreateWithoutElectionInput, PositionUncheckedCreateWithoutElectionInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutElectionInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutElectionInput, PositionUncheckedUpdateWithoutElectionInput>
  }

  export type PositionUpdateManyWithWhereWithoutElectionInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutElectionInput>
  }

  export type PositionScalarWhereInput = {
    AND?: PositionScalarWhereInput | PositionScalarWhereInput[]
    OR?: PositionScalarWhereInput[]
    NOT?: PositionScalarWhereInput | PositionScalarWhereInput[]
    id?: StringFilter<"Position"> | string
    electionId?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    description?: StringNullableFilter<"Position"> | string | null
    maxVotes?: IntFilter<"Position"> | number
    displayOrder?: IntFilter<"Position"> | number
    createdAt?: DateTimeFilter<"Position"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutElectionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutElectionInput, VoteUncheckedUpdateWithoutElectionInput>
    create: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutElectionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutElectionInput, VoteUncheckedUpdateWithoutElectionInput>
  }

  export type VoteUpdateManyWithWhereWithoutElectionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutElectionInput>
  }

  export type ElectionResultUpsertWithWhereUniqueWithoutElectionInput = {
    where: ElectionResultWhereUniqueInput
    update: XOR<ElectionResultUpdateWithoutElectionInput, ElectionResultUncheckedUpdateWithoutElectionInput>
    create: XOR<ElectionResultCreateWithoutElectionInput, ElectionResultUncheckedCreateWithoutElectionInput>
  }

  export type ElectionResultUpdateWithWhereUniqueWithoutElectionInput = {
    where: ElectionResultWhereUniqueInput
    data: XOR<ElectionResultUpdateWithoutElectionInput, ElectionResultUncheckedUpdateWithoutElectionInput>
  }

  export type ElectionResultUpdateManyWithWhereWithoutElectionInput = {
    where: ElectionResultScalarWhereInput
    data: XOR<ElectionResultUpdateManyMutationInput, ElectionResultUncheckedUpdateManyWithoutElectionInput>
  }

  export type ElectionResultScalarWhereInput = {
    AND?: ElectionResultScalarWhereInput | ElectionResultScalarWhereInput[]
    OR?: ElectionResultScalarWhereInput[]
    NOT?: ElectionResultScalarWhereInput | ElectionResultScalarWhereInput[]
    id?: StringFilter<"ElectionResult"> | string
    electionId?: StringFilter<"ElectionResult"> | string
    positionId?: StringFilter<"ElectionResult"> | string
    winnerId?: StringFilter<"ElectionResult"> | string
    totalVotes?: IntFilter<"ElectionResult"> | number
    declaredAt?: DateTimeFilter<"ElectionResult"> | Date | string
  }

  export type CandidateUpsertWithWhereUniqueWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutElectionInput, CandidateUncheckedUpdateWithoutElectionInput>
    create: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutElectionInput, CandidateUncheckedUpdateWithoutElectionInput>
  }

  export type CandidateUpdateManyWithWhereWithoutElectionInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutElectionInput>
  }

  export type CandidateScalarWhereInput = {
    AND?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    OR?: CandidateScalarWhereInput[]
    NOT?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    id?: StringFilter<"Candidate"> | string
    electionId?: StringFilter<"Candidate"> | string
    positionId?: StringFilter<"Candidate"> | string
    studentId?: StringFilter<"Candidate"> | string
    admissionId?: StringNullableFilter<"Candidate"> | string | null
    firstName?: StringFilter<"Candidate"> | string
    middleName?: StringNullableFilter<"Candidate"> | string | null
    lastName?: StringNullableFilter<"Candidate"> | string | null
    fullName?: StringFilter<"Candidate"> | string
    className?: StringNullableFilter<"Candidate"> | string | null
    section?: StringNullableFilter<"Candidate"> | string | null
    image?: StringNullableFilter<"Candidate"> | string | null
    slogan?: StringNullableFilter<"Candidate"> | string | null
    manifesto?: StringNullableFilter<"Candidate"> | string | null
    symbol?: StringNullableFilter<"Candidate"> | string | null
    voteCount?: IntFilter<"Candidate"> | number
    isWinner?: BoolFilter<"Candidate"> | boolean
    isActive?: BoolFilter<"Candidate"> | boolean
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
  }

  export type ElectionCreateWithoutPositionsInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutElectionInput
    results?: ElectionResultCreateNestedManyWithoutElectionInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutPositionsInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutElectionInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutPositionsInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutPositionsInput, ElectionUncheckedCreateWithoutPositionsInput>
  }

  export type CandidateCreateWithoutPositionInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    election: ElectionCreateNestedOneWithoutCandidatesInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
    results?: ElectionResultCreateNestedManyWithoutWinnerInput
  }

  export type CandidateUncheckedCreateWithoutPositionInput = {
    id?: string
    electionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type CandidateCreateOrConnectWithoutPositionInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutPositionInput, CandidateUncheckedCreateWithoutPositionInput>
  }

  export type CandidateCreateManyPositionInputEnvelope = {
    data: CandidateCreateManyPositionInput | CandidateCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutPositionInput = {
    id?: string
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutVotesInput
    candidate: CandidateCreateNestedOneWithoutVotesInput
    voter: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutPositionInput = {
    id?: string
    electionId: string
    candidateId: string
    voterId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutPositionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutPositionInput, VoteUncheckedCreateWithoutPositionInput>
  }

  export type VoteCreateManyPositionInputEnvelope = {
    data: VoteCreateManyPositionInput | VoteCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type ElectionResultCreateWithoutPositionInput = {
    id?: string
    totalVotes: number
    declaredAt?: Date | string
    election: ElectionCreateNestedOneWithoutResultsInput
    winner: CandidateCreateNestedOneWithoutResultsInput
  }

  export type ElectionResultUncheckedCreateWithoutPositionInput = {
    id?: string
    electionId: string
    winnerId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type ElectionResultCreateOrConnectWithoutPositionInput = {
    where: ElectionResultWhereUniqueInput
    create: XOR<ElectionResultCreateWithoutPositionInput, ElectionResultUncheckedCreateWithoutPositionInput>
  }

  export type ElectionUpsertWithoutPositionsInput = {
    update: XOR<ElectionUpdateWithoutPositionsInput, ElectionUncheckedUpdateWithoutPositionsInput>
    create: XOR<ElectionCreateWithoutPositionsInput, ElectionUncheckedCreateWithoutPositionsInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutPositionsInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutPositionsInput, ElectionUncheckedUpdateWithoutPositionsInput>
  }

  export type ElectionUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type CandidateUpsertWithWhereUniqueWithoutPositionInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutPositionInput, CandidateUncheckedUpdateWithoutPositionInput>
    create: XOR<CandidateCreateWithoutPositionInput, CandidateUncheckedCreateWithoutPositionInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutPositionInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutPositionInput, CandidateUncheckedUpdateWithoutPositionInput>
  }

  export type CandidateUpdateManyWithWhereWithoutPositionInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutPositionInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutPositionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutPositionInput, VoteUncheckedUpdateWithoutPositionInput>
    create: XOR<VoteCreateWithoutPositionInput, VoteUncheckedCreateWithoutPositionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutPositionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutPositionInput, VoteUncheckedUpdateWithoutPositionInput>
  }

  export type VoteUpdateManyWithWhereWithoutPositionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutPositionInput>
  }

  export type ElectionResultUpsertWithoutPositionInput = {
    update: XOR<ElectionResultUpdateWithoutPositionInput, ElectionResultUncheckedUpdateWithoutPositionInput>
    create: XOR<ElectionResultCreateWithoutPositionInput, ElectionResultUncheckedCreateWithoutPositionInput>
    where?: ElectionResultWhereInput
  }

  export type ElectionResultUpdateToOneWithWhereWithoutPositionInput = {
    where?: ElectionResultWhereInput
    data: XOR<ElectionResultUpdateWithoutPositionInput, ElectionResultUncheckedUpdateWithoutPositionInput>
  }

  export type ElectionResultUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutResultsNestedInput
    winner?: CandidateUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ElectionResultUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionCreateWithoutCandidatesInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    results?: ElectionResultCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutCandidatesInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutCandidatesInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
  }

  export type PositionCreateWithoutCandidatesInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutPositionsInput
    votes?: VoteCreateNestedManyWithoutPositionInput
    result?: ElectionResultCreateNestedOneWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutCandidatesInput = {
    id?: string
    electionId: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutPositionInput
    result?: ElectionResultUncheckedCreateNestedOneWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutCandidatesInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutCandidatesInput, PositionUncheckedCreateWithoutCandidatesInput>
  }

  export type VoteCreateWithoutCandidateInput = {
    id?: string
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutVotesInput
    position: PositionCreateNestedOneWithoutVotesInput
    voter: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutCandidateInput = {
    id?: string
    electionId: string
    positionId: string
    voterId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput>
  }

  export type VoteCreateManyCandidateInputEnvelope = {
    data: VoteCreateManyCandidateInput | VoteCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type ElectionResultCreateWithoutWinnerInput = {
    id?: string
    totalVotes: number
    declaredAt?: Date | string
    election: ElectionCreateNestedOneWithoutResultsInput
    position: PositionCreateNestedOneWithoutResultInput
  }

  export type ElectionResultUncheckedCreateWithoutWinnerInput = {
    id?: string
    electionId: string
    positionId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type ElectionResultCreateOrConnectWithoutWinnerInput = {
    where: ElectionResultWhereUniqueInput
    create: XOR<ElectionResultCreateWithoutWinnerInput, ElectionResultUncheckedCreateWithoutWinnerInput>
  }

  export type ElectionResultCreateManyWinnerInputEnvelope = {
    data: ElectionResultCreateManyWinnerInput | ElectionResultCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type ElectionUpsertWithoutCandidatesInput = {
    update: XOR<ElectionUpdateWithoutCandidatesInput, ElectionUncheckedUpdateWithoutCandidatesInput>
    create: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutCandidatesInput, ElectionUncheckedUpdateWithoutCandidatesInput>
  }

  export type ElectionUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type PositionUpsertWithoutCandidatesInput = {
    update: XOR<PositionUpdateWithoutCandidatesInput, PositionUncheckedUpdateWithoutCandidatesInput>
    create: XOR<PositionCreateWithoutCandidatesInput, PositionUncheckedCreateWithoutCandidatesInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutCandidatesInput, PositionUncheckedUpdateWithoutCandidatesInput>
  }

  export type PositionUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutPositionsNestedInput
    votes?: VoteUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUpdateOneWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUncheckedUpdateOneWithoutPositionNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutCandidateInput, VoteUncheckedUpdateWithoutCandidateInput>
    create: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutCandidateInput, VoteUncheckedUpdateWithoutCandidateInput>
  }

  export type VoteUpdateManyWithWhereWithoutCandidateInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ElectionResultUpsertWithWhereUniqueWithoutWinnerInput = {
    where: ElectionResultWhereUniqueInput
    update: XOR<ElectionResultUpdateWithoutWinnerInput, ElectionResultUncheckedUpdateWithoutWinnerInput>
    create: XOR<ElectionResultCreateWithoutWinnerInput, ElectionResultUncheckedCreateWithoutWinnerInput>
  }

  export type ElectionResultUpdateWithWhereUniqueWithoutWinnerInput = {
    where: ElectionResultWhereUniqueInput
    data: XOR<ElectionResultUpdateWithoutWinnerInput, ElectionResultUncheckedUpdateWithoutWinnerInput>
  }

  export type ElectionResultUpdateManyWithWhereWithoutWinnerInput = {
    where: ElectionResultScalarWhereInput
    data: XOR<ElectionResultUpdateManyMutationInput, ElectionResultUncheckedUpdateManyWithoutWinnerInput>
  }

  export type ElectionCreateWithoutVotesInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionCreateNestedManyWithoutElectionInput
    results?: ElectionResultCreateNestedManyWithoutElectionInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionUncheckedCreateNestedManyWithoutElectionInput
    results?: ElectionResultUncheckedCreateNestedManyWithoutElectionInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutVotesInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
  }

  export type PositionCreateWithoutVotesInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutPositionsInput
    candidates?: CandidateCreateNestedManyWithoutPositionInput
    result?: ElectionResultCreateNestedOneWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutVotesInput = {
    id?: string
    electionId: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutPositionInput
    result?: ElectionResultUncheckedCreateNestedOneWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutVotesInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutVotesInput, PositionUncheckedCreateWithoutVotesInput>
  }

  export type CandidateCreateWithoutVotesInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    election: ElectionCreateNestedOneWithoutCandidatesInput
    position: PositionCreateNestedOneWithoutCandidatesInput
    results?: ElectionResultCreateNestedManyWithoutWinnerInput
  }

  export type CandidateUncheckedCreateWithoutVotesInput = {
    id?: string
    electionId: string
    positionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: ElectionResultUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type CandidateCreateOrConnectWithoutVotesInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fatherName?: string | null
    motherName?: string | null
    mobile?: string | null
    fatherMobile?: string | null
    motherMobile?: string | null
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    className?: string | null
    section?: string | null
    batchId?: string | null
    courseId?: string | null
    sessionId?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    bloodGroup?: string | null
    religion?: string | null
    nationality?: string | null
    loginCount?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fatherName?: string | null
    motherName?: string | null
    mobile?: string | null
    fatherMobile?: string | null
    motherMobile?: string | null
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    className?: string | null
    section?: string | null
    batchId?: string | null
    courseId?: string | null
    sessionId?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    bloodGroup?: string | null
    religion?: string | null
    nationality?: string | null
    loginCount?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type ElectionUpsertWithoutVotesInput = {
    update: XOR<ElectionUpdateWithoutVotesInput, ElectionUncheckedUpdateWithoutVotesInput>
    create: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutVotesInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutVotesInput, ElectionUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateManyWithoutElectionNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type PositionUpsertWithoutVotesInput = {
    update: XOR<PositionUpdateWithoutVotesInput, PositionUncheckedUpdateWithoutVotesInput>
    create: XOR<PositionCreateWithoutVotesInput, PositionUncheckedCreateWithoutVotesInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutVotesInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutVotesInput, PositionUncheckedUpdateWithoutVotesInput>
  }

  export type PositionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutPositionsNestedInput
    candidates?: CandidateUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUpdateOneWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUncheckedUpdateOneWithoutPositionNestedInput
  }

  export type CandidateUpsertWithoutVotesInput = {
    update: XOR<CandidateUpdateWithoutVotesInput, CandidateUncheckedUpdateWithoutVotesInput>
    create: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutVotesInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutVotesInput, CandidateUncheckedUpdateWithoutVotesInput>
  }

  export type CandidateUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutCandidatesNestedInput
    position?: PositionUpdateOneRequiredWithoutCandidatesNestedInput
    results?: ElectionResultUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ElectionResultUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionCreateWithoutResultsInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutResultsInput = {
    id?: string
    title: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ElectionStatus
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutResultsInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutResultsInput, ElectionUncheckedCreateWithoutResultsInput>
  }

  export type PositionCreateWithoutResultInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutPositionsInput
    candidates?: CandidateCreateNestedManyWithoutPositionInput
    votes?: VoteCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutResultInput = {
    id?: string
    electionId: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutPositionInput
    votes?: VoteUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutResultInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutResultInput, PositionUncheckedCreateWithoutResultInput>
  }

  export type CandidateCreateWithoutResultsInput = {
    id?: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    election: ElectionCreateNestedOneWithoutCandidatesInput
    position: PositionCreateNestedOneWithoutCandidatesInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutResultsInput = {
    id?: string
    electionId: string
    positionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutResultsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutResultsInput, CandidateUncheckedCreateWithoutResultsInput>
  }

  export type ElectionUpsertWithoutResultsInput = {
    update: XOR<ElectionUpdateWithoutResultsInput, ElectionUncheckedUpdateWithoutResultsInput>
    create: XOR<ElectionCreateWithoutResultsInput, ElectionUncheckedCreateWithoutResultsInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutResultsInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutResultsInput, ElectionUncheckedUpdateWithoutResultsInput>
  }

  export type ElectionUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type PositionUpsertWithoutResultInput = {
    update: XOR<PositionUpdateWithoutResultInput, PositionUncheckedUpdateWithoutResultInput>
    create: XOR<PositionCreateWithoutResultInput, PositionUncheckedCreateWithoutResultInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutResultInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutResultInput, PositionUncheckedUpdateWithoutResultInput>
  }

  export type PositionUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutPositionsNestedInput
    candidates?: CandidateUpdateManyWithoutPositionNestedInput
    votes?: VoteUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutPositionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type CandidateUpsertWithoutResultsInput = {
    update: XOR<CandidateUpdateWithoutResultsInput, CandidateUncheckedUpdateWithoutResultsInput>
    create: XOR<CandidateCreateWithoutResultsInput, CandidateUncheckedCreateWithoutResultsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutResultsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutResultsInput, CandidateUncheckedUpdateWithoutResultsInput>
  }

  export type CandidateUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutCandidatesNestedInput
    position?: PositionUpdateOneRequiredWithoutCandidatesNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type AuditLogCreateWithoutAdminInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
  }

  export type AuditLogCreateManyAdminInputEnvelope = {
    data: AuditLogCreateManyAdminInput | AuditLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutAdminInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    adminId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AdminCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutAuditLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
  }

  export type AdminUpsertWithoutAuditLogsInput = {
    update: XOR<AdminUpdateWithoutAuditLogsInput, AdminUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutAuditLogsInput, AdminUncheckedUpdateWithoutAuditLogsInput>
  }

  export type AdminUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyVoterInput = {
    id?: string
    electionId: string
    positionId: string
    candidateId: string
    createdAt?: Date | string
  }

  export type VoteUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
    position?: PositionUpdateOneRequiredWithoutVotesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateManyElectionInput = {
    id?: string
    name: string
    description?: string | null
    maxVotes?: number
    displayOrder?: number
    createdAt?: Date | string
  }

  export type VoteCreateManyElectionInput = {
    id?: string
    positionId: string
    candidateId: string
    voterId: string
    createdAt?: Date | string
  }

  export type ElectionResultCreateManyElectionInput = {
    id?: string
    positionId: string
    winnerId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type CandidateCreateManyElectionInput = {
    id?: string
    positionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutPositionNestedInput
    votes?: VoteUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUpdateOneWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutPositionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPositionNestedInput
    result?: ElectionResultUncheckedUpdateOneWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutVotesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
    voter?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutResultNestedInput
    winner?: CandidateUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ElectionResultUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutCandidatesNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
    results?: ElectionResultUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateManyPositionInput = {
    id?: string
    electionId: string
    studentId: string
    admissionId?: string | null
    firstName: string
    middleName?: string | null
    lastName?: string | null
    fullName: string
    className?: string | null
    section?: string | null
    image?: string | null
    slogan?: string | null
    manifesto?: string | null
    symbol?: string | null
    voteCount?: number
    isWinner?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateManyPositionInput = {
    id?: string
    electionId: string
    candidateId: string
    voterId: string
    createdAt?: Date | string
  }

  export type CandidateUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutCandidatesNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
    results?: ElectionResultUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
    results?: ElectionResultUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    manifesto?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
    voter?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyCandidateInput = {
    id?: string
    electionId: string
    positionId: string
    voterId: string
    createdAt?: Date | string
  }

  export type ElectionResultCreateManyWinnerInput = {
    id?: string
    electionId: string
    positionId: string
    totalVotes: number
    declaredAt?: Date | string
  }

  export type VoteUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
    position?: PositionUpdateOneRequiredWithoutVotesNestedInput
    voter?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutResultsNestedInput
    position?: PositionUpdateOneRequiredWithoutResultNestedInput
  }

  export type ElectionResultUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionResultUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    totalVotes?: IntFieldUpdateOperationsInput | number
    declaredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyAdminInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}