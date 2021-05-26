import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import useFriends from "../../hooks/useFriends";
import CloudFormationsRight from "../../utils/CloudFormationsRight";
import CloudFormationsLeft from "../../utils/CloudFormationsLeft";
import FakeFrens from "../../utils/FakeFrens";
import CloudRight from "../friends-page/CloudRight";
import CloudLeft from "../friends-page/CloudLeft";

export default function FriendCloudAnimation() {
  const [friends] = useFriends();
  const cloud = {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    cardLeft: {
      initial: {
        opacity: 0,
        x: 10,
      },

      animate: {
        opacity: 1,
        x: 0,
      },
    },
    cardRight: {
      initial: {
        opacity: 0,
        x: -10,
      },

      animate: {
        opacity: 1,
        x: 0,
      },
    },
  };

  const StaggeredList = () => {
    return (
      <motion.div initial="initial" animate="animate" cloud={cloud.container}>
        <Clouds />
      </motion.div>
    );
  };
  const Clouds = () =>
    friends.map((friend, index) => {
      if (index % 2 === 0) {
        return (
          <motion.div
            variants={cloud.cardRight}
            transition={{ type: "spring", restSpeed: 0.5 }}
          >
            <CloudRight
              friend={friend}
              id={friend.id}
              CloudFormationsRight={CloudFormationsRight()}
              FakeFrens={FakeFrens()}
            />
          </motion.div>
        );
      } else {
        return (
          <motion.div
            variants={cloud.cardLeft}
            transition={{ type: "spring", restSpeed: 0.5 }}
          >
            <CloudLeft
              friend={friend}
              id={friend.id}
              CloudFormationsLeft={CloudFormationsLeft()}
              FakeFrens={FakeFrens()}
            />
          </motion.div>
        );
      }
    });

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, y: -50 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        variants={cloud}
      >
        <StaggeredList />
      </motion.div>
    </AnimatePresence>
  );
}
