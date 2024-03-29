import BackButton from "@/components/BackButton";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
