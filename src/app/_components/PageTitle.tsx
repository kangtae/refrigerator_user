interface ITestButtonProps {
  label: string;
  className?: string;
}
export default function TestButton({ label }: ITestButtonProps) {
  return <button className="px-3 py-2 border border-gray-500 rounded-md hover:bg-gray-200">{label}</button>;
}
