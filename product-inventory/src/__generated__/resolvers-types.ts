import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from '../types/DataSourceContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _FieldSet: { input: any; output: any; }
};

export type AltImage = {
  __typename?: 'AltImage';
  image: Scalars['String']['output'];
};

export type Color = {
  __typename?: 'Color';
  name: Scalars['String']['output'];
};

export type Inventory = {
  __typename?: 'Inventory';
  inStock: Scalars['Boolean']['output'];
};

export type Product = {
  __typename?: 'Product';
  altImages: Array<AltImage>;
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  inventory: Inventory;
  options: ProductOptions;
  price: Scalars['Float']['output'];
  shipping: Shipping;
  title: Scalars['String']['output'];
};

export type ProductDetails = {
  __typename?: 'ProductDetails';
  breadcrumbs: Scalars['String']['output'];
  product: Product;
};

export type ProductOptions = {
  __typename?: 'ProductOptions';
  colors: Array<Color>;
  id: Scalars['ID']['output'];
  sizes: Array<Size>;
};

export type Query = {
  __typename?: 'Query';
  productDetails?: Maybe<ProductDetails>;
};

export type Shipping = {
  __typename?: 'Shipping';
  freeReturns: Scalars['Boolean']['output'];
  minDeliveryDate: Scalars['String']['output'];
  minPrice: Scalars['Float']['output'];
  orderDeadline: Scalars['String']['output'];
};

export type Size = {
  __typename?: 'Size';
  label: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AltImage: ResolverTypeWrapper<AltImage>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Color: ResolverTypeWrapper<Color>;
  Inventory: ResolverTypeWrapper<Inventory>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Product: ResolverTypeWrapper<Product>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ProductDetails: ResolverTypeWrapper<ProductDetails>;
  ProductOptions: ResolverTypeWrapper<ProductOptions>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Shipping: ResolverTypeWrapper<Shipping>;
  Size: ResolverTypeWrapper<Size>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AltImage: AltImage;
  String: Scalars['String']['output'];
  Color: Color;
  Inventory: Inventory;
  Boolean: Scalars['Boolean']['output'];
  Product: Product;
  Float: Scalars['Float']['output'];
  ProductDetails: ProductDetails;
  ProductOptions: ProductOptions;
  ID: Scalars['ID']['output'];
  Query: {};
  Shipping: Shipping;
  Size: Size;
}>;

export type AltImageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AltImage'] = ResolversParentTypes['AltImage']> = ResolversObject<{
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ColorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Color']>, { __typename: 'Color' } & GraphQLRecursivePick<ParentType, {"name":true}>, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Inventory'] = ResolversParentTypes['Inventory']> = ResolversObject<{
  inStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  altImages?: Resolver<Array<ResolversTypes['AltImage']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType>;
  options?: Resolver<ResolversTypes['ProductOptions'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['Shipping'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductDetailsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ProductDetails'] = ResolversParentTypes['ProductDetails']> = ResolversObject<{
  breadcrumbs?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ProductOptions'] = ResolversParentTypes['ProductOptions']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductOptions']>, { __typename: 'ProductOptions' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  colors?: Resolver<Array<ResolversTypes['Color']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['Size']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  productDetails?: Resolver<Maybe<ResolversTypes['ProductDetails']>, ParentType, ContextType>;
}>;

export type ShippingResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Shipping'] = ResolversParentTypes['Shipping']> = ResolversObject<{
  freeReturns?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minDeliveryDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  orderDeadline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SizeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Size'] = ResolversParentTypes['Size']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Size']>, { __typename: 'Size' } & GraphQLRecursivePick<ParentType, {"label":true}>, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  AltImage?: AltImageResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Inventory?: InventoryResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDetails?: ProductDetailsResolvers<ContextType>;
  ProductOptions?: ProductOptionsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shipping?: ShippingResolvers<ContextType>;
  Size?: SizeResolvers<ContextType>;
}>;

