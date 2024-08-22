export const getNextCollection = (prevCollection: string) => {
    const collection =
      prevCollection === "yellow"
        ? "gray"
        : prevCollection === "gray"
        ? "black"
        : prevCollection === "black"
        ? "mixed"
        : "yellow";

    return collection;
  };