import Dogs from "../components/search-page/Dogs";

export default {
  title: "Search-Page/Dogs",
  component: Dogs,
};

const Template = (args) => <Dogs {...args} />;

export const Friend = Template.bind({});
Friend.args = {
  name: "Steve",
  imgSrc: "blah.jpg",
};
