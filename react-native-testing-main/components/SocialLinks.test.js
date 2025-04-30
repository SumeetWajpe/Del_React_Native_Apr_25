import { render, fireEvent } from "@testing-library/react-native";
import SocialLinks from "./SocialLinks";
import { Linking } from "react-native";

describe("tests for Social Links Component", () => {
  it("should render the label of Social Link", () => {
    const { getByText } = render(
      <SocialLinks
        type="twitter"
        label="John Doe's Twitter"
        link="https://twitter.com"
      />,
    );

    const label = getByText("John Doe's Twitter");
    expect(label).toBeTruthy();
  });
  it("should render the icon of Social Link", () => {
    const { getByRole } = render(
      <SocialLinks
        type="twitter"
        label="John Doe's Twitter"
        link="https://twitter.com"
      />,
    );

    const icon = getByRole("image");
    expect(icon).toBeTruthy();
  });
  it("should open the instagram link (in browser) when the instagram link is pressed", () => {
    const { getByText } = render(
      <SocialLinks
        type="instagram"
        label="John Doe's Instagram"
        link="https://www.instagram.com"
      />,
    );

    const label = getByText("John Doe's Instagram");
    fireEvent.press(label);
    expect(Linking.openURL).toHaveBeenCalledWith("https://www.instagram.com");
  });
});
