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
  const variants = {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    cardLeft: {
      initial: {
        opacity: 0,
      },

      animate: {
        opacity: 1,
      },
    },
    cardRight: {
      initial: {
        opacity: 0,
      },

      animate: {
        opacity: 1,
      },
    },
  };

  const StaggeredList = () => {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants.container}
      >
        <Clouds />
      </motion.div>
    );
  };
  const Clouds = () =>
    friends.map((friend, index) => {
      if (index % 2 === 0) {
        return (
          <motion.div
            variants={variants.cardRight}
            transition={{
              duration: 0.3,
              ease: [0.87, 0, 0.13, 1],
            }}
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
            variants={variants.cardLeft}
            transition={{
              duration: 0.3,
              ease: [0.87, 0, 0.13, 1],
            }}
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
        variants={variants}
      >
        <StaggeredList />
      </motion.div>
    </AnimatePresence>
  );
}
