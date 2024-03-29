export default function StudioDetailLayout({
  images,
  children,
}: {
  images: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-1">{images}</div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}
