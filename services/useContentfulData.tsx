import { createClient } from "contentful";

type SingleEntryParams = {
  entryId: string;
};

export const getEntries = async ({
  contentType,
}: {
  contentType: "produtos";
}) => {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entries = await contentful.getEntries({ content_type: contentType });

  return entries.items;
};

export const getSingleEntry = async ({ entryId }: SingleEntryParams) => {
  const contentful = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    space: process.env.CONTENTFUL_SPACE_ID|| process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  });

  const entry = await contentful.getEntry(entryId);

  return entry;
};
