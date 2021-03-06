/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductDetails
// ====================================================

export interface ProductDetails_product_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface ProductDetails_product_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
}

export interface ProductDetails_product_collections_edges {
  __typename: "CollectionCountableEdge";
  node: ProductDetails_product_collections_edges_node;
}

export interface ProductDetails_product_collections {
  __typename: "CollectionCountableConnection";
  edges: ProductDetails_product_collections_edges[];
}

export interface ProductDetails_product_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_product_margin {
  __typename: "Margin";
  start: number | null;
  stop: number | null;
}

export interface ProductDetails_product_purchaseCost_start {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_product_purchaseCost_stop {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_product_purchaseCost {
  __typename: "MoneyRange";
  start: ProductDetails_product_purchaseCost_start | null;
  stop: ProductDetails_product_purchaseCost_stop | null;
}

export interface ProductDetails_product_attributes_attribute_values {
  __typename: "ProductAttributeValue";
  name: string | null;
  slug: string | null;
}

export interface ProductDetails_product_attributes_attribute {
  __typename: "ProductAttribute";
  id: string;
  slug: string | null;
  name: string | null;
  values: (ProductDetails_product_attributes_attribute_values | null)[] | null;
}

export interface ProductDetails_product_attributes_value {
  __typename: "ProductAttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface ProductDetails_product_attributes {
  __typename: "SelectedAttribute";
  attribute: ProductDetails_product_attributes_attribute | null;
  value: ProductDetails_product_attributes_value | null;
}

export interface ProductDetails_product_availability_priceRange_start_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_product_availability_priceRange_start {
  __typename: "TaxedMoney";
  net: ProductDetails_product_availability_priceRange_start_net;
}

export interface ProductDetails_product_availability_priceRange_stop_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_product_availability_priceRange_stop {
  __typename: "TaxedMoney";
  net: ProductDetails_product_availability_priceRange_stop_net;
}

export interface ProductDetails_product_availability_priceRange {
  __typename: "TaxedMoneyRange";
  start: ProductDetails_product_availability_priceRange_start | null;
  stop: ProductDetails_product_availability_priceRange_stop | null;
}

export interface ProductDetails_product_availability {
  __typename: "ProductAvailability";
  available: boolean | null;
  priceRange: ProductDetails_product_availability_priceRange | null;
}

export interface ProductDetails_product_images_edges_node {
  __typename: "ProductImage";
  id: string;
  alt: string;
  sortOrder: number;
  url: string;
}

export interface ProductDetails_product_images_edges {
  __typename: "ProductImageCountableEdge";
  node: ProductDetails_product_images_edges_node;
}

export interface ProductDetails_product_images {
  __typename: "ProductImageCountableConnection";
  edges: ProductDetails_product_images_edges[];
}

export interface ProductDetails_product_variants_edges_node_priceOverride {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_product_variants_edges_node {
  __typename: "ProductVariant";
  id: string;
  sku: string;
  name: string;
  priceOverride: ProductDetails_product_variants_edges_node_priceOverride | null;
  stockQuantity: number;
  margin: number | null;
}

export interface ProductDetails_product_variants_edges {
  __typename: "ProductVariantCountableEdge";
  node: ProductDetails_product_variants_edges_node;
}

export interface ProductDetails_product_variants {
  __typename: "ProductVariantCountableConnection";
  edges: ProductDetails_product_variants_edges[];
}

export interface ProductDetails_product_productType {
  __typename: "ProductType";
  id: string;
  name: string;
  hasVariants: boolean;
}

export interface ProductDetails_product {
  __typename: "Product";
  id: string;
  name: string;
  description: string;
  seoTitle: string | null;
  seoDescription: string | null;
  category: ProductDetails_product_category;
  collections: ProductDetails_product_collections | null;
  price: ProductDetails_product_price | null;
  margin: ProductDetails_product_margin | null;
  purchaseCost: ProductDetails_product_purchaseCost | null;
  isPublished: boolean;
  chargeTaxes: boolean;
  availableOn: any | null;
  attributes: (ProductDetails_product_attributes | null)[] | null;
  availability: ProductDetails_product_availability | null;
  images: ProductDetails_product_images | null;
  variants: ProductDetails_product_variants | null;
  productType: ProductDetails_product_productType;
  url: string;
}

export interface ProductDetails_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
}

export interface ProductDetails_collections_edges {
  __typename: "CollectionCountableEdge";
  node: ProductDetails_collections_edges_node;
}

export interface ProductDetails_collections {
  __typename: "CollectionCountableConnection";
  edges: ProductDetails_collections_edges[];
}

export interface ProductDetails_categories_edges_node {
  __typename: "Category";
  id: string;
  name: string;
}

export interface ProductDetails_categories_edges {
  __typename: "CategoryCountableEdge";
  node: ProductDetails_categories_edges_node;
}

export interface ProductDetails_categories {
  __typename: "CategoryCountableConnection";
  edges: ProductDetails_categories_edges[];
}

export interface ProductDetails {
  product: ProductDetails_product | null;
  collections: ProductDetails_collections | null;
  categories: ProductDetails_categories | null;
}

export interface ProductDetailsVariables {
  id: string;
}
