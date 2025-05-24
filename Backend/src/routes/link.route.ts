import { Hono } from 'hono';
import * as linkController from '../controllers/link.controller.ts';

const linkRouter = new Hono();

linkRouter.post('/', linkController.createLink);
linkRouter.get('/user/:userId', linkController.getLinksByUser);
linkRouter.post('/add-to-playlist', linkController.addLinkToPlaylist);
linkRouter.put('/:linkId', linkController.editLink);
linkRouter.put('/pin/:linkId', linkController.pinLink);
linkRouter.delete('/:linkId', linkController.deleteLink);
linkRouter.post('/increment-click/:linkId', linkController.incrementClickCount);
//taka added these

export { linkRouter };
