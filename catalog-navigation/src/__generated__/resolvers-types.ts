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

export type Cart = {
  __typename?: 'Cart';
  itemCount?: Maybe<Scalars['Int']['output']>;
};

export type Category = {
  __typename?: 'Category';
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type CategoryBar = {
  __typename?: 'CategoryBar';
  categories: Array<Category>;
};

export type Color = {
  __typename?: 'Color';
  name: Scalars['String']['output'];
};

export type Header = {
  __typename?: 'Header';
  cart?: Maybe<Cart>;
};

export type ProductOptions = {
  __typename?: 'ProductOptions';
  colors: Array<Color>;
  id: Scalars['ID']['output'];
  sizes: Array<Size>;
};

export type Query = {
  __typename?: 'Query';
  categoryBar?: Maybe<CategoryBar>;
  header?: Maybe<Header>;
  similarProducts?: Maybe<SimilarProducts>;
};

export type SimilarProduct = {
  __typename?: 'SimilarProduct';
  image: Scalars['String']['output'];
  liked: Scalars['Boolean']['output'];
  options?: Maybe<ProductOptions>;
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type SimilarProducts = {
  __typename?: 'SimilarProducts';
  products: Array<SimilarProduct>;
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
  Cart: ResolverTypeWrapper<Cart>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  CategoryBar: ResolverTypeWrapper<CategoryBar>;
  Color: ResolverTypeWrapper<Color>;
  Header: ResolverTypeWrapper<Header>;
  ProductOptions: ResolverTypeWrapper<ProductOptions>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Query: ResolverTypeWrapper<{}>;
  SimilarProduct: ResolverTypeWrapper<SimilarProduct>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  SimilarProducts: ResolverTypeWrapper<SimilarProducts>;
  Size: ResolverTypeWrapper<Size>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Cart: Cart;
  Int: Scalars['Int']['output'];
  Category: Category;
  String: Scalars['String']['output'];
  CategoryBar: CategoryBar;
  Color: Color;
  Header: Header;
  ProductOptions: ProductOptions;
  ID: Scalars['ID']['output'];
  Query: {};
  SimilarProduct: SimilarProduct;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  SimilarProducts: SimilarProducts;
  Size: Size;
}>;

export type CartResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  itemCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryBarResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CategoryBar'] = ResolversParentTypes['CategoryBar']> = ResolversObject<{
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ColorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Color']>, { __typename: 'Color' } & GraphQLRecursivePick<ParentType, {"name":true}>, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeaderResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header']> = ResolversObject<{
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
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
  categoryBar?: Resolver<Maybe<ResolversTypes['CategoryBar']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType>;
  similarProducts?: Resolver<Maybe<ResolversTypes['SimilarProducts']>, ParentType, ContextType>;
}>;

export type SimilarProductResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SimilarProduct'] = ResolversParentTypes['SimilarProduct']> = ResolversObject<{
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['ProductOptions']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SimilarProductsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SimilarProducts'] = ResolversParentTypes['SimilarProducts']> = ResolversObject<{
  products?: Resolver<Array<ResolversTypes['SimilarProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SizeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Size'] = ResolversParentTypes['Size']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Size']>, { __typename: 'Size' } & GraphQLRecursivePick<ParentType, {"label":true}>, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryBar?: CategoryBarResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Header?: HeaderResolvers<ContextType>;
  ProductOptions?: ProductOptionsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SimilarProduct?: SimilarProductResolvers<ContextType>;
  SimilarProducts?: SimilarProductsResolvers<ContextType>;
  Size?: SizeResolvers<ContextType>;
}>;

