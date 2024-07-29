type CollapsibleProps = {
  children: React.ReactNode;
  className?: string;
  collapsed?: boolean;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  className,
  children,
  collapsed,
}) => {
  return <div className={className}>{!collapsed && children}</div>;
};

export default Collapsible;
