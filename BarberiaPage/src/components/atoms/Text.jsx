export default function Text({ children, variant = 'p', className, id }) {
  const Tag = variant;
  return <Tag className={className} id={id}>{children}</Tag>;
}