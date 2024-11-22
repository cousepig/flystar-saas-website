import { defineDocumentType, makeSource } from "contentlayer2/source-files"
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
// const computedFields = {

// }
export const Product = defineDocumentType(() => ({
  name: "Product",
  filePathPattern: `product/**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    ctitle: { type: "string", required: false },
    keywords: { type: "json", required: false },
    description: { type: "string", required: false },
    slug: { type: "string", required: true },
    image: { type: "string" },
    images: { type: "json", required: false },
    category: { type: "string", required: false },
    // tags: { type: "json", required: false },
    date: { type: "date", required: true },
    // draft: { type: "boolean", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))
export const Showcase = defineDocumentType(() => ({
  name: "Showcase",
  filePathPattern: `showcase/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    keywords: { type: "json", required: false },
    slug: { type: "string", required: true },
    image: { type: "string" },
    images: { type: "json", required: false },
    category: { type: "string", required: false },
    date: {
      type: "date",
      required: true,
    },
    // draft: { type: "boolean", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))
export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: { type: "string" },
    images: { type: "json", required: false },
    slug: { type: "string", required: false },
    draft: { type: "string", required: false },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Article, Product, Showcase],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})