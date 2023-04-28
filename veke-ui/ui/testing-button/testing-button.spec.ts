import { render } from "@testing-library/vue";
import { BasicTestingButton } from "./testing-button.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicTestingButton);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});
