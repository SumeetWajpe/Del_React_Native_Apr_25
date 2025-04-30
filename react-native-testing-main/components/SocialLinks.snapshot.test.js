import renderer from "react-test-renderer";
import SocialLinks from "./SocialLinks";
test("Link renders correctly", () => {
  const tree = renderer
    .create(
      <SocialLinks
        type="instagram"
        label="John Doe's Instagram"
        link="https://www.instagram.com"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
