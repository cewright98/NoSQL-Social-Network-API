const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// routes at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// routes at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought);

// routes at /api/thoughts/:userId/:thoughtId
router
  .route('/:userId/:thoughtId')
  .delete(removeThought);

// routes at /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// routes at /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;