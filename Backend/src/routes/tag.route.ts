import { Hono } from 'hono';
import * as tagController from '../controllers/tag.controller.ts';

const tagRouter = new Hono();

// POST /tags – Create or get existing tag
tagRouter.post('/', tagController.createTag);

// DELETE /tags/:tagId – Delete a tag by ID
tagRouter.delete('/:tagId', tagController.deleteTag);

export default tagRouter;
