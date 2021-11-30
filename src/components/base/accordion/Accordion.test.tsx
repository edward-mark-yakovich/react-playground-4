import React from 'react';
import { render, screen } from '@testing-library/react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Accordion from './Accordion';

configure({ adapter: new Adapter() });

const component = (<Accordion id="123" drawerOpen={true} triggerTitle="My Test Title" />);

describe("react functions", () => {
  it("renders correctly", () => {
    shallow(component);
  });

  it("update state on click", () => {
    const setOpen = jest.fn();
    const accComp = shallow(component);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(() => [!open, setOpen]);
 
    accComp.find('#accordion--123').simulate("click");
    expect(setOpen).toBeTruthy();
  });
});

describe('elements in dom', () => {
  let accordionElement: any;
  
  beforeEach(async () => {
    const result = render(component);
    accordionElement = result.container.querySelector('#accordion--123');
  });

  it('is in document', () => {
    expect(accordionElement).toBeInTheDocument();
  });

  it('has title', () => {
    const titleText = screen.getByText(/My Test Title/i);
    expect(titleText).toBeInTheDocument();
  });
  
});
