// components
import JoinForm from "./_components/JoinForm";

export default function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-24 gap-4">
      <h2 className="font-bold text-2xl mb-2">회원가입</h2>
      <JoinForm />
    </div>
  );
}
