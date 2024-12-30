import { defineDocumentType, makeSource } from "contentlayer2/source-files"
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */


export const Product = defineDocumentType(() => ({
  name: "Product",
  filePathPattern: `product/**/**/*.yml`,
  contentType: "data",
  fields: {
    title: { type: "string", required: true },
    ctitle: { type: "string", required: false },
    keywords: { type: "json", required: false },
    description: { type: "string", required: false },
    slug: { type: "string", required: true },
    image: { type: "string" },
    dimensional: { type: "string" },
    features: { type: "json" },
    content: { type: "string" },
    images: { type: "json", required: false },
    category: { type: "string", required: false },
    date: { type: "date", required: true },
    "technicalspecification": {
      type: 'json',
      required: false,
    },
    "physicalspecification": {
      type: 'json',
      required: false,
    },
    downloads: { type: "json", required: false },
    "relatedproducts": { type: "json", required: false },
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

    structuredData: {
      type: "json",
      resolve: (doc) => ({
        "@context": "https://schema.org",
        "@type": "Product",
        name: doc.title + " - " + doc.ctitle,
        image: [doc.images],
        description: doc.description,
        sku: doc.title,
        brand: {
          "@type": "Brand",
          "name": "Syrincs"
        },

        datePublished: doc.date,
        dateModified: doc.date,
        url: `https://www.syrincs.hk/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))
export const Prod = defineDocumentType(() => ({
  name: "Prod",
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
    date: { type: "date", required: true },
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
    // draft: { type: "string", required: false },
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
export const Solution = defineDocumentType(() => ({
  name: "Solution",
  filePathPattern: `solutions/**/*.mdx`,
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
    // draft: { type: "string", required: false },
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
  documentTypes: [Page, Article, Product, Prod, Showcase, Solution],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})