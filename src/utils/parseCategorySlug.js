export const parseCategorySlug = (slug) => {
  const slugArr = slug.split("-");
  const formattedSlugArr = slugArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return formattedSlugArr.join(" ");
};
