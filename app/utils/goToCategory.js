export default function goToCategory(values) {
  return values.category === "addiction" ? 
    {scrollTop: true, category: "addiction"} 
  : 
    {scrollTop: true, category: "recovery"}
}