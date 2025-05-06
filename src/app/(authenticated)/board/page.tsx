export const metadata = {
  title: 'Content Board',
  description: 'Content Board',
};

export default async function BoardPage() {
  return (
    <div className="mb-4 flex flex-col gap-2">
      {'This is authenticated content'}
    </div>
  );
}
