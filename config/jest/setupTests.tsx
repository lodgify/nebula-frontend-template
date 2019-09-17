import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('@tippy.js/react', () => {
  const TippyMock = ({ children }: any) => children;
  return TippyMock;
});
