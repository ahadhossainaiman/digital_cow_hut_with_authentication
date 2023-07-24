import express from 'express';
import { AuthController } from '../auth/auth.controller';
import { AdminController } from './admin.controller';
import validateRequest from '../../middlewares/validationRequest';
import { AuthValidation } from '../auth/auth.validation';

const router = express.Router();

router.post('/create-admin', AdminController.createAdmin);

router.get('/:id', AdminController.getSingleAdmin);
router.delete('/:id', AdminController.deleteAdmin);
router.patch('/:id', AdminController.updateAdmin);
router.get('/', AdminController.getAllAdmins);

//Admin login
router.post(
    '/login',
    validateRequest(AuthValidation.loginZodSchema),
    AuthController.logInAdmin
);


router.post(
    '/refresh-token',
    validateRequest(AuthValidation.refreshTokenZodSchema),
    AuthController.refreshTokenForAdmin
);


export const AdminRoutes = router;