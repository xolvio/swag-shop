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

export type Footer = {
  __typename?: 'Footer';
  address: Scalars['String']['output'];
  categories: Array<FooterCategory>;
  copyrights: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type FooterCategory = {
  __typename?: 'FooterCategory';
  category?: Maybe<Scalars['String']['output']>;
  links: Array<FooterLink>;
};

export type FooterLink = {
  __typename?: 'FooterLink';
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Header = {
  __typename?: 'Header';
  cart?: Maybe<Cart>;
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
  sizes: Array<Size>;
};

export type Query = {
  __typename?: 'Query';
  foo?: Maybe<Scalars['String']['output']>;
  new?: Maybe<Scalars['String']['output']>;
  newSSQuery: Scalars['String']['output'];
  swagShopExperience?: Maybe<SwagShopExperience>;
};

export type Shipping = {
  __typename?: 'Shipping';
  freeReturns: Scalars['Boolean']['output'];
  minDeliveryDate: Scalars['String']['output'];
  minPrice: Scalars['Float']['output'];
  orderDeadline: Scalars['String']['output'];
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

export type SubscribeBar = {
  __typename?: 'SubscribeBar';
  content?: Maybe<SubscriptionContent>;
};

export type SubscriptionContent = {
  __typename?: 'SubscriptionContent';
  copy: Scalars['String']['output'];
  header: Scalars['String']['output'];
};

export type SwagShopExperience = {
  __typename?: 'SwagShopExperience';
  categoryBar?: Maybe<CategoryBar>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  productDetails?: Maybe<ProductDetails>;
  similarProducts?: Maybe<SimilarProducts>;
  slug?: Maybe<Scalars['String']['output']>;
  subscribeBar?: Maybe<SubscribeBar>;
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
  Cart: ResolverTypeWrapper<Cart>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryBar: ResolverTypeWrapper<CategoryBar>;
  Color: ResolverTypeWrapper<Color>;
  Footer: ResolverTypeWrapper<Footer>;
  FooterCategory: ResolverTypeWrapper<FooterCategory>;
  FooterLink: ResolverTypeWrapper<FooterLink>;
  Header: ResolverTypeWrapper<Header>;
  Inventory: ResolverTypeWrapper<Inventory>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Product: ResolverTypeWrapper<Product>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ProductDetails: ResolverTypeWrapper<ProductDetails>;
  ProductOptions: ResolverTypeWrapper<ProductOptions>;
  Query: ResolverTypeWrapper<{}>;
  Shipping: ResolverTypeWrapper<Shipping>;
  SimilarProduct: ResolverTypeWrapper<SimilarProduct>;
  SimilarProducts: ResolverTypeWrapper<SimilarProducts>;
  Size: ResolverTypeWrapper<Size>;
  SubscribeBar: ResolverTypeWrapper<SubscribeBar>;
  SubscriptionContent: ResolverTypeWrapper<SubscriptionContent>;
  SwagShopExperience: ResolverTypeWrapper<SwagShopExperience>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AltImage: AltImage;
  String: Scalars['String']['output'];
  Cart: Cart;
  Int: Scalars['Int']['output'];
  Category: Category;
  CategoryBar: CategoryBar;
  Color: Color;
  Footer: Footer;
  FooterCategory: FooterCategory;
  FooterLink: FooterLink;
  Header: Header;
  Inventory: Inventory;
  Boolean: Scalars['Boolean']['output'];
  Product: Product;
  Float: Scalars['Float']['output'];
  ProductDetails: ProductDetails;
  ProductOptions: ProductOptions;
  Query: {};
  Shipping: Shipping;
  SimilarProduct: SimilarProduct;
  SimilarProducts: SimilarProducts;
  Size: Size;
  SubscribeBar: SubscribeBar;
  SubscriptionContent: SubscriptionContent;
  SwagShopExperience: SwagShopExperience;
}>;

export type AltImageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AltImage'] = ResolversParentTypes['AltImage']> = ResolversObject<{
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FooterResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['FooterCategory']>, ParentType, ContextType>;
  copyrights?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FooterCategoryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FooterCategory'] = ResolversParentTypes['FooterCategory']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['FooterLink']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FooterLinkResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FooterLink'] = ResolversParentTypes['FooterLink']> = ResolversObject<{
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeaderResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header']> = ResolversObject<{
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
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
  colors?: Resolver<Array<ResolversTypes['Color']>, ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['Size']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  foo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newSSQuery?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swagShopExperience?: Resolver<Maybe<ResolversTypes['SwagShopExperience']>, ParentType, ContextType>;
}>;

export type ShippingResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Shipping'] = ResolversParentTypes['Shipping']> = ResolversObject<{
  freeReturns?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minDeliveryDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  orderDeadline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscribeBarResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SubscribeBar'] = ResolversParentTypes['SubscribeBar']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['SubscriptionContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionContentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SubscriptionContent'] = ResolversParentTypes['SubscriptionContent']> = ResolversObject<{
  copy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwagShopExperienceResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SwagShopExperience'] = ResolversParentTypes['SwagShopExperience']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['SwagShopExperience']>, { __typename: 'SwagShopExperience' } & GraphQLRecursivePick<ParentType, {"slug":true}>, ContextType>;
  categoryBar?: Resolver<Maybe<ResolversTypes['CategoryBar']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType>;
  productDetails?: Resolver<Maybe<ResolversTypes['ProductDetails']>, ParentType, ContextType>;
  similarProducts?: Resolver<Maybe<ResolversTypes['SimilarProducts']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscribeBar?: Resolver<Maybe<ResolversTypes['SubscribeBar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  AltImage?: AltImageResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryBar?: CategoryBarResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Footer?: FooterResolvers<ContextType>;
  FooterCategory?: FooterCategoryResolvers<ContextType>;
  FooterLink?: FooterLinkResolvers<ContextType>;
  Header?: HeaderResolvers<ContextType>;
  Inventory?: InventoryResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDetails?: ProductDetailsResolvers<ContextType>;
  ProductOptions?: ProductOptionsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shipping?: ShippingResolvers<ContextType>;
  SimilarProduct?: SimilarProductResolvers<ContextType>;
  SimilarProducts?: SimilarProductsResolvers<ContextType>;
  Size?: SizeResolvers<ContextType>;
  SubscribeBar?: SubscribeBarResolvers<ContextType>;
  SubscriptionContent?: SubscriptionContentResolvers<ContextType>;
  SwagShopExperience?: SwagShopExperienceResolvers<ContextType>;
}>;

