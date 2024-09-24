export const PaltSettingsContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <span aria-controls="typesetting">{children}</span>;
};
