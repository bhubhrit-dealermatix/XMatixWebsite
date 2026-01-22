
export function Card({
  icon,
  title,
  description,
  children,
  className = "",
  iconClassName = "",
  titleClassName = "",
}) {
  return (
    <div className={`domain-card ${className}`}>
      {icon && <div className={`icon ${iconClassName}`}>{icon}</div>}
      <h3 className={titleClassName}>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}