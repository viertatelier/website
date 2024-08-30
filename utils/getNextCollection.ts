export const getNextCollection = (
  prevCollection: string,
  activeCollection: "festas" | "noivas" | undefined
) => {
  if (!activeCollection) {
    const collection =
      prevCollection === "yellow"
        ? "gray"
        : prevCollection === "gray"
        ? "black"
        : prevCollection === "black"
        ? "mixed"
        : "yellow";

    return collection;
  } else if (activeCollection === "festas") {
    const collection =
      prevCollection === "yellow"
        ? "gray"
        : prevCollection === "gray"
        ? "mixed"
        : "yellow";

    return collection;
  } else if (activeCollection === "noivas") {
    return "black";
  }

  return "yellow";
};
