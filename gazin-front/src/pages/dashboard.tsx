import Component from '../components/Views/Dashboard';

export default function Index() {
  return <>{process.browser && <Component />}</>;
}
