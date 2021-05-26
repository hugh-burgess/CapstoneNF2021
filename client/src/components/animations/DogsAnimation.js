import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Dogs from "../search-page/Dogs";

export default function DogsAnimation({ filter }) {
  const variants = {
    container: {
      animate: {
        transition: {
          staggerChildren: 1,
        },
      },
    },
    card: {
      initial: {
        opacity: 0,
        y: 50,
      },

      animate: {
        opacity: 1,
        y: 0,
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
        <Card />;
      </motion.div>
    );
  };

  const Card = () => {
    return (
      <motion.div variants={variants.card}>
        <Dogs filter={filter} />
      </motion.div>
    );
  };

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
