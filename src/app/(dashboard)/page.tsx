import { Button } from '@/components/atoms/Button';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default async function Dashboard() {
  return (
    <div>
      <Button variant="default" size="default">
        {'Default Button'}
      </Button>
    </div>
  );
}
