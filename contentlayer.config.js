import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}
export const Product = defineDocumentType(() => ({
  name: "Product",
  filePathPattern: `product/**/*.md`,
  contentType: "md",
  fields: {
    title: { type: "string", required: true },
    keywords: { type: "json", required: false },
    description: { type: "string", required: true },
    slug: { type: "string", required: true },
    image: { type: "string" },
    category: { type: "string", required: false },
    // tags: { type: "json", required: false },
    date: { type: "date", required: true },
    // draft: { type: "boolean", required: false },
  },
  computedFields,
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.md`,
  contentType: "md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))
export const Showcase = defineDocumentType(() => ({
  name: "Showcase",
  filePathPattern: `showcase/**/*.md`,
  contentType: "md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: { type: "string" },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}))
export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `blogs/**/*.md`,
  contentType: "md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: { type: "string" },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Article, Product, Showcase],
})