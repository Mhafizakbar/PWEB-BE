
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model barang
 * 
 */
export type barang = $Result.DefaultSelection<Prisma.$barangPayload>
/**
 * Model detail_peminjaman
 * 
 */
export type detail_peminjaman = $Result.DefaultSelection<Prisma.$detail_peminjamanPayload>
/**
 * Model kategori
 * 
 */
export type kategori = $Result.DefaultSelection<Prisma.$kategoriPayload>
/**
 * Model peminjaman
 * 
 */
export type peminjaman = $Result.DefaultSelection<Prisma.$peminjamanPayload>
/**
 * Model pengguna
 * 
 */
export type pengguna = $Result.DefaultSelection<Prisma.$penggunaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Barangs
 * const barangs = await prisma.barang.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Barangs
   * const barangs = await prisma.barang.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barang`: Exposes CRUD operations for the **barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.barangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_peminjaman`: Exposes CRUD operations for the **detail_peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_peminjamen
    * const detail_peminjamen = await prisma.detail_peminjaman.findMany()
    * ```
    */
  get detail_peminjaman(): Prisma.detail_peminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.kategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.peminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengguna`: Exposes CRUD operations for the **pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.penggunaDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    barang: 'barang',
    detail_peminjaman: 'detail_peminjaman',
    kategori: 'kategori',
    peminjaman: 'peminjaman',
    pengguna: 'pengguna'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barang" | "detail_peminjaman" | "kategori" | "peminjaman" | "pengguna"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      barang: {
        payload: Prisma.$barangPayload<ExtArgs>
        fields: Prisma.barangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          findFirst: {
            args: Prisma.barangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          findMany: {
            args: Prisma.barangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>[]
          }
          create: {
            args: Prisma.barangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          createMany: {
            args: Prisma.barangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.barangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>[]
          }
          delete: {
            args: Prisma.barangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          update: {
            args: Prisma.barangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          deleteMany: {
            args: Prisma.barangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.barangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>[]
          }
          upsert: {
            args: Prisma.barangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.barangGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.barangCountArgs<ExtArgs>
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      detail_peminjaman: {
        payload: Prisma.$detail_peminjamanPayload<ExtArgs>
        fields: Prisma.detail_peminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_peminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_peminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>
          }
          findFirst: {
            args: Prisma.detail_peminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_peminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>
          }
          findMany: {
            args: Prisma.detail_peminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>[]
          }
          create: {
            args: Prisma.detail_peminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>
          }
          createMany: {
            args: Prisma.detail_peminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detail_peminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>[]
          }
          delete: {
            args: Prisma.detail_peminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>
          }
          update: {
            args: Prisma.detail_peminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>
          }
          deleteMany: {
            args: Prisma.detail_peminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_peminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detail_peminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>[]
          }
          upsert: {
            args: Prisma.detail_peminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_peminjamanPayload>
          }
          aggregate: {
            args: Prisma.Detail_peminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_peminjaman>
          }
          groupBy: {
            args: Prisma.detail_peminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_peminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_peminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_peminjamanCountAggregateOutputType> | number
          }
        }
      }
      kategori: {
        payload: Prisma.$kategoriPayload<ExtArgs>
        fields: Prisma.kategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          findFirst: {
            args: Prisma.kategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          findMany: {
            args: Prisma.kategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          create: {
            args: Prisma.kategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          createMany: {
            args: Prisma.kategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          delete: {
            args: Prisma.kategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          update: {
            args: Prisma.kategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          deleteMany: {
            args: Prisma.kategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          upsert: {
            args: Prisma.kategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.kategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.kategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      peminjaman: {
        payload: Prisma.$peminjamanPayload<ExtArgs>
        fields: Prisma.peminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          findFirst: {
            args: Prisma.peminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          findMany: {
            args: Prisma.peminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          create: {
            args: Prisma.peminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          createMany: {
            args: Prisma.peminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.peminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          delete: {
            args: Prisma.peminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          update: {
            args: Prisma.peminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          deleteMany: {
            args: Prisma.peminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.peminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          upsert: {
            args: Prisma.peminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.peminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.peminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
          }
        }
      }
      pengguna: {
        payload: Prisma.$penggunaPayload<ExtArgs>
        fields: Prisma.penggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findFirst: {
            args: Prisma.penggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findMany: {
            args: Prisma.penggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          create: {
            args: Prisma.penggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          createMany: {
            args: Prisma.penggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.penggunaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          delete: {
            args: Prisma.penggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          update: {
            args: Prisma.penggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          deleteMany: {
            args: Prisma.penggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.penggunaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          upsert: {
            args: Prisma.penggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.penggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.penggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    barang?: barangOmit
    detail_peminjaman?: detail_peminjamanOmit
    kategori?: kategoriOmit
    peminjaman?: peminjamanOmit
    pengguna?: penggunaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    detail_peminjaman: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_peminjaman?: boolean | BarangCountOutputTypeCountDetail_peminjamanArgs
  }

  // Custom InputTypes
  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountDetail_peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_peminjamanWhereInput
  }


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    barang: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | KategoriCountOutputTypeCountBarangArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barangWhereInput
  }


  /**
   * Count Type PeminjamanCountOutputType
   */

  export type PeminjamanCountOutputType = {
    detail_peminjaman: number
  }

  export type PeminjamanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_peminjaman?: boolean | PeminjamanCountOutputTypeCountDetail_peminjamanArgs
  }

  // Custom InputTypes
  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanCountOutputType
     */
    select?: PeminjamanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeCountDetail_peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_peminjamanWhereInput
  }


  /**
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    peminjaman: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PenggunaCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    id_barang: number | null
    id_kategori: number | null
    jumlah: number | null
  }

  export type BarangSumAggregateOutputType = {
    id_barang: number | null
    id_kategori: number | null
    jumlah: number | null
  }

  export type BarangMinAggregateOutputType = {
    id_barang: number | null
    nama_barang: string | null
    id_kategori: number | null
    jumlah: number | null
    deskripsi: string | null
  }

  export type BarangMaxAggregateOutputType = {
    id_barang: number | null
    nama_barang: string | null
    id_kategori: number | null
    jumlah: number | null
    deskripsi: string | null
  }

  export type BarangCountAggregateOutputType = {
    id_barang: number
    nama_barang: number
    id_kategori: number
    jumlah: number
    deskripsi: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    id_barang?: true
    id_kategori?: true
    jumlah?: true
  }

  export type BarangSumAggregateInputType = {
    id_barang?: true
    id_kategori?: true
    jumlah?: true
  }

  export type BarangMinAggregateInputType = {
    id_barang?: true
    nama_barang?: true
    id_kategori?: true
    jumlah?: true
    deskripsi?: true
  }

  export type BarangMaxAggregateInputType = {
    id_barang?: true
    nama_barang?: true
    id_kategori?: true
    jumlah?: true
    deskripsi?: true
  }

  export type BarangCountAggregateInputType = {
    id_barang?: true
    nama_barang?: true
    id_kategori?: true
    jumlah?: true
    deskripsi?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barang to aggregate.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type barangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barangWhereInput
    orderBy?: barangOrderByWithAggregationInput | barangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: barangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id_barang: number
    nama_barang: string
    id_kategori: number | null
    jumlah: number
    deskripsi: string | null
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends barangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type barangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama_barang?: boolean
    id_kategori?: boolean
    jumlah?: boolean
    deskripsi?: boolean
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
    detail_peminjaman?: boolean | barang$detail_peminjamanArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type barangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama_barang?: boolean
    id_kategori?: boolean
    jumlah?: boolean
    deskripsi?: boolean
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type barangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama_barang?: boolean
    id_kategori?: boolean
    jumlah?: boolean
    deskripsi?: boolean
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type barangSelectScalar = {
    id_barang?: boolean
    nama_barang?: boolean
    id_kategori?: boolean
    jumlah?: boolean
    deskripsi?: boolean
  }

  export type barangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_barang" | "nama_barang" | "id_kategori" | "jumlah" | "deskripsi", ExtArgs["result"]["barang"]>
  export type barangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
    detail_peminjaman?: boolean | barang$detail_peminjamanArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type barangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
  }
  export type barangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
  }

  export type $barangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barang"
    objects: {
      kategori: Prisma.$kategoriPayload<ExtArgs> | null
      detail_peminjaman: Prisma.$detail_peminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_barang: number
      nama_barang: string
      id_kategori: number | null
      jumlah: number
      deskripsi: string | null
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }

  type barangGetPayload<S extends boolean | null | undefined | barangDefaultArgs> = $Result.GetResult<Prisma.$barangPayload, S>

  type barangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface barangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barang'], meta: { name: 'barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {barangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barangFindUniqueArgs>(args: SelectSubset<T, barangFindUniqueArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barangFindUniqueOrThrowArgs>(args: SelectSubset<T, barangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barangFindFirstArgs>(args?: SelectSubset<T, barangFindFirstArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barangFindFirstOrThrowArgs>(args?: SelectSubset<T, barangFindFirstOrThrowArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.findMany({ select: { id_barang: true } })
     * 
     */
    findMany<T extends barangFindManyArgs>(args?: SelectSubset<T, barangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang.
     * @param {barangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
     */
    create<T extends barangCreateArgs>(args: SelectSubset<T, barangCreateArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barangs.
     * @param {barangCreateManyArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barangCreateManyArgs>(args?: SelectSubset<T, barangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barangs and returns the data saved in the database.
     * @param {barangCreateManyAndReturnArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barangs and only return the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.createManyAndReturn({
     *   select: { id_barang: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends barangCreateManyAndReturnArgs>(args?: SelectSubset<T, barangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barang.
     * @param {barangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
     */
    delete<T extends barangDeleteArgs>(args: SelectSubset<T, barangDeleteArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang.
     * @param {barangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barangUpdateArgs>(args: SelectSubset<T, barangUpdateArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barangs.
     * @param {barangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barangDeleteManyArgs>(args?: SelectSubset<T, barangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barangUpdateManyArgs>(args: SelectSubset<T, barangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs and returns the data updated in the database.
     * @param {barangUpdateManyAndReturnArgs} args - Arguments to update many Barangs.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barangs and only return the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.updateManyAndReturn({
     *   select: { id_barang: true },
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
    updateManyAndReturn<T extends barangUpdateManyAndReturnArgs>(args: SelectSubset<T, barangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barang.
     * @param {barangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
     */
    upsert<T extends barangUpsertArgs>(args: SelectSubset<T, barangUpsertArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends barangCountArgs>(
      args?: Subset<T, barangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangGroupByArgs} args - Group by arguments.
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
      T extends barangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barangGroupByArgs['orderBy'] }
        : { orderBy?: barangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, barangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barang model
   */
  readonly fields: barangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends barang$kategoriArgs<ExtArgs> = {}>(args?: Subset<T, barang$kategoriArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detail_peminjaman<T extends barang$detail_peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, barang$detail_peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the barang model
   */
  interface barangFieldRefs {
    readonly id_barang: FieldRef<"barang", 'Int'>
    readonly nama_barang: FieldRef<"barang", 'String'>
    readonly id_kategori: FieldRef<"barang", 'Int'>
    readonly jumlah: FieldRef<"barang", 'Int'>
    readonly deskripsi: FieldRef<"barang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * barang findUnique
   */
  export type barangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang findUniqueOrThrow
   */
  export type barangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang findFirst
   */
  export type barangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barangs.
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * barang findFirstOrThrow
   */
  export type barangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barangs.
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * barang findMany
   */
  export type barangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barangs to fetch.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barangs.
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * barang create
   */
  export type barangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * The data needed to create a barang.
     */
    data: XOR<barangCreateInput, barangUncheckedCreateInput>
  }

  /**
   * barang createMany
   */
  export type barangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barangs.
     */
    data: barangCreateManyInput | barangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barang createManyAndReturn
   */
  export type barangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * The data used to create many barangs.
     */
    data: barangCreateManyInput | barangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * barang update
   */
  export type barangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * The data needed to update a barang.
     */
    data: XOR<barangUpdateInput, barangUncheckedUpdateInput>
    /**
     * Choose, which barang to update.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang updateMany
   */
  export type barangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barangs.
     */
    data: XOR<barangUpdateManyMutationInput, barangUncheckedUpdateManyInput>
    /**
     * Filter which barangs to update
     */
    where?: barangWhereInput
    /**
     * Limit how many barangs to update.
     */
    limit?: number
  }

  /**
   * barang updateManyAndReturn
   */
  export type barangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * The data used to update barangs.
     */
    data: XOR<barangUpdateManyMutationInput, barangUncheckedUpdateManyInput>
    /**
     * Filter which barangs to update
     */
    where?: barangWhereInput
    /**
     * Limit how many barangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * barang upsert
   */
  export type barangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * The filter to search for the barang to update in case it exists.
     */
    where: barangWhereUniqueInput
    /**
     * In case the barang found by the `where` argument doesn't exist, create a new barang with this data.
     */
    create: XOR<barangCreateInput, barangUncheckedCreateInput>
    /**
     * In case the barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barangUpdateInput, barangUncheckedUpdateInput>
  }

  /**
   * barang delete
   */
  export type barangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter which barang to delete.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang deleteMany
   */
  export type barangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barangs to delete
     */
    where?: barangWhereInput
    /**
     * Limit how many barangs to delete.
     */
    limit?: number
  }

  /**
   * barang.kategori
   */
  export type barang$kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    where?: kategoriWhereInput
  }

  /**
   * barang.detail_peminjaman
   */
  export type barang$detail_peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    where?: detail_peminjamanWhereInput
    orderBy?: detail_peminjamanOrderByWithRelationInput | detail_peminjamanOrderByWithRelationInput[]
    cursor?: detail_peminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_peminjamanScalarFieldEnum | Detail_peminjamanScalarFieldEnum[]
  }

  /**
   * barang without action
   */
  export type barangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
  }


  /**
   * Model detail_peminjaman
   */

  export type AggregateDetail_peminjaman = {
    _count: Detail_peminjamanCountAggregateOutputType | null
    _avg: Detail_peminjamanAvgAggregateOutputType | null
    _sum: Detail_peminjamanSumAggregateOutputType | null
    _min: Detail_peminjamanMinAggregateOutputType | null
    _max: Detail_peminjamanMaxAggregateOutputType | null
  }

  export type Detail_peminjamanAvgAggregateOutputType = {
    id_detail: number | null
    id_peminjaman: number | null
    id_barang: number | null
    jumlah_pinjam: number | null
  }

  export type Detail_peminjamanSumAggregateOutputType = {
    id_detail: number | null
    id_peminjaman: number | null
    id_barang: number | null
    jumlah_pinjam: number | null
  }

  export type Detail_peminjamanMinAggregateOutputType = {
    id_detail: number | null
    id_peminjaman: number | null
    id_barang: number | null
    jumlah_pinjam: number | null
  }

  export type Detail_peminjamanMaxAggregateOutputType = {
    id_detail: number | null
    id_peminjaman: number | null
    id_barang: number | null
    jumlah_pinjam: number | null
  }

  export type Detail_peminjamanCountAggregateOutputType = {
    id_detail: number
    id_peminjaman: number
    id_barang: number
    jumlah_pinjam: number
    _all: number
  }


  export type Detail_peminjamanAvgAggregateInputType = {
    id_detail?: true
    id_peminjaman?: true
    id_barang?: true
    jumlah_pinjam?: true
  }

  export type Detail_peminjamanSumAggregateInputType = {
    id_detail?: true
    id_peminjaman?: true
    id_barang?: true
    jumlah_pinjam?: true
  }

  export type Detail_peminjamanMinAggregateInputType = {
    id_detail?: true
    id_peminjaman?: true
    id_barang?: true
    jumlah_pinjam?: true
  }

  export type Detail_peminjamanMaxAggregateInputType = {
    id_detail?: true
    id_peminjaman?: true
    id_barang?: true
    jumlah_pinjam?: true
  }

  export type Detail_peminjamanCountAggregateInputType = {
    id_detail?: true
    id_peminjaman?: true
    id_barang?: true
    jumlah_pinjam?: true
    _all?: true
  }

  export type Detail_peminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_peminjaman to aggregate.
     */
    where?: detail_peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_peminjamen to fetch.
     */
    orderBy?: detail_peminjamanOrderByWithRelationInput | detail_peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_peminjamen
    **/
    _count?: true | Detail_peminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_peminjamanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_peminjamanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_peminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_peminjamanMaxAggregateInputType
  }

  export type GetDetail_peminjamanAggregateType<T extends Detail_peminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_peminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_peminjaman[P]>
      : GetScalarType<T[P], AggregateDetail_peminjaman[P]>
  }




  export type detail_peminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_peminjamanWhereInput
    orderBy?: detail_peminjamanOrderByWithAggregationInput | detail_peminjamanOrderByWithAggregationInput[]
    by: Detail_peminjamanScalarFieldEnum[] | Detail_peminjamanScalarFieldEnum
    having?: detail_peminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_peminjamanCountAggregateInputType | true
    _avg?: Detail_peminjamanAvgAggregateInputType
    _sum?: Detail_peminjamanSumAggregateInputType
    _min?: Detail_peminjamanMinAggregateInputType
    _max?: Detail_peminjamanMaxAggregateInputType
  }

  export type Detail_peminjamanGroupByOutputType = {
    id_detail: number
    id_peminjaman: number | null
    id_barang: number | null
    jumlah_pinjam: number
    _count: Detail_peminjamanCountAggregateOutputType | null
    _avg: Detail_peminjamanAvgAggregateOutputType | null
    _sum: Detail_peminjamanSumAggregateOutputType | null
    _min: Detail_peminjamanMinAggregateOutputType | null
    _max: Detail_peminjamanMaxAggregateOutputType | null
  }

  type GetDetail_peminjamanGroupByPayload<T extends detail_peminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_peminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_peminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_peminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_peminjamanGroupByOutputType[P]>
        }
      >
    >


  export type detail_peminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detail?: boolean
    id_peminjaman?: boolean
    id_barang?: boolean
    jumlah_pinjam?: boolean
    barang?: boolean | detail_peminjaman$barangArgs<ExtArgs>
    peminjaman?: boolean | detail_peminjaman$peminjamanArgs<ExtArgs>
  }, ExtArgs["result"]["detail_peminjaman"]>

  export type detail_peminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detail?: boolean
    id_peminjaman?: boolean
    id_barang?: boolean
    jumlah_pinjam?: boolean
    barang?: boolean | detail_peminjaman$barangArgs<ExtArgs>
    peminjaman?: boolean | detail_peminjaman$peminjamanArgs<ExtArgs>
  }, ExtArgs["result"]["detail_peminjaman"]>

  export type detail_peminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detail?: boolean
    id_peminjaman?: boolean
    id_barang?: boolean
    jumlah_pinjam?: boolean
    barang?: boolean | detail_peminjaman$barangArgs<ExtArgs>
    peminjaman?: boolean | detail_peminjaman$peminjamanArgs<ExtArgs>
  }, ExtArgs["result"]["detail_peminjaman"]>

  export type detail_peminjamanSelectScalar = {
    id_detail?: boolean
    id_peminjaman?: boolean
    id_barang?: boolean
    jumlah_pinjam?: boolean
  }

  export type detail_peminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detail" | "id_peminjaman" | "id_barang" | "jumlah_pinjam", ExtArgs["result"]["detail_peminjaman"]>
  export type detail_peminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | detail_peminjaman$barangArgs<ExtArgs>
    peminjaman?: boolean | detail_peminjaman$peminjamanArgs<ExtArgs>
  }
  export type detail_peminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | detail_peminjaman$barangArgs<ExtArgs>
    peminjaman?: boolean | detail_peminjaman$peminjamanArgs<ExtArgs>
  }
  export type detail_peminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | detail_peminjaman$barangArgs<ExtArgs>
    peminjaman?: boolean | detail_peminjaman$peminjamanArgs<ExtArgs>
  }

  export type $detail_peminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_peminjaman"
    objects: {
      barang: Prisma.$barangPayload<ExtArgs> | null
      peminjaman: Prisma.$peminjamanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detail: number
      id_peminjaman: number | null
      id_barang: number | null
      jumlah_pinjam: number
    }, ExtArgs["result"]["detail_peminjaman"]>
    composites: {}
  }

  type detail_peminjamanGetPayload<S extends boolean | null | undefined | detail_peminjamanDefaultArgs> = $Result.GetResult<Prisma.$detail_peminjamanPayload, S>

  type detail_peminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_peminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_peminjamanCountAggregateInputType | true
    }

  export interface detail_peminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_peminjaman'], meta: { name: 'detail_peminjaman' } }
    /**
     * Find zero or one Detail_peminjaman that matches the filter.
     * @param {detail_peminjamanFindUniqueArgs} args - Arguments to find a Detail_peminjaman
     * @example
     * // Get one Detail_peminjaman
     * const detail_peminjaman = await prisma.detail_peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_peminjamanFindUniqueArgs>(args: SelectSubset<T, detail_peminjamanFindUniqueArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_peminjamanFindUniqueOrThrowArgs} args - Arguments to find a Detail_peminjaman
     * @example
     * // Get one Detail_peminjaman
     * const detail_peminjaman = await prisma.detail_peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_peminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_peminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_peminjamanFindFirstArgs} args - Arguments to find a Detail_peminjaman
     * @example
     * // Get one Detail_peminjaman
     * const detail_peminjaman = await prisma.detail_peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_peminjamanFindFirstArgs>(args?: SelectSubset<T, detail_peminjamanFindFirstArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_peminjamanFindFirstOrThrowArgs} args - Arguments to find a Detail_peminjaman
     * @example
     * // Get one Detail_peminjaman
     * const detail_peminjaman = await prisma.detail_peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_peminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_peminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_peminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_peminjamen
     * const detail_peminjamen = await prisma.detail_peminjaman.findMany()
     * 
     * // Get first 10 Detail_peminjamen
     * const detail_peminjamen = await prisma.detail_peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id_detail`
     * const detail_peminjamanWithId_detailOnly = await prisma.detail_peminjaman.findMany({ select: { id_detail: true } })
     * 
     */
    findMany<T extends detail_peminjamanFindManyArgs>(args?: SelectSubset<T, detail_peminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_peminjaman.
     * @param {detail_peminjamanCreateArgs} args - Arguments to create a Detail_peminjaman.
     * @example
     * // Create one Detail_peminjaman
     * const Detail_peminjaman = await prisma.detail_peminjaman.create({
     *   data: {
     *     // ... data to create a Detail_peminjaman
     *   }
     * })
     * 
     */
    create<T extends detail_peminjamanCreateArgs>(args: SelectSubset<T, detail_peminjamanCreateArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_peminjamen.
     * @param {detail_peminjamanCreateManyArgs} args - Arguments to create many Detail_peminjamen.
     * @example
     * // Create many Detail_peminjamen
     * const detail_peminjaman = await prisma.detail_peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_peminjamanCreateManyArgs>(args?: SelectSubset<T, detail_peminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detail_peminjamen and returns the data saved in the database.
     * @param {detail_peminjamanCreateManyAndReturnArgs} args - Arguments to create many Detail_peminjamen.
     * @example
     * // Create many Detail_peminjamen
     * const detail_peminjaman = await prisma.detail_peminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detail_peminjamen and only return the `id_detail`
     * const detail_peminjamanWithId_detailOnly = await prisma.detail_peminjaman.createManyAndReturn({
     *   select: { id_detail: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detail_peminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, detail_peminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detail_peminjaman.
     * @param {detail_peminjamanDeleteArgs} args - Arguments to delete one Detail_peminjaman.
     * @example
     * // Delete one Detail_peminjaman
     * const Detail_peminjaman = await prisma.detail_peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Detail_peminjaman
     *   }
     * })
     * 
     */
    delete<T extends detail_peminjamanDeleteArgs>(args: SelectSubset<T, detail_peminjamanDeleteArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_peminjaman.
     * @param {detail_peminjamanUpdateArgs} args - Arguments to update one Detail_peminjaman.
     * @example
     * // Update one Detail_peminjaman
     * const detail_peminjaman = await prisma.detail_peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_peminjamanUpdateArgs>(args: SelectSubset<T, detail_peminjamanUpdateArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_peminjamen.
     * @param {detail_peminjamanDeleteManyArgs} args - Arguments to filter Detail_peminjamen to delete.
     * @example
     * // Delete a few Detail_peminjamen
     * const { count } = await prisma.detail_peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_peminjamanDeleteManyArgs>(args?: SelectSubset<T, detail_peminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_peminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_peminjamen
     * const detail_peminjaman = await prisma.detail_peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_peminjamanUpdateManyArgs>(args: SelectSubset<T, detail_peminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_peminjamen and returns the data updated in the database.
     * @param {detail_peminjamanUpdateManyAndReturnArgs} args - Arguments to update many Detail_peminjamen.
     * @example
     * // Update many Detail_peminjamen
     * const detail_peminjaman = await prisma.detail_peminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detail_peminjamen and only return the `id_detail`
     * const detail_peminjamanWithId_detailOnly = await prisma.detail_peminjaman.updateManyAndReturn({
     *   select: { id_detail: true },
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
    updateManyAndReturn<T extends detail_peminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, detail_peminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detail_peminjaman.
     * @param {detail_peminjamanUpsertArgs} args - Arguments to update or create a Detail_peminjaman.
     * @example
     * // Update or create a Detail_peminjaman
     * const detail_peminjaman = await prisma.detail_peminjaman.upsert({
     *   create: {
     *     // ... data to create a Detail_peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends detail_peminjamanUpsertArgs>(args: SelectSubset<T, detail_peminjamanUpsertArgs<ExtArgs>>): Prisma__detail_peminjamanClient<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_peminjamanCountArgs} args - Arguments to filter Detail_peminjamen to count.
     * @example
     * // Count the number of Detail_peminjamen
     * const count = await prisma.detail_peminjaman.count({
     *   where: {
     *     // ... the filter for the Detail_peminjamen we want to count
     *   }
     * })
    **/
    count<T extends detail_peminjamanCountArgs>(
      args?: Subset<T, detail_peminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_peminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_peminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Detail_peminjamanAggregateArgs>(args: Subset<T, Detail_peminjamanAggregateArgs>): Prisma.PrismaPromise<GetDetail_peminjamanAggregateType<T>>

    /**
     * Group by Detail_peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_peminjamanGroupByArgs} args - Group by arguments.
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
      T extends detail_peminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_peminjamanGroupByArgs['orderBy'] }
        : { orderBy?: detail_peminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detail_peminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_peminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_peminjaman model
   */
  readonly fields: detail_peminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_peminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends detail_peminjaman$barangArgs<ExtArgs> = {}>(args?: Subset<T, detail_peminjaman$barangArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    peminjaman<T extends detail_peminjaman$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, detail_peminjaman$peminjamanArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the detail_peminjaman model
   */
  interface detail_peminjamanFieldRefs {
    readonly id_detail: FieldRef<"detail_peminjaman", 'Int'>
    readonly id_peminjaman: FieldRef<"detail_peminjaman", 'Int'>
    readonly id_barang: FieldRef<"detail_peminjaman", 'Int'>
    readonly jumlah_pinjam: FieldRef<"detail_peminjaman", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * detail_peminjaman findUnique
   */
  export type detail_peminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which detail_peminjaman to fetch.
     */
    where: detail_peminjamanWhereUniqueInput
  }

  /**
   * detail_peminjaman findUniqueOrThrow
   */
  export type detail_peminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which detail_peminjaman to fetch.
     */
    where: detail_peminjamanWhereUniqueInput
  }

  /**
   * detail_peminjaman findFirst
   */
  export type detail_peminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which detail_peminjaman to fetch.
     */
    where?: detail_peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_peminjamen to fetch.
     */
    orderBy?: detail_peminjamanOrderByWithRelationInput | detail_peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_peminjamen.
     */
    cursor?: detail_peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_peminjamen.
     */
    distinct?: Detail_peminjamanScalarFieldEnum | Detail_peminjamanScalarFieldEnum[]
  }

  /**
   * detail_peminjaman findFirstOrThrow
   */
  export type detail_peminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which detail_peminjaman to fetch.
     */
    where?: detail_peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_peminjamen to fetch.
     */
    orderBy?: detail_peminjamanOrderByWithRelationInput | detail_peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_peminjamen.
     */
    cursor?: detail_peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_peminjamen.
     */
    distinct?: Detail_peminjamanScalarFieldEnum | Detail_peminjamanScalarFieldEnum[]
  }

  /**
   * detail_peminjaman findMany
   */
  export type detail_peminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which detail_peminjamen to fetch.
     */
    where?: detail_peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_peminjamen to fetch.
     */
    orderBy?: detail_peminjamanOrderByWithRelationInput | detail_peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_peminjamen.
     */
    cursor?: detail_peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_peminjamen.
     */
    skip?: number
    distinct?: Detail_peminjamanScalarFieldEnum | Detail_peminjamanScalarFieldEnum[]
  }

  /**
   * detail_peminjaman create
   */
  export type detail_peminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_peminjaman.
     */
    data: XOR<detail_peminjamanCreateInput, detail_peminjamanUncheckedCreateInput>
  }

  /**
   * detail_peminjaman createMany
   */
  export type detail_peminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_peminjamen.
     */
    data: detail_peminjamanCreateManyInput | detail_peminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_peminjaman createManyAndReturn
   */
  export type detail_peminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many detail_peminjamen.
     */
    data: detail_peminjamanCreateManyInput | detail_peminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_peminjaman update
   */
  export type detail_peminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_peminjaman.
     */
    data: XOR<detail_peminjamanUpdateInput, detail_peminjamanUncheckedUpdateInput>
    /**
     * Choose, which detail_peminjaman to update.
     */
    where: detail_peminjamanWhereUniqueInput
  }

  /**
   * detail_peminjaman updateMany
   */
  export type detail_peminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_peminjamen.
     */
    data: XOR<detail_peminjamanUpdateManyMutationInput, detail_peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which detail_peminjamen to update
     */
    where?: detail_peminjamanWhereInput
    /**
     * Limit how many detail_peminjamen to update.
     */
    limit?: number
  }

  /**
   * detail_peminjaman updateManyAndReturn
   */
  export type detail_peminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * The data used to update detail_peminjamen.
     */
    data: XOR<detail_peminjamanUpdateManyMutationInput, detail_peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which detail_peminjamen to update
     */
    where?: detail_peminjamanWhereInput
    /**
     * Limit how many detail_peminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_peminjaman upsert
   */
  export type detail_peminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_peminjaman to update in case it exists.
     */
    where: detail_peminjamanWhereUniqueInput
    /**
     * In case the detail_peminjaman found by the `where` argument doesn't exist, create a new detail_peminjaman with this data.
     */
    create: XOR<detail_peminjamanCreateInput, detail_peminjamanUncheckedCreateInput>
    /**
     * In case the detail_peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_peminjamanUpdateInput, detail_peminjamanUncheckedUpdateInput>
  }

  /**
   * detail_peminjaman delete
   */
  export type detail_peminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    /**
     * Filter which detail_peminjaman to delete.
     */
    where: detail_peminjamanWhereUniqueInput
  }

  /**
   * detail_peminjaman deleteMany
   */
  export type detail_peminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_peminjamen to delete
     */
    where?: detail_peminjamanWhereInput
    /**
     * Limit how many detail_peminjamen to delete.
     */
    limit?: number
  }

  /**
   * detail_peminjaman.barang
   */
  export type detail_peminjaman$barangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    where?: barangWhereInput
  }

  /**
   * detail_peminjaman.peminjaman
   */
  export type detail_peminjaman$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    where?: peminjamanWhereInput
  }

  /**
   * detail_peminjaman without action
   */
  export type detail_peminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
  }


  /**
   * Model kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id_kategori: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id_kategori: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
  }

  export type KategoriMaxAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
  }

  export type KategoriCountAggregateOutputType = {
    id_kategori: number
    nama_kategori: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id_kategori?: true
  }

  export type KategoriSumAggregateInputType = {
    id_kategori?: true
  }

  export type KategoriMinAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
  }

  export type KategoriMaxAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
  }

  export type KategoriCountAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategori to aggregate.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type kategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kategoriWhereInput
    orderBy?: kategoriOrderByWithAggregationInput | kategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: kategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id_kategori: number
    nama_kategori: string
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends kategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type kategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    barang?: boolean | kategori$barangArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type kategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type kategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type kategoriSelectScalar = {
    id_kategori?: boolean
    nama_kategori?: boolean
  }

  export type kategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kategori" | "nama_kategori", ExtArgs["result"]["kategori"]>
  export type kategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | kategori$barangArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type kategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type kategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $kategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kategori"
    objects: {
      barang: Prisma.$barangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kategori: number
      nama_kategori: string
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type kategoriGetPayload<S extends boolean | null | undefined | kategoriDefaultArgs> = $Result.GetResult<Prisma.$kategoriPayload, S>

  type kategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface kategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kategori'], meta: { name: 'kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {kategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kategoriFindUniqueArgs>(args: SelectSubset<T, kategoriFindUniqueArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, kategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kategoriFindFirstArgs>(args?: SelectSubset<T, kategoriFindFirstArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, kategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.findMany({ select: { id_kategori: true } })
     * 
     */
    findMany<T extends kategoriFindManyArgs>(args?: SelectSubset<T, kategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {kategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends kategoriCreateArgs>(args: SelectSubset<T, kategoriCreateArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {kategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kategoriCreateManyArgs>(args?: SelectSubset<T, kategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {kategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id_kategori: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, kategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {kategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends kategoriDeleteArgs>(args: SelectSubset<T, kategoriDeleteArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {kategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kategoriUpdateArgs>(args: SelectSubset<T, kategoriUpdateArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {kategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kategoriDeleteManyArgs>(args?: SelectSubset<T, kategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kategoriUpdateManyArgs>(args: SelectSubset<T, kategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {kategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.updateManyAndReturn({
     *   select: { id_kategori: true },
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
    updateManyAndReturn<T extends kategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, kategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {kategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends kategoriUpsertArgs>(args: SelectSubset<T, kategoriUpsertArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends kategoriCountArgs>(
      args?: Subset<T, kategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriGroupByArgs} args - Group by arguments.
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
      T extends kategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kategoriGroupByArgs['orderBy'] }
        : { orderBy?: kategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kategori model
   */
  readonly fields: kategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends kategori$barangArgs<ExtArgs> = {}>(args?: Subset<T, kategori$barangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the kategori model
   */
  interface kategoriFieldRefs {
    readonly id_kategori: FieldRef<"kategori", 'Int'>
    readonly nama_kategori: FieldRef<"kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kategori findUnique
   */
  export type kategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori findUniqueOrThrow
   */
  export type kategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori findFirst
   */
  export type kategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori findFirstOrThrow
   */
  export type kategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori findMany
   */
  export type kategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori create
   */
  export type kategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a kategori.
     */
    data: XOR<kategoriCreateInput, kategoriUncheckedCreateInput>
  }

  /**
   * kategori createMany
   */
  export type kategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kategoris.
     */
    data: kategoriCreateManyInput | kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kategori createManyAndReturn
   */
  export type kategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The data used to create many kategoris.
     */
    data: kategoriCreateManyInput | kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kategori update
   */
  export type kategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a kategori.
     */
    data: XOR<kategoriUpdateInput, kategoriUncheckedUpdateInput>
    /**
     * Choose, which kategori to update.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori updateMany
   */
  export type kategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kategoris.
     */
    data: XOR<kategoriUpdateManyMutationInput, kategoriUncheckedUpdateManyInput>
    /**
     * Filter which kategoris to update
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to update.
     */
    limit?: number
  }

  /**
   * kategori updateManyAndReturn
   */
  export type kategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The data used to update kategoris.
     */
    data: XOR<kategoriUpdateManyMutationInput, kategoriUncheckedUpdateManyInput>
    /**
     * Filter which kategoris to update
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to update.
     */
    limit?: number
  }

  /**
   * kategori upsert
   */
  export type kategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the kategori to update in case it exists.
     */
    where: kategoriWhereUniqueInput
    /**
     * In case the kategori found by the `where` argument doesn't exist, create a new kategori with this data.
     */
    create: XOR<kategoriCreateInput, kategoriUncheckedCreateInput>
    /**
     * In case the kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kategoriUpdateInput, kategoriUncheckedUpdateInput>
  }

  /**
   * kategori delete
   */
  export type kategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter which kategori to delete.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori deleteMany
   */
  export type kategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategoris to delete
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to delete.
     */
    limit?: number
  }

  /**
   * kategori.barang
   */
  export type kategori$barangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    where?: barangWhereInput
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    cursor?: barangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * kategori without action
   */
  export type kategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
  }


  /**
   * Model peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _avg: PeminjamanAvgAggregateOutputType | null
    _sum: PeminjamanSumAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanAvgAggregateOutputType = {
    id_peminjaman: number | null
    id_pengguna: number | null
  }

  export type PeminjamanSumAggregateOutputType = {
    id_peminjaman: number | null
    id_pengguna: number | null
  }

  export type PeminjamanMinAggregateOutputType = {
    id_peminjaman: number | null
    id_pengguna: number | null
    tanggal_pinjam: Date | null
    tanggal_kembali: Date | null
    status: string | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    id_peminjaman: number | null
    id_pengguna: number | null
    tanggal_pinjam: Date | null
    tanggal_kembali: Date | null
    status: string | null
  }

  export type PeminjamanCountAggregateOutputType = {
    id_peminjaman: number
    id_pengguna: number
    tanggal_pinjam: number
    tanggal_kembali: number
    status: number
    _all: number
  }


  export type PeminjamanAvgAggregateInputType = {
    id_peminjaman?: true
    id_pengguna?: true
  }

  export type PeminjamanSumAggregateInputType = {
    id_peminjaman?: true
    id_pengguna?: true
  }

  export type PeminjamanMinAggregateInputType = {
    id_peminjaman?: true
    id_pengguna?: true
    tanggal_pinjam?: true
    tanggal_kembali?: true
    status?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    id_peminjaman?: true
    id_pengguna?: true
    tanggal_pinjam?: true
    tanggal_kembali?: true
    status?: true
  }

  export type PeminjamanCountAggregateInputType = {
    id_peminjaman?: true
    id_pengguna?: true
    tanggal_pinjam?: true
    tanggal_kembali?: true
    status?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peminjaman to aggregate.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeminjamanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeminjamanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type peminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithAggregationInput | peminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: peminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _avg?: PeminjamanAvgAggregateInputType
    _sum?: PeminjamanSumAggregateInputType
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    id_peminjaman: number
    id_pengguna: number | null
    tanggal_pinjam: Date | null
    tanggal_kembali: Date | null
    status: string | null
    _count: PeminjamanCountAggregateOutputType | null
    _avg: PeminjamanAvgAggregateOutputType | null
    _sum: PeminjamanSumAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends peminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type peminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peminjaman?: boolean
    id_pengguna?: boolean
    tanggal_pinjam?: boolean
    tanggal_kembali?: boolean
    status?: boolean
    detail_peminjaman?: boolean | peminjaman$detail_peminjamanArgs<ExtArgs>
    pengguna?: boolean | peminjaman$penggunaArgs<ExtArgs>
    _count?: boolean | PeminjamanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type peminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peminjaman?: boolean
    id_pengguna?: boolean
    tanggal_pinjam?: boolean
    tanggal_kembali?: boolean
    status?: boolean
    pengguna?: boolean | peminjaman$penggunaArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type peminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peminjaman?: boolean
    id_pengguna?: boolean
    tanggal_pinjam?: boolean
    tanggal_kembali?: boolean
    status?: boolean
    pengguna?: boolean | peminjaman$penggunaArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type peminjamanSelectScalar = {
    id_peminjaman?: boolean
    id_pengguna?: boolean
    tanggal_pinjam?: boolean
    tanggal_kembali?: boolean
    status?: boolean
  }

  export type peminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_peminjaman" | "id_pengguna" | "tanggal_pinjam" | "tanggal_kembali" | "status", ExtArgs["result"]["peminjaman"]>
  export type peminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_peminjaman?: boolean | peminjaman$detail_peminjamanArgs<ExtArgs>
    pengguna?: boolean | peminjaman$penggunaArgs<ExtArgs>
    _count?: boolean | PeminjamanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type peminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | peminjaman$penggunaArgs<ExtArgs>
  }
  export type peminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | peminjaman$penggunaArgs<ExtArgs>
  }

  export type $peminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peminjaman"
    objects: {
      detail_peminjaman: Prisma.$detail_peminjamanPayload<ExtArgs>[]
      pengguna: Prisma.$penggunaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_peminjaman: number
      id_pengguna: number | null
      tanggal_pinjam: Date | null
      tanggal_kembali: Date | null
      status: string | null
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type peminjamanGetPayload<S extends boolean | null | undefined | peminjamanDefaultArgs> = $Result.GetResult<Prisma.$peminjamanPayload, S>

  type peminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface peminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peminjaman'], meta: { name: 'peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {peminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peminjamanFindUniqueArgs>(args: SelectSubset<T, peminjamanFindUniqueArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, peminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peminjamanFindFirstArgs>(args?: SelectSubset<T, peminjamanFindFirstArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, peminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id_peminjaman`
     * const peminjamanWithId_peminjamanOnly = await prisma.peminjaman.findMany({ select: { id_peminjaman: true } })
     * 
     */
    findMany<T extends peminjamanFindManyArgs>(args?: SelectSubset<T, peminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {peminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends peminjamanCreateArgs>(args: SelectSubset<T, peminjamanCreateArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {peminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peminjamanCreateManyArgs>(args?: SelectSubset<T, peminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peminjamen and returns the data saved in the database.
     * @param {peminjamanCreateManyAndReturnArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peminjamen and only return the `id_peminjaman`
     * const peminjamanWithId_peminjamanOnly = await prisma.peminjaman.createManyAndReturn({
     *   select: { id_peminjaman: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends peminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, peminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peminjaman.
     * @param {peminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends peminjamanDeleteArgs>(args: SelectSubset<T, peminjamanDeleteArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {peminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peminjamanUpdateArgs>(args: SelectSubset<T, peminjamanUpdateArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {peminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peminjamanDeleteManyArgs>(args?: SelectSubset<T, peminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peminjamanUpdateManyArgs>(args: SelectSubset<T, peminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen and returns the data updated in the database.
     * @param {peminjamanUpdateManyAndReturnArgs} args - Arguments to update many Peminjamen.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peminjamen and only return the `id_peminjaman`
     * const peminjamanWithId_peminjamanOnly = await prisma.peminjaman.updateManyAndReturn({
     *   select: { id_peminjaman: true },
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
    updateManyAndReturn<T extends peminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, peminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peminjaman.
     * @param {peminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends peminjamanUpsertArgs>(args: SelectSubset<T, peminjamanUpsertArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends peminjamanCountArgs>(
      args?: Subset<T, peminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanGroupByArgs} args - Group by arguments.
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
      T extends peminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peminjamanGroupByArgs['orderBy'] }
        : { orderBy?: peminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peminjaman model
   */
  readonly fields: peminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_peminjaman<T extends peminjaman$detail_peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, peminjaman$detail_peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengguna<T extends peminjaman$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, peminjaman$penggunaArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the peminjaman model
   */
  interface peminjamanFieldRefs {
    readonly id_peminjaman: FieldRef<"peminjaman", 'Int'>
    readonly id_pengguna: FieldRef<"peminjaman", 'Int'>
    readonly tanggal_pinjam: FieldRef<"peminjaman", 'DateTime'>
    readonly tanggal_kembali: FieldRef<"peminjaman", 'DateTime'>
    readonly status: FieldRef<"peminjaman", 'String'>
  }
    

  // Custom InputTypes
  /**
   * peminjaman findUnique
   */
  export type peminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman findUniqueOrThrow
   */
  export type peminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman findFirst
   */
  export type peminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman findFirstOrThrow
   */
  export type peminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman findMany
   */
  export type peminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjamen to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman create
   */
  export type peminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a peminjaman.
     */
    data?: XOR<peminjamanCreateInput, peminjamanUncheckedCreateInput>
  }

  /**
   * peminjaman createMany
   */
  export type peminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many peminjamen.
     */
    data: peminjamanCreateManyInput | peminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peminjaman createManyAndReturn
   */
  export type peminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many peminjamen.
     */
    data: peminjamanCreateManyInput | peminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * peminjaman update
   */
  export type peminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a peminjaman.
     */
    data: XOR<peminjamanUpdateInput, peminjamanUncheckedUpdateInput>
    /**
     * Choose, which peminjaman to update.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman updateMany
   */
  export type peminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update peminjamen.
     */
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which peminjamen to update
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to update.
     */
    limit?: number
  }

  /**
   * peminjaman updateManyAndReturn
   */
  export type peminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * The data used to update peminjamen.
     */
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which peminjamen to update
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * peminjaman upsert
   */
  export type peminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the peminjaman to update in case it exists.
     */
    where: peminjamanWhereUniqueInput
    /**
     * In case the peminjaman found by the `where` argument doesn't exist, create a new peminjaman with this data.
     */
    create: XOR<peminjamanCreateInput, peminjamanUncheckedCreateInput>
    /**
     * In case the peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peminjamanUpdateInput, peminjamanUncheckedUpdateInput>
  }

  /**
   * peminjaman delete
   */
  export type peminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter which peminjaman to delete.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman deleteMany
   */
  export type peminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peminjamen to delete
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to delete.
     */
    limit?: number
  }

  /**
   * peminjaman.detail_peminjaman
   */
  export type peminjaman$detail_peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_peminjaman
     */
    select?: detail_peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_peminjaman
     */
    omit?: detail_peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_peminjamanInclude<ExtArgs> | null
    where?: detail_peminjamanWhereInput
    orderBy?: detail_peminjamanOrderByWithRelationInput | detail_peminjamanOrderByWithRelationInput[]
    cursor?: detail_peminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_peminjamanScalarFieldEnum | Detail_peminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman.pengguna
   */
  export type peminjaman$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * peminjaman without action
   */
  export type peminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
  }


  /**
   * Model pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaAvgAggregateOutputType = {
    id_pengguna: number | null
  }

  export type PenggunaSumAggregateOutputType = {
    id_pengguna: number | null
  }

  export type PenggunaMinAggregateOutputType = {
    id_pengguna: number | null
    nama_lengkap: string | null
    email: string | null
    no_telepon: string | null
    password: string | null
    tanggal_dibuat: Date | null
    role: $Enums.Role | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id_pengguna: number | null
    nama_lengkap: string | null
    email: string | null
    no_telepon: string | null
    password: string | null
    tanggal_dibuat: Date | null
    role: $Enums.Role | null
  }

  export type PenggunaCountAggregateOutputType = {
    id_pengguna: number
    nama_lengkap: number
    email: number
    no_telepon: number
    password: number
    tanggal_dibuat: number
    role: number
    _all: number
  }


  export type PenggunaAvgAggregateInputType = {
    id_pengguna?: true
  }

  export type PenggunaSumAggregateInputType = {
    id_pengguna?: true
  }

  export type PenggunaMinAggregateInputType = {
    id_pengguna?: true
    nama_lengkap?: true
    email?: true
    no_telepon?: true
    password?: true
    tanggal_dibuat?: true
    role?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id_pengguna?: true
    nama_lengkap?: true
    email?: true
    no_telepon?: true
    password?: true
    tanggal_dibuat?: true
    role?: true
  }

  export type PenggunaCountAggregateInputType = {
    id_pengguna?: true
    nama_lengkap?: true
    email?: true
    no_telepon?: true
    password?: true
    tanggal_dibuat?: true
    role?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengguna to aggregate.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenggunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenggunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type penggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithAggregationInput | penggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: penggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _avg?: PenggunaAvgAggregateInputType
    _sum?: PenggunaSumAggregateInputType
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id_pengguna: number
    nama_lengkap: string
    email: string
    no_telepon: string | null
    password: string
    tanggal_dibuat: Date | null
    role: $Enums.Role
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends penggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type penggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengguna?: boolean
    nama_lengkap?: boolean
    email?: boolean
    no_telepon?: boolean
    password?: boolean
    tanggal_dibuat?: boolean
    role?: boolean
    peminjaman?: boolean | pengguna$peminjamanArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>

  export type penggunaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengguna?: boolean
    nama_lengkap?: boolean
    email?: boolean
    no_telepon?: boolean
    password?: boolean
    tanggal_dibuat?: boolean
    role?: boolean
  }, ExtArgs["result"]["pengguna"]>

  export type penggunaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengguna?: boolean
    nama_lengkap?: boolean
    email?: boolean
    no_telepon?: boolean
    password?: boolean
    tanggal_dibuat?: boolean
    role?: boolean
  }, ExtArgs["result"]["pengguna"]>

  export type penggunaSelectScalar = {
    id_pengguna?: boolean
    nama_lengkap?: boolean
    email?: boolean
    no_telepon?: boolean
    password?: boolean
    tanggal_dibuat?: boolean
    role?: boolean
  }

  export type penggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pengguna" | "nama_lengkap" | "email" | "no_telepon" | "password" | "tanggal_dibuat" | "role", ExtArgs["result"]["pengguna"]>
  export type penggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | pengguna$peminjamanArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type penggunaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type penggunaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $penggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengguna"
    objects: {
      peminjaman: Prisma.$peminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pengguna: number
      nama_lengkap: string
      email: string
      no_telepon: string | null
      password: string
      tanggal_dibuat: Date | null
      role: $Enums.Role
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type penggunaGetPayload<S extends boolean | null | undefined | penggunaDefaultArgs> = $Result.GetResult<Prisma.$penggunaPayload, S>

  type penggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface penggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengguna'], meta: { name: 'pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {penggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penggunaFindUniqueArgs>(args: SelectSubset<T, penggunaFindUniqueArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, penggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penggunaFindFirstArgs>(args?: SelectSubset<T, penggunaFindFirstArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, penggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id_pengguna`
     * const penggunaWithId_penggunaOnly = await prisma.pengguna.findMany({ select: { id_pengguna: true } })
     * 
     */
    findMany<T extends penggunaFindManyArgs>(args?: SelectSubset<T, penggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengguna.
     * @param {penggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends penggunaCreateArgs>(args: SelectSubset<T, penggunaCreateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penggunas.
     * @param {penggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penggunaCreateManyArgs>(args?: SelectSubset<T, penggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penggunas and returns the data saved in the database.
     * @param {penggunaCreateManyAndReturnArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penggunas and only return the `id_pengguna`
     * const penggunaWithId_penggunaOnly = await prisma.pengguna.createManyAndReturn({
     *   select: { id_pengguna: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends penggunaCreateManyAndReturnArgs>(args?: SelectSubset<T, penggunaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pengguna.
     * @param {penggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends penggunaDeleteArgs>(args: SelectSubset<T, penggunaDeleteArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengguna.
     * @param {penggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penggunaUpdateArgs>(args: SelectSubset<T, penggunaUpdateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {penggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penggunaDeleteManyArgs>(args?: SelectSubset<T, penggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penggunaUpdateManyArgs>(args: SelectSubset<T, penggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas and returns the data updated in the database.
     * @param {penggunaUpdateManyAndReturnArgs} args - Arguments to update many Penggunas.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penggunas and only return the `id_pengguna`
     * const penggunaWithId_penggunaOnly = await prisma.pengguna.updateManyAndReturn({
     *   select: { id_pengguna: true },
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
    updateManyAndReturn<T extends penggunaUpdateManyAndReturnArgs>(args: SelectSubset<T, penggunaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pengguna.
     * @param {penggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends penggunaUpsertArgs>(args: SelectSubset<T, penggunaUpsertArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends penggunaCountArgs>(
      args?: Subset<T, penggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaGroupByArgs} args - Group by arguments.
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
      T extends penggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penggunaGroupByArgs['orderBy'] }
        : { orderBy?: penggunaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengguna model
   */
  readonly fields: penggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends pengguna$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pengguna model
   */
  interface penggunaFieldRefs {
    readonly id_pengguna: FieldRef<"pengguna", 'Int'>
    readonly nama_lengkap: FieldRef<"pengguna", 'String'>
    readonly email: FieldRef<"pengguna", 'String'>
    readonly no_telepon: FieldRef<"pengguna", 'String'>
    readonly password: FieldRef<"pengguna", 'String'>
    readonly tanggal_dibuat: FieldRef<"pengguna", 'DateTime'>
    readonly role: FieldRef<"pengguna", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * pengguna findUnique
   */
  export type penggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findUniqueOrThrow
   */
  export type penggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findFirst
   */
  export type penggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findFirstOrThrow
   */
  export type penggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findMany
   */
  export type penggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which penggunas to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna create
   */
  export type penggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a pengguna.
     */
    data: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
  }

  /**
   * pengguna createMany
   */
  export type penggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penggunas.
     */
    data: penggunaCreateManyInput | penggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengguna createManyAndReturn
   */
  export type penggunaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The data used to create many penggunas.
     */
    data: penggunaCreateManyInput | penggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengguna update
   */
  export type penggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a pengguna.
     */
    data: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
    /**
     * Choose, which pengguna to update.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna updateMany
   */
  export type penggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penggunas.
     */
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyInput>
    /**
     * Filter which penggunas to update
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to update.
     */
    limit?: number
  }

  /**
   * pengguna updateManyAndReturn
   */
  export type penggunaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The data used to update penggunas.
     */
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyInput>
    /**
     * Filter which penggunas to update
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to update.
     */
    limit?: number
  }

  /**
   * pengguna upsert
   */
  export type penggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the pengguna to update in case it exists.
     */
    where: penggunaWhereUniqueInput
    /**
     * In case the pengguna found by the `where` argument doesn't exist, create a new pengguna with this data.
     */
    create: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
    /**
     * In case the pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
  }

  /**
   * pengguna delete
   */
  export type penggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter which pengguna to delete.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna deleteMany
   */
  export type penggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penggunas to delete
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to delete.
     */
    limit?: number
  }

  /**
   * pengguna.peminjaman
   */
  export type pengguna$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    cursor?: peminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * pengguna without action
   */
  export type penggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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


  export const BarangScalarFieldEnum: {
    id_barang: 'id_barang',
    nama_barang: 'nama_barang',
    id_kategori: 'id_kategori',
    jumlah: 'jumlah',
    deskripsi: 'deskripsi'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const Detail_peminjamanScalarFieldEnum: {
    id_detail: 'id_detail',
    id_peminjaman: 'id_peminjaman',
    id_barang: 'id_barang',
    jumlah_pinjam: 'jumlah_pinjam'
  };

  export type Detail_peminjamanScalarFieldEnum = (typeof Detail_peminjamanScalarFieldEnum)[keyof typeof Detail_peminjamanScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id_kategori: 'id_kategori',
    nama_kategori: 'nama_kategori'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    id_peminjaman: 'id_peminjaman',
    id_pengguna: 'id_pengguna',
    tanggal_pinjam: 'tanggal_pinjam',
    tanggal_kembali: 'tanggal_kembali',
    status: 'status'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const PenggunaScalarFieldEnum: {
    id_pengguna: 'id_pengguna',
    nama_lengkap: 'nama_lengkap',
    email: 'email',
    no_telepon: 'no_telepon',
    password: 'password',
    tanggal_dibuat: 'tanggal_dibuat',
    role: 'role'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type barangWhereInput = {
    AND?: barangWhereInput | barangWhereInput[]
    OR?: barangWhereInput[]
    NOT?: barangWhereInput | barangWhereInput[]
    id_barang?: IntFilter<"barang"> | number
    nama_barang?: StringFilter<"barang"> | string
    id_kategori?: IntNullableFilter<"barang"> | number | null
    jumlah?: IntFilter<"barang"> | number
    deskripsi?: StringNullableFilter<"barang"> | string | null
    kategori?: XOR<KategoriNullableScalarRelationFilter, kategoriWhereInput> | null
    detail_peminjaman?: Detail_peminjamanListRelationFilter
  }

  export type barangOrderByWithRelationInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    id_kategori?: SortOrderInput | SortOrder
    jumlah?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    kategori?: kategoriOrderByWithRelationInput
    detail_peminjaman?: detail_peminjamanOrderByRelationAggregateInput
  }

  export type barangWhereUniqueInput = Prisma.AtLeast<{
    id_barang?: number
    AND?: barangWhereInput | barangWhereInput[]
    OR?: barangWhereInput[]
    NOT?: barangWhereInput | barangWhereInput[]
    nama_barang?: StringFilter<"barang"> | string
    id_kategori?: IntNullableFilter<"barang"> | number | null
    jumlah?: IntFilter<"barang"> | number
    deskripsi?: StringNullableFilter<"barang"> | string | null
    kategori?: XOR<KategoriNullableScalarRelationFilter, kategoriWhereInput> | null
    detail_peminjaman?: Detail_peminjamanListRelationFilter
  }, "id_barang">

  export type barangOrderByWithAggregationInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    id_kategori?: SortOrderInput | SortOrder
    jumlah?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: barangCountOrderByAggregateInput
    _avg?: barangAvgOrderByAggregateInput
    _max?: barangMaxOrderByAggregateInput
    _min?: barangMinOrderByAggregateInput
    _sum?: barangSumOrderByAggregateInput
  }

  export type barangScalarWhereWithAggregatesInput = {
    AND?: barangScalarWhereWithAggregatesInput | barangScalarWhereWithAggregatesInput[]
    OR?: barangScalarWhereWithAggregatesInput[]
    NOT?: barangScalarWhereWithAggregatesInput | barangScalarWhereWithAggregatesInput[]
    id_barang?: IntWithAggregatesFilter<"barang"> | number
    nama_barang?: StringWithAggregatesFilter<"barang"> | string
    id_kategori?: IntNullableWithAggregatesFilter<"barang"> | number | null
    jumlah?: IntWithAggregatesFilter<"barang"> | number
    deskripsi?: StringNullableWithAggregatesFilter<"barang"> | string | null
  }

  export type detail_peminjamanWhereInput = {
    AND?: detail_peminjamanWhereInput | detail_peminjamanWhereInput[]
    OR?: detail_peminjamanWhereInput[]
    NOT?: detail_peminjamanWhereInput | detail_peminjamanWhereInput[]
    id_detail?: IntFilter<"detail_peminjaman"> | number
    id_peminjaman?: IntNullableFilter<"detail_peminjaman"> | number | null
    id_barang?: IntNullableFilter<"detail_peminjaman"> | number | null
    jumlah_pinjam?: IntFilter<"detail_peminjaman"> | number
    barang?: XOR<BarangNullableScalarRelationFilter, barangWhereInput> | null
    peminjaman?: XOR<PeminjamanNullableScalarRelationFilter, peminjamanWhereInput> | null
  }

  export type detail_peminjamanOrderByWithRelationInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrderInput | SortOrder
    id_barang?: SortOrderInput | SortOrder
    jumlah_pinjam?: SortOrder
    barang?: barangOrderByWithRelationInput
    peminjaman?: peminjamanOrderByWithRelationInput
  }

  export type detail_peminjamanWhereUniqueInput = Prisma.AtLeast<{
    id_detail?: number
    AND?: detail_peminjamanWhereInput | detail_peminjamanWhereInput[]
    OR?: detail_peminjamanWhereInput[]
    NOT?: detail_peminjamanWhereInput | detail_peminjamanWhereInput[]
    id_peminjaman?: IntNullableFilter<"detail_peminjaman"> | number | null
    id_barang?: IntNullableFilter<"detail_peminjaman"> | number | null
    jumlah_pinjam?: IntFilter<"detail_peminjaman"> | number
    barang?: XOR<BarangNullableScalarRelationFilter, barangWhereInput> | null
    peminjaman?: XOR<PeminjamanNullableScalarRelationFilter, peminjamanWhereInput> | null
  }, "id_detail">

  export type detail_peminjamanOrderByWithAggregationInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrderInput | SortOrder
    id_barang?: SortOrderInput | SortOrder
    jumlah_pinjam?: SortOrder
    _count?: detail_peminjamanCountOrderByAggregateInput
    _avg?: detail_peminjamanAvgOrderByAggregateInput
    _max?: detail_peminjamanMaxOrderByAggregateInput
    _min?: detail_peminjamanMinOrderByAggregateInput
    _sum?: detail_peminjamanSumOrderByAggregateInput
  }

  export type detail_peminjamanScalarWhereWithAggregatesInput = {
    AND?: detail_peminjamanScalarWhereWithAggregatesInput | detail_peminjamanScalarWhereWithAggregatesInput[]
    OR?: detail_peminjamanScalarWhereWithAggregatesInput[]
    NOT?: detail_peminjamanScalarWhereWithAggregatesInput | detail_peminjamanScalarWhereWithAggregatesInput[]
    id_detail?: IntWithAggregatesFilter<"detail_peminjaman"> | number
    id_peminjaman?: IntNullableWithAggregatesFilter<"detail_peminjaman"> | number | null
    id_barang?: IntNullableWithAggregatesFilter<"detail_peminjaman"> | number | null
    jumlah_pinjam?: IntWithAggregatesFilter<"detail_peminjaman"> | number
  }

  export type kategoriWhereInput = {
    AND?: kategoriWhereInput | kategoriWhereInput[]
    OR?: kategoriWhereInput[]
    NOT?: kategoriWhereInput | kategoriWhereInput[]
    id_kategori?: IntFilter<"kategori"> | number
    nama_kategori?: StringFilter<"kategori"> | string
    barang?: BarangListRelationFilter
  }

  export type kategoriOrderByWithRelationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    barang?: barangOrderByRelationAggregateInput
  }

  export type kategoriWhereUniqueInput = Prisma.AtLeast<{
    id_kategori?: number
    AND?: kategoriWhereInput | kategoriWhereInput[]
    OR?: kategoriWhereInput[]
    NOT?: kategoriWhereInput | kategoriWhereInput[]
    nama_kategori?: StringFilter<"kategori"> | string
    barang?: BarangListRelationFilter
  }, "id_kategori">

  export type kategoriOrderByWithAggregationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    _count?: kategoriCountOrderByAggregateInput
    _avg?: kategoriAvgOrderByAggregateInput
    _max?: kategoriMaxOrderByAggregateInput
    _min?: kategoriMinOrderByAggregateInput
    _sum?: kategoriSumOrderByAggregateInput
  }

  export type kategoriScalarWhereWithAggregatesInput = {
    AND?: kategoriScalarWhereWithAggregatesInput | kategoriScalarWhereWithAggregatesInput[]
    OR?: kategoriScalarWhereWithAggregatesInput[]
    NOT?: kategoriScalarWhereWithAggregatesInput | kategoriScalarWhereWithAggregatesInput[]
    id_kategori?: IntWithAggregatesFilter<"kategori"> | number
    nama_kategori?: StringWithAggregatesFilter<"kategori"> | string
  }

  export type peminjamanWhereInput = {
    AND?: peminjamanWhereInput | peminjamanWhereInput[]
    OR?: peminjamanWhereInput[]
    NOT?: peminjamanWhereInput | peminjamanWhereInput[]
    id_peminjaman?: IntFilter<"peminjaman"> | number
    id_pengguna?: IntNullableFilter<"peminjaman"> | number | null
    tanggal_pinjam?: DateTimeNullableFilter<"peminjaman"> | Date | string | null
    tanggal_kembali?: DateTimeNullableFilter<"peminjaman"> | Date | string | null
    status?: StringNullableFilter<"peminjaman"> | string | null
    detail_peminjaman?: Detail_peminjamanListRelationFilter
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }

  export type peminjamanOrderByWithRelationInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrderInput | SortOrder
    tanggal_pinjam?: SortOrderInput | SortOrder
    tanggal_kembali?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    detail_peminjaman?: detail_peminjamanOrderByRelationAggregateInput
    pengguna?: penggunaOrderByWithRelationInput
  }

  export type peminjamanWhereUniqueInput = Prisma.AtLeast<{
    id_peminjaman?: number
    AND?: peminjamanWhereInput | peminjamanWhereInput[]
    OR?: peminjamanWhereInput[]
    NOT?: peminjamanWhereInput | peminjamanWhereInput[]
    id_pengguna?: IntNullableFilter<"peminjaman"> | number | null
    tanggal_pinjam?: DateTimeNullableFilter<"peminjaman"> | Date | string | null
    tanggal_kembali?: DateTimeNullableFilter<"peminjaman"> | Date | string | null
    status?: StringNullableFilter<"peminjaman"> | string | null
    detail_peminjaman?: Detail_peminjamanListRelationFilter
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }, "id_peminjaman">

  export type peminjamanOrderByWithAggregationInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrderInput | SortOrder
    tanggal_pinjam?: SortOrderInput | SortOrder
    tanggal_kembali?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: peminjamanCountOrderByAggregateInput
    _avg?: peminjamanAvgOrderByAggregateInput
    _max?: peminjamanMaxOrderByAggregateInput
    _min?: peminjamanMinOrderByAggregateInput
    _sum?: peminjamanSumOrderByAggregateInput
  }

  export type peminjamanScalarWhereWithAggregatesInput = {
    AND?: peminjamanScalarWhereWithAggregatesInput | peminjamanScalarWhereWithAggregatesInput[]
    OR?: peminjamanScalarWhereWithAggregatesInput[]
    NOT?: peminjamanScalarWhereWithAggregatesInput | peminjamanScalarWhereWithAggregatesInput[]
    id_peminjaman?: IntWithAggregatesFilter<"peminjaman"> | number
    id_pengguna?: IntNullableWithAggregatesFilter<"peminjaman"> | number | null
    tanggal_pinjam?: DateTimeNullableWithAggregatesFilter<"peminjaman"> | Date | string | null
    tanggal_kembali?: DateTimeNullableWithAggregatesFilter<"peminjaman"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"peminjaman"> | string | null
  }

  export type penggunaWhereInput = {
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    id_pengguna?: IntFilter<"pengguna"> | number
    nama_lengkap?: StringFilter<"pengguna"> | string
    email?: StringFilter<"pengguna"> | string
    no_telepon?: StringNullableFilter<"pengguna"> | string | null
    password?: StringFilter<"pengguna"> | string
    tanggal_dibuat?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    role?: EnumRoleFilter<"pengguna"> | $Enums.Role
    peminjaman?: PeminjamanListRelationFilter
  }

  export type penggunaOrderByWithRelationInput = {
    id_pengguna?: SortOrder
    nama_lengkap?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrderInput | SortOrder
    password?: SortOrder
    tanggal_dibuat?: SortOrderInput | SortOrder
    role?: SortOrder
    peminjaman?: peminjamanOrderByRelationAggregateInput
  }

  export type penggunaWhereUniqueInput = Prisma.AtLeast<{
    id_pengguna?: number
    email?: string
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    nama_lengkap?: StringFilter<"pengguna"> | string
    no_telepon?: StringNullableFilter<"pengguna"> | string | null
    password?: StringFilter<"pengguna"> | string
    tanggal_dibuat?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    role?: EnumRoleFilter<"pengguna"> | $Enums.Role
    peminjaman?: PeminjamanListRelationFilter
  }, "id_pengguna" | "email">

  export type penggunaOrderByWithAggregationInput = {
    id_pengguna?: SortOrder
    nama_lengkap?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrderInput | SortOrder
    password?: SortOrder
    tanggal_dibuat?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: penggunaCountOrderByAggregateInput
    _avg?: penggunaAvgOrderByAggregateInput
    _max?: penggunaMaxOrderByAggregateInput
    _min?: penggunaMinOrderByAggregateInput
    _sum?: penggunaSumOrderByAggregateInput
  }

  export type penggunaScalarWhereWithAggregatesInput = {
    AND?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    OR?: penggunaScalarWhereWithAggregatesInput[]
    NOT?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    id_pengguna?: IntWithAggregatesFilter<"pengguna"> | number
    nama_lengkap?: StringWithAggregatesFilter<"pengguna"> | string
    email?: StringWithAggregatesFilter<"pengguna"> | string
    no_telepon?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    password?: StringWithAggregatesFilter<"pengguna"> | string
    tanggal_dibuat?: DateTimeNullableWithAggregatesFilter<"pengguna"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"pengguna"> | $Enums.Role
  }

  export type barangCreateInput = {
    nama_barang: string
    jumlah: number
    deskripsi?: string | null
    kategori?: kategoriCreateNestedOneWithoutBarangInput
    detail_peminjaman?: detail_peminjamanCreateNestedManyWithoutBarangInput
  }

  export type barangUncheckedCreateInput = {
    id_barang?: number
    nama_barang: string
    id_kategori?: number | null
    jumlah: number
    deskripsi?: string | null
    detail_peminjaman?: detail_peminjamanUncheckedCreateNestedManyWithoutBarangInput
  }

  export type barangUpdateInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: kategoriUpdateOneWithoutBarangNestedInput
    detail_peminjaman?: detail_peminjamanUpdateManyWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    id_kategori?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type barangCreateManyInput = {
    id_barang?: number
    nama_barang: string
    id_kategori?: number | null
    jumlah: number
    deskripsi?: string | null
  }

  export type barangUpdateManyMutationInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type barangUncheckedUpdateManyInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    id_kategori?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_peminjamanCreateInput = {
    jumlah_pinjam: number
    barang?: barangCreateNestedOneWithoutDetail_peminjamanInput
    peminjaman?: peminjamanCreateNestedOneWithoutDetail_peminjamanInput
  }

  export type detail_peminjamanUncheckedCreateInput = {
    id_detail?: number
    id_peminjaman?: number | null
    id_barang?: number | null
    jumlah_pinjam: number
  }

  export type detail_peminjamanUpdateInput = {
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
    barang?: barangUpdateOneWithoutDetail_peminjamanNestedInput
    peminjaman?: peminjamanUpdateOneWithoutDetail_peminjamanNestedInput
  }

  export type detail_peminjamanUncheckedUpdateInput = {
    id_detail?: IntFieldUpdateOperationsInput | number
    id_peminjaman?: NullableIntFieldUpdateOperationsInput | number | null
    id_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type detail_peminjamanCreateManyInput = {
    id_detail?: number
    id_peminjaman?: number | null
    id_barang?: number | null
    jumlah_pinjam: number
  }

  export type detail_peminjamanUpdateManyMutationInput = {
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type detail_peminjamanUncheckedUpdateManyInput = {
    id_detail?: IntFieldUpdateOperationsInput | number
    id_peminjaman?: NullableIntFieldUpdateOperationsInput | number | null
    id_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type kategoriCreateInput = {
    nama_kategori: string
    barang?: barangCreateNestedManyWithoutKategoriInput
  }

  export type kategoriUncheckedCreateInput = {
    id_kategori?: number
    nama_kategori: string
    barang?: barangUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type kategoriUpdateInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    barang?: barangUpdateManyWithoutKategoriNestedInput
  }

  export type kategoriUncheckedUpdateInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    barang?: barangUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type kategoriCreateManyInput = {
    id_kategori?: number
    nama_kategori: string
  }

  export type kategoriUpdateManyMutationInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type kategoriUncheckedUpdateManyInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanCreateInput = {
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
    detail_peminjaman?: detail_peminjamanCreateNestedManyWithoutPeminjamanInput
    pengguna?: penggunaCreateNestedOneWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateInput = {
    id_peminjaman?: number
    id_pengguna?: number | null
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
    detail_peminjaman?: detail_peminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type peminjamanUpdateInput = {
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUpdateManyWithoutPeminjamanNestedInput
    pengguna?: penggunaUpdateOneWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    id_pengguna?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type peminjamanCreateManyInput = {
    id_peminjaman?: number
    id_pengguna?: number | null
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
  }

  export type peminjamanUpdateManyMutationInput = {
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanUncheckedUpdateManyInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    id_pengguna?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penggunaCreateInput = {
    nama_lengkap: string
    email: string
    no_telepon?: string | null
    password: string
    tanggal_dibuat?: Date | string | null
    role?: $Enums.Role
    peminjaman?: peminjamanCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateInput = {
    id_pengguna?: number
    nama_lengkap: string
    email: string
    no_telepon?: string | null
    password: string
    tanggal_dibuat?: Date | string | null
    role?: $Enums.Role
    peminjaman?: peminjamanUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUpdateInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    peminjaman?: peminjamanUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    peminjaman?: peminjamanUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaCreateManyInput = {
    id_pengguna?: number
    nama_lengkap: string
    email: string
    no_telepon?: string | null
    password: string
    tanggal_dibuat?: Date | string | null
    role?: $Enums.Role
  }

  export type penggunaUpdateManyMutationInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type penggunaUncheckedUpdateManyInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type KategoriNullableScalarRelationFilter = {
    is?: kategoriWhereInput | null
    isNot?: kategoriWhereInput | null
  }

  export type Detail_peminjamanListRelationFilter = {
    every?: detail_peminjamanWhereInput
    some?: detail_peminjamanWhereInput
    none?: detail_peminjamanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detail_peminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type barangCountOrderByAggregateInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    id_kategori?: SortOrder
    jumlah?: SortOrder
    deskripsi?: SortOrder
  }

  export type barangAvgOrderByAggregateInput = {
    id_barang?: SortOrder
    id_kategori?: SortOrder
    jumlah?: SortOrder
  }

  export type barangMaxOrderByAggregateInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    id_kategori?: SortOrder
    jumlah?: SortOrder
    deskripsi?: SortOrder
  }

  export type barangMinOrderByAggregateInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    id_kategori?: SortOrder
    jumlah?: SortOrder
    deskripsi?: SortOrder
  }

  export type barangSumOrderByAggregateInput = {
    id_barang?: SortOrder
    id_kategori?: SortOrder
    jumlah?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type BarangNullableScalarRelationFilter = {
    is?: barangWhereInput | null
    isNot?: barangWhereInput | null
  }

  export type PeminjamanNullableScalarRelationFilter = {
    is?: peminjamanWhereInput | null
    isNot?: peminjamanWhereInput | null
  }

  export type detail_peminjamanCountOrderByAggregateInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrder
    id_barang?: SortOrder
    jumlah_pinjam?: SortOrder
  }

  export type detail_peminjamanAvgOrderByAggregateInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrder
    id_barang?: SortOrder
    jumlah_pinjam?: SortOrder
  }

  export type detail_peminjamanMaxOrderByAggregateInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrder
    id_barang?: SortOrder
    jumlah_pinjam?: SortOrder
  }

  export type detail_peminjamanMinOrderByAggregateInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrder
    id_barang?: SortOrder
    jumlah_pinjam?: SortOrder
  }

  export type detail_peminjamanSumOrderByAggregateInput = {
    id_detail?: SortOrder
    id_peminjaman?: SortOrder
    id_barang?: SortOrder
    jumlah_pinjam?: SortOrder
  }

  export type BarangListRelationFilter = {
    every?: barangWhereInput
    some?: barangWhereInput
    none?: barangWhereInput
  }

  export type barangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kategoriCountOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type kategoriAvgOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type kategoriMaxOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type kategoriMinOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type kategoriSumOrderByAggregateInput = {
    id_kategori?: SortOrder
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

  export type PenggunaNullableScalarRelationFilter = {
    is?: penggunaWhereInput | null
    isNot?: penggunaWhereInput | null
  }

  export type peminjamanCountOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrder
    tanggal_pinjam?: SortOrder
    tanggal_kembali?: SortOrder
    status?: SortOrder
  }

  export type peminjamanAvgOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrder
  }

  export type peminjamanMaxOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrder
    tanggal_pinjam?: SortOrder
    tanggal_kembali?: SortOrder
    status?: SortOrder
  }

  export type peminjamanMinOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrder
    tanggal_pinjam?: SortOrder
    tanggal_kembali?: SortOrder
    status?: SortOrder
  }

  export type peminjamanSumOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    id_pengguna?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PeminjamanListRelationFilter = {
    every?: peminjamanWhereInput
    some?: peminjamanWhereInput
    none?: peminjamanWhereInput
  }

  export type peminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type penggunaCountOrderByAggregateInput = {
    id_pengguna?: SortOrder
    nama_lengkap?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    password?: SortOrder
    tanggal_dibuat?: SortOrder
    role?: SortOrder
  }

  export type penggunaAvgOrderByAggregateInput = {
    id_pengguna?: SortOrder
  }

  export type penggunaMaxOrderByAggregateInput = {
    id_pengguna?: SortOrder
    nama_lengkap?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    password?: SortOrder
    tanggal_dibuat?: SortOrder
    role?: SortOrder
  }

  export type penggunaMinOrderByAggregateInput = {
    id_pengguna?: SortOrder
    nama_lengkap?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    password?: SortOrder
    tanggal_dibuat?: SortOrder
    role?: SortOrder
  }

  export type penggunaSumOrderByAggregateInput = {
    id_pengguna?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type kategoriCreateNestedOneWithoutBarangInput = {
    create?: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
    connectOrCreate?: kategoriCreateOrConnectWithoutBarangInput
    connect?: kategoriWhereUniqueInput
  }

  export type detail_peminjamanCreateNestedManyWithoutBarangInput = {
    create?: XOR<detail_peminjamanCreateWithoutBarangInput, detail_peminjamanUncheckedCreateWithoutBarangInput> | detail_peminjamanCreateWithoutBarangInput[] | detail_peminjamanUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutBarangInput | detail_peminjamanCreateOrConnectWithoutBarangInput[]
    createMany?: detail_peminjamanCreateManyBarangInputEnvelope
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
  }

  export type detail_peminjamanUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<detail_peminjamanCreateWithoutBarangInput, detail_peminjamanUncheckedCreateWithoutBarangInput> | detail_peminjamanCreateWithoutBarangInput[] | detail_peminjamanUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutBarangInput | detail_peminjamanCreateOrConnectWithoutBarangInput[]
    createMany?: detail_peminjamanCreateManyBarangInputEnvelope
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type kategoriUpdateOneWithoutBarangNestedInput = {
    create?: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
    connectOrCreate?: kategoriCreateOrConnectWithoutBarangInput
    upsert?: kategoriUpsertWithoutBarangInput
    disconnect?: kategoriWhereInput | boolean
    delete?: kategoriWhereInput | boolean
    connect?: kategoriWhereUniqueInput
    update?: XOR<XOR<kategoriUpdateToOneWithWhereWithoutBarangInput, kategoriUpdateWithoutBarangInput>, kategoriUncheckedUpdateWithoutBarangInput>
  }

  export type detail_peminjamanUpdateManyWithoutBarangNestedInput = {
    create?: XOR<detail_peminjamanCreateWithoutBarangInput, detail_peminjamanUncheckedCreateWithoutBarangInput> | detail_peminjamanCreateWithoutBarangInput[] | detail_peminjamanUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutBarangInput | detail_peminjamanCreateOrConnectWithoutBarangInput[]
    upsert?: detail_peminjamanUpsertWithWhereUniqueWithoutBarangInput | detail_peminjamanUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: detail_peminjamanCreateManyBarangInputEnvelope
    set?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    disconnect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    delete?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    update?: detail_peminjamanUpdateWithWhereUniqueWithoutBarangInput | detail_peminjamanUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: detail_peminjamanUpdateManyWithWhereWithoutBarangInput | detail_peminjamanUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: detail_peminjamanScalarWhereInput | detail_peminjamanScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type detail_peminjamanUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<detail_peminjamanCreateWithoutBarangInput, detail_peminjamanUncheckedCreateWithoutBarangInput> | detail_peminjamanCreateWithoutBarangInput[] | detail_peminjamanUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutBarangInput | detail_peminjamanCreateOrConnectWithoutBarangInput[]
    upsert?: detail_peminjamanUpsertWithWhereUniqueWithoutBarangInput | detail_peminjamanUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: detail_peminjamanCreateManyBarangInputEnvelope
    set?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    disconnect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    delete?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    update?: detail_peminjamanUpdateWithWhereUniqueWithoutBarangInput | detail_peminjamanUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: detail_peminjamanUpdateManyWithWhereWithoutBarangInput | detail_peminjamanUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: detail_peminjamanScalarWhereInput | detail_peminjamanScalarWhereInput[]
  }

  export type barangCreateNestedOneWithoutDetail_peminjamanInput = {
    create?: XOR<barangCreateWithoutDetail_peminjamanInput, barangUncheckedCreateWithoutDetail_peminjamanInput>
    connectOrCreate?: barangCreateOrConnectWithoutDetail_peminjamanInput
    connect?: barangWhereUniqueInput
  }

  export type peminjamanCreateNestedOneWithoutDetail_peminjamanInput = {
    create?: XOR<peminjamanCreateWithoutDetail_peminjamanInput, peminjamanUncheckedCreateWithoutDetail_peminjamanInput>
    connectOrCreate?: peminjamanCreateOrConnectWithoutDetail_peminjamanInput
    connect?: peminjamanWhereUniqueInput
  }

  export type barangUpdateOneWithoutDetail_peminjamanNestedInput = {
    create?: XOR<barangCreateWithoutDetail_peminjamanInput, barangUncheckedCreateWithoutDetail_peminjamanInput>
    connectOrCreate?: barangCreateOrConnectWithoutDetail_peminjamanInput
    upsert?: barangUpsertWithoutDetail_peminjamanInput
    disconnect?: barangWhereInput | boolean
    delete?: barangWhereInput | boolean
    connect?: barangWhereUniqueInput
    update?: XOR<XOR<barangUpdateToOneWithWhereWithoutDetail_peminjamanInput, barangUpdateWithoutDetail_peminjamanInput>, barangUncheckedUpdateWithoutDetail_peminjamanInput>
  }

  export type peminjamanUpdateOneWithoutDetail_peminjamanNestedInput = {
    create?: XOR<peminjamanCreateWithoutDetail_peminjamanInput, peminjamanUncheckedCreateWithoutDetail_peminjamanInput>
    connectOrCreate?: peminjamanCreateOrConnectWithoutDetail_peminjamanInput
    upsert?: peminjamanUpsertWithoutDetail_peminjamanInput
    disconnect?: peminjamanWhereInput | boolean
    delete?: peminjamanWhereInput | boolean
    connect?: peminjamanWhereUniqueInput
    update?: XOR<XOR<peminjamanUpdateToOneWithWhereWithoutDetail_peminjamanInput, peminjamanUpdateWithoutDetail_peminjamanInput>, peminjamanUncheckedUpdateWithoutDetail_peminjamanInput>
  }

  export type barangCreateNestedManyWithoutKategoriInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
  }

  export type barangUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
  }

  export type barangUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    upsert?: barangUpsertWithWhereUniqueWithoutKategoriInput | barangUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    set?: barangWhereUniqueInput | barangWhereUniqueInput[]
    disconnect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    delete?: barangWhereUniqueInput | barangWhereUniqueInput[]
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    update?: barangUpdateWithWhereUniqueWithoutKategoriInput | barangUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: barangUpdateManyWithWhereWithoutKategoriInput | barangUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: barangScalarWhereInput | barangScalarWhereInput[]
  }

  export type barangUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    upsert?: barangUpsertWithWhereUniqueWithoutKategoriInput | barangUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    set?: barangWhereUniqueInput | barangWhereUniqueInput[]
    disconnect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    delete?: barangWhereUniqueInput | barangWhereUniqueInput[]
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    update?: barangUpdateWithWhereUniqueWithoutKategoriInput | barangUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: barangUpdateManyWithWhereWithoutKategoriInput | barangUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: barangScalarWhereInput | barangScalarWhereInput[]
  }

  export type detail_peminjamanCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<detail_peminjamanCreateWithoutPeminjamanInput, detail_peminjamanUncheckedCreateWithoutPeminjamanInput> | detail_peminjamanCreateWithoutPeminjamanInput[] | detail_peminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutPeminjamanInput | detail_peminjamanCreateOrConnectWithoutPeminjamanInput[]
    createMany?: detail_peminjamanCreateManyPeminjamanInputEnvelope
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<penggunaCreateWithoutPeminjamanInput, penggunaUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPeminjamanInput
    connect?: penggunaWhereUniqueInput
  }

  export type detail_peminjamanUncheckedCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<detail_peminjamanCreateWithoutPeminjamanInput, detail_peminjamanUncheckedCreateWithoutPeminjamanInput> | detail_peminjamanCreateWithoutPeminjamanInput[] | detail_peminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutPeminjamanInput | detail_peminjamanCreateOrConnectWithoutPeminjamanInput[]
    createMany?: detail_peminjamanCreateManyPeminjamanInputEnvelope
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type detail_peminjamanUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<detail_peminjamanCreateWithoutPeminjamanInput, detail_peminjamanUncheckedCreateWithoutPeminjamanInput> | detail_peminjamanCreateWithoutPeminjamanInput[] | detail_peminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutPeminjamanInput | detail_peminjamanCreateOrConnectWithoutPeminjamanInput[]
    upsert?: detail_peminjamanUpsertWithWhereUniqueWithoutPeminjamanInput | detail_peminjamanUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: detail_peminjamanCreateManyPeminjamanInputEnvelope
    set?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    disconnect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    delete?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    update?: detail_peminjamanUpdateWithWhereUniqueWithoutPeminjamanInput | detail_peminjamanUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: detail_peminjamanUpdateManyWithWhereWithoutPeminjamanInput | detail_peminjamanUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: detail_peminjamanScalarWhereInput | detail_peminjamanScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutPeminjamanNestedInput = {
    create?: XOR<penggunaCreateWithoutPeminjamanInput, penggunaUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPeminjamanInput
    upsert?: penggunaUpsertWithoutPeminjamanInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutPeminjamanInput, penggunaUpdateWithoutPeminjamanInput>, penggunaUncheckedUpdateWithoutPeminjamanInput>
  }

  export type detail_peminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<detail_peminjamanCreateWithoutPeminjamanInput, detail_peminjamanUncheckedCreateWithoutPeminjamanInput> | detail_peminjamanCreateWithoutPeminjamanInput[] | detail_peminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: detail_peminjamanCreateOrConnectWithoutPeminjamanInput | detail_peminjamanCreateOrConnectWithoutPeminjamanInput[]
    upsert?: detail_peminjamanUpsertWithWhereUniqueWithoutPeminjamanInput | detail_peminjamanUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: detail_peminjamanCreateManyPeminjamanInputEnvelope
    set?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    disconnect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    delete?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    connect?: detail_peminjamanWhereUniqueInput | detail_peminjamanWhereUniqueInput[]
    update?: detail_peminjamanUpdateWithWhereUniqueWithoutPeminjamanInput | detail_peminjamanUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: detail_peminjamanUpdateManyWithWhereWithoutPeminjamanInput | detail_peminjamanUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: detail_peminjamanScalarWhereInput | detail_peminjamanScalarWhereInput[]
  }

  export type peminjamanCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<peminjamanCreateWithoutPenggunaInput, peminjamanUncheckedCreateWithoutPenggunaInput> | peminjamanCreateWithoutPenggunaInput[] | peminjamanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutPenggunaInput | peminjamanCreateOrConnectWithoutPenggunaInput[]
    createMany?: peminjamanCreateManyPenggunaInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type peminjamanUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<peminjamanCreateWithoutPenggunaInput, peminjamanUncheckedCreateWithoutPenggunaInput> | peminjamanCreateWithoutPenggunaInput[] | peminjamanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutPenggunaInput | peminjamanCreateOrConnectWithoutPenggunaInput[]
    createMany?: peminjamanCreateManyPenggunaInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type peminjamanUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<peminjamanCreateWithoutPenggunaInput, peminjamanUncheckedCreateWithoutPenggunaInput> | peminjamanCreateWithoutPenggunaInput[] | peminjamanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutPenggunaInput | peminjamanCreateOrConnectWithoutPenggunaInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutPenggunaInput | peminjamanUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: peminjamanCreateManyPenggunaInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutPenggunaInput | peminjamanUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutPenggunaInput | peminjamanUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type peminjamanUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<peminjamanCreateWithoutPenggunaInput, peminjamanUncheckedCreateWithoutPenggunaInput> | peminjamanCreateWithoutPenggunaInput[] | peminjamanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutPenggunaInput | peminjamanCreateOrConnectWithoutPenggunaInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutPenggunaInput | peminjamanUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: peminjamanCreateManyPenggunaInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutPenggunaInput | peminjamanUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutPenggunaInput | peminjamanUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type kategoriCreateWithoutBarangInput = {
    nama_kategori: string
  }

  export type kategoriUncheckedCreateWithoutBarangInput = {
    id_kategori?: number
    nama_kategori: string
  }

  export type kategoriCreateOrConnectWithoutBarangInput = {
    where: kategoriWhereUniqueInput
    create: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
  }

  export type detail_peminjamanCreateWithoutBarangInput = {
    jumlah_pinjam: number
    peminjaman?: peminjamanCreateNestedOneWithoutDetail_peminjamanInput
  }

  export type detail_peminjamanUncheckedCreateWithoutBarangInput = {
    id_detail?: number
    id_peminjaman?: number | null
    jumlah_pinjam: number
  }

  export type detail_peminjamanCreateOrConnectWithoutBarangInput = {
    where: detail_peminjamanWhereUniqueInput
    create: XOR<detail_peminjamanCreateWithoutBarangInput, detail_peminjamanUncheckedCreateWithoutBarangInput>
  }

  export type detail_peminjamanCreateManyBarangInputEnvelope = {
    data: detail_peminjamanCreateManyBarangInput | detail_peminjamanCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type kategoriUpsertWithoutBarangInput = {
    update: XOR<kategoriUpdateWithoutBarangInput, kategoriUncheckedUpdateWithoutBarangInput>
    create: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
    where?: kategoriWhereInput
  }

  export type kategoriUpdateToOneWithWhereWithoutBarangInput = {
    where?: kategoriWhereInput
    data: XOR<kategoriUpdateWithoutBarangInput, kategoriUncheckedUpdateWithoutBarangInput>
  }

  export type kategoriUpdateWithoutBarangInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type kategoriUncheckedUpdateWithoutBarangInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type detail_peminjamanUpsertWithWhereUniqueWithoutBarangInput = {
    where: detail_peminjamanWhereUniqueInput
    update: XOR<detail_peminjamanUpdateWithoutBarangInput, detail_peminjamanUncheckedUpdateWithoutBarangInput>
    create: XOR<detail_peminjamanCreateWithoutBarangInput, detail_peminjamanUncheckedCreateWithoutBarangInput>
  }

  export type detail_peminjamanUpdateWithWhereUniqueWithoutBarangInput = {
    where: detail_peminjamanWhereUniqueInput
    data: XOR<detail_peminjamanUpdateWithoutBarangInput, detail_peminjamanUncheckedUpdateWithoutBarangInput>
  }

  export type detail_peminjamanUpdateManyWithWhereWithoutBarangInput = {
    where: detail_peminjamanScalarWhereInput
    data: XOR<detail_peminjamanUpdateManyMutationInput, detail_peminjamanUncheckedUpdateManyWithoutBarangInput>
  }

  export type detail_peminjamanScalarWhereInput = {
    AND?: detail_peminjamanScalarWhereInput | detail_peminjamanScalarWhereInput[]
    OR?: detail_peminjamanScalarWhereInput[]
    NOT?: detail_peminjamanScalarWhereInput | detail_peminjamanScalarWhereInput[]
    id_detail?: IntFilter<"detail_peminjaman"> | number
    id_peminjaman?: IntNullableFilter<"detail_peminjaman"> | number | null
    id_barang?: IntNullableFilter<"detail_peminjaman"> | number | null
    jumlah_pinjam?: IntFilter<"detail_peminjaman"> | number
  }

  export type barangCreateWithoutDetail_peminjamanInput = {
    nama_barang: string
    jumlah: number
    deskripsi?: string | null
    kategori?: kategoriCreateNestedOneWithoutBarangInput
  }

  export type barangUncheckedCreateWithoutDetail_peminjamanInput = {
    id_barang?: number
    nama_barang: string
    id_kategori?: number | null
    jumlah: number
    deskripsi?: string | null
  }

  export type barangCreateOrConnectWithoutDetail_peminjamanInput = {
    where: barangWhereUniqueInput
    create: XOR<barangCreateWithoutDetail_peminjamanInput, barangUncheckedCreateWithoutDetail_peminjamanInput>
  }

  export type peminjamanCreateWithoutDetail_peminjamanInput = {
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
    pengguna?: penggunaCreateNestedOneWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateWithoutDetail_peminjamanInput = {
    id_peminjaman?: number
    id_pengguna?: number | null
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
  }

  export type peminjamanCreateOrConnectWithoutDetail_peminjamanInput = {
    where: peminjamanWhereUniqueInput
    create: XOR<peminjamanCreateWithoutDetail_peminjamanInput, peminjamanUncheckedCreateWithoutDetail_peminjamanInput>
  }

  export type barangUpsertWithoutDetail_peminjamanInput = {
    update: XOR<barangUpdateWithoutDetail_peminjamanInput, barangUncheckedUpdateWithoutDetail_peminjamanInput>
    create: XOR<barangCreateWithoutDetail_peminjamanInput, barangUncheckedCreateWithoutDetail_peminjamanInput>
    where?: barangWhereInput
  }

  export type barangUpdateToOneWithWhereWithoutDetail_peminjamanInput = {
    where?: barangWhereInput
    data: XOR<barangUpdateWithoutDetail_peminjamanInput, barangUncheckedUpdateWithoutDetail_peminjamanInput>
  }

  export type barangUpdateWithoutDetail_peminjamanInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: kategoriUpdateOneWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateWithoutDetail_peminjamanInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    id_kategori?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanUpsertWithoutDetail_peminjamanInput = {
    update: XOR<peminjamanUpdateWithoutDetail_peminjamanInput, peminjamanUncheckedUpdateWithoutDetail_peminjamanInput>
    create: XOR<peminjamanCreateWithoutDetail_peminjamanInput, peminjamanUncheckedCreateWithoutDetail_peminjamanInput>
    where?: peminjamanWhereInput
  }

  export type peminjamanUpdateToOneWithWhereWithoutDetail_peminjamanInput = {
    where?: peminjamanWhereInput
    data: XOR<peminjamanUpdateWithoutDetail_peminjamanInput, peminjamanUncheckedUpdateWithoutDetail_peminjamanInput>
  }

  export type peminjamanUpdateWithoutDetail_peminjamanInput = {
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pengguna?: penggunaUpdateOneWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateWithoutDetail_peminjamanInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    id_pengguna?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type barangCreateWithoutKategoriInput = {
    nama_barang: string
    jumlah: number
    deskripsi?: string | null
    detail_peminjaman?: detail_peminjamanCreateNestedManyWithoutBarangInput
  }

  export type barangUncheckedCreateWithoutKategoriInput = {
    id_barang?: number
    nama_barang: string
    jumlah: number
    deskripsi?: string | null
    detail_peminjaman?: detail_peminjamanUncheckedCreateNestedManyWithoutBarangInput
  }

  export type barangCreateOrConnectWithoutKategoriInput = {
    where: barangWhereUniqueInput
    create: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput>
  }

  export type barangCreateManyKategoriInputEnvelope = {
    data: barangCreateManyKategoriInput | barangCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type barangUpsertWithWhereUniqueWithoutKategoriInput = {
    where: barangWhereUniqueInput
    update: XOR<barangUpdateWithoutKategoriInput, barangUncheckedUpdateWithoutKategoriInput>
    create: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput>
  }

  export type barangUpdateWithWhereUniqueWithoutKategoriInput = {
    where: barangWhereUniqueInput
    data: XOR<barangUpdateWithoutKategoriInput, barangUncheckedUpdateWithoutKategoriInput>
  }

  export type barangUpdateManyWithWhereWithoutKategoriInput = {
    where: barangScalarWhereInput
    data: XOR<barangUpdateManyMutationInput, barangUncheckedUpdateManyWithoutKategoriInput>
  }

  export type barangScalarWhereInput = {
    AND?: barangScalarWhereInput | barangScalarWhereInput[]
    OR?: barangScalarWhereInput[]
    NOT?: barangScalarWhereInput | barangScalarWhereInput[]
    id_barang?: IntFilter<"barang"> | number
    nama_barang?: StringFilter<"barang"> | string
    id_kategori?: IntNullableFilter<"barang"> | number | null
    jumlah?: IntFilter<"barang"> | number
    deskripsi?: StringNullableFilter<"barang"> | string | null
  }

  export type detail_peminjamanCreateWithoutPeminjamanInput = {
    jumlah_pinjam: number
    barang?: barangCreateNestedOneWithoutDetail_peminjamanInput
  }

  export type detail_peminjamanUncheckedCreateWithoutPeminjamanInput = {
    id_detail?: number
    id_barang?: number | null
    jumlah_pinjam: number
  }

  export type detail_peminjamanCreateOrConnectWithoutPeminjamanInput = {
    where: detail_peminjamanWhereUniqueInput
    create: XOR<detail_peminjamanCreateWithoutPeminjamanInput, detail_peminjamanUncheckedCreateWithoutPeminjamanInput>
  }

  export type detail_peminjamanCreateManyPeminjamanInputEnvelope = {
    data: detail_peminjamanCreateManyPeminjamanInput | detail_peminjamanCreateManyPeminjamanInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutPeminjamanInput = {
    nama_lengkap: string
    email: string
    no_telepon?: string | null
    password: string
    tanggal_dibuat?: Date | string | null
    role?: $Enums.Role
  }

  export type penggunaUncheckedCreateWithoutPeminjamanInput = {
    id_pengguna?: number
    nama_lengkap: string
    email: string
    no_telepon?: string | null
    password: string
    tanggal_dibuat?: Date | string | null
    role?: $Enums.Role
  }

  export type penggunaCreateOrConnectWithoutPeminjamanInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPeminjamanInput, penggunaUncheckedCreateWithoutPeminjamanInput>
  }

  export type detail_peminjamanUpsertWithWhereUniqueWithoutPeminjamanInput = {
    where: detail_peminjamanWhereUniqueInput
    update: XOR<detail_peminjamanUpdateWithoutPeminjamanInput, detail_peminjamanUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<detail_peminjamanCreateWithoutPeminjamanInput, detail_peminjamanUncheckedCreateWithoutPeminjamanInput>
  }

  export type detail_peminjamanUpdateWithWhereUniqueWithoutPeminjamanInput = {
    where: detail_peminjamanWhereUniqueInput
    data: XOR<detail_peminjamanUpdateWithoutPeminjamanInput, detail_peminjamanUncheckedUpdateWithoutPeminjamanInput>
  }

  export type detail_peminjamanUpdateManyWithWhereWithoutPeminjamanInput = {
    where: detail_peminjamanScalarWhereInput
    data: XOR<detail_peminjamanUpdateManyMutationInput, detail_peminjamanUncheckedUpdateManyWithoutPeminjamanInput>
  }

  export type penggunaUpsertWithoutPeminjamanInput = {
    update: XOR<penggunaUpdateWithoutPeminjamanInput, penggunaUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<penggunaCreateWithoutPeminjamanInput, penggunaUncheckedCreateWithoutPeminjamanInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutPeminjamanInput, penggunaUncheckedUpdateWithoutPeminjamanInput>
  }

  export type penggunaUpdateWithoutPeminjamanInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type penggunaUncheckedUpdateWithoutPeminjamanInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type peminjamanCreateWithoutPenggunaInput = {
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
    detail_peminjaman?: detail_peminjamanCreateNestedManyWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateWithoutPenggunaInput = {
    id_peminjaman?: number
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
    detail_peminjaman?: detail_peminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type peminjamanCreateOrConnectWithoutPenggunaInput = {
    where: peminjamanWhereUniqueInput
    create: XOR<peminjamanCreateWithoutPenggunaInput, peminjamanUncheckedCreateWithoutPenggunaInput>
  }

  export type peminjamanCreateManyPenggunaInputEnvelope = {
    data: peminjamanCreateManyPenggunaInput | peminjamanCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type peminjamanUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: peminjamanWhereUniqueInput
    update: XOR<peminjamanUpdateWithoutPenggunaInput, peminjamanUncheckedUpdateWithoutPenggunaInput>
    create: XOR<peminjamanCreateWithoutPenggunaInput, peminjamanUncheckedCreateWithoutPenggunaInput>
  }

  export type peminjamanUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: peminjamanWhereUniqueInput
    data: XOR<peminjamanUpdateWithoutPenggunaInput, peminjamanUncheckedUpdateWithoutPenggunaInput>
  }

  export type peminjamanUpdateManyWithWhereWithoutPenggunaInput = {
    where: peminjamanScalarWhereInput
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type peminjamanScalarWhereInput = {
    AND?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
    OR?: peminjamanScalarWhereInput[]
    NOT?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
    id_peminjaman?: IntFilter<"peminjaman"> | number
    id_pengguna?: IntNullableFilter<"peminjaman"> | number | null
    tanggal_pinjam?: DateTimeNullableFilter<"peminjaman"> | Date | string | null
    tanggal_kembali?: DateTimeNullableFilter<"peminjaman"> | Date | string | null
    status?: StringNullableFilter<"peminjaman"> | string | null
  }

  export type detail_peminjamanCreateManyBarangInput = {
    id_detail?: number
    id_peminjaman?: number | null
    jumlah_pinjam: number
  }

  export type detail_peminjamanUpdateWithoutBarangInput = {
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
    peminjaman?: peminjamanUpdateOneWithoutDetail_peminjamanNestedInput
  }

  export type detail_peminjamanUncheckedUpdateWithoutBarangInput = {
    id_detail?: IntFieldUpdateOperationsInput | number
    id_peminjaman?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type detail_peminjamanUncheckedUpdateManyWithoutBarangInput = {
    id_detail?: IntFieldUpdateOperationsInput | number
    id_peminjaman?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type barangCreateManyKategoriInput = {
    id_barang?: number
    nama_barang: string
    jumlah: number
    deskripsi?: string | null
  }

  export type barangUpdateWithoutKategoriInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUpdateManyWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateWithoutKategoriInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateManyWithoutKategoriInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_peminjamanCreateManyPeminjamanInput = {
    id_detail?: number
    id_barang?: number | null
    jumlah_pinjam: number
  }

  export type detail_peminjamanUpdateWithoutPeminjamanInput = {
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
    barang?: barangUpdateOneWithoutDetail_peminjamanNestedInput
  }

  export type detail_peminjamanUncheckedUpdateWithoutPeminjamanInput = {
    id_detail?: IntFieldUpdateOperationsInput | number
    id_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type detail_peminjamanUncheckedUpdateManyWithoutPeminjamanInput = {
    id_detail?: IntFieldUpdateOperationsInput | number
    id_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_pinjam?: IntFieldUpdateOperationsInput | number
  }

  export type peminjamanCreateManyPenggunaInput = {
    id_peminjaman?: number
    tanggal_pinjam?: Date | string | null
    tanggal_kembali?: Date | string | null
    status?: string | null
  }

  export type peminjamanUpdateWithoutPenggunaInput = {
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUpdateManyWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateWithoutPenggunaInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    detail_peminjaman?: detail_peminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateManyWithoutPenggunaInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    tanggal_pinjam?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_kembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
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