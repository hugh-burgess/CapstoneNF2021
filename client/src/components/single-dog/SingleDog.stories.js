import SingleDog from "./SingleDog";

export default {
  title: "single-dog/SingleDog",
  component: SingleDog,
};

const Template = (args) => <SingleDog {...args} />;

export const Dog = Template.bind({});
Dog.args = {
  stats: ["loves scratches", "hates cats"],
  imgSrc: "blah.jpg",
  bio: "Hi, I love walks in the morning and going to the beach",
  rating: Number,
  review: "not the nicest of dogs",
  isStarred: false,
};
