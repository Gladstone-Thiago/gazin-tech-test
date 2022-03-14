import { permission as DashboardPermission } from '˜/components/Views/Dashboard/config/permission';
import {
  permission as AdminPermission,
  permissionCreate as AdminPermissionCreate,
  permissionEdit as AdminPermissionEdit,
  permissionDelete as AdminsPermissionDelete,
} from '˜/components/Views/Registers/Developers/config/permission';

export const permissions = {
  ADOG: {
    tag: 'ADOG',
    permissions: [
      DashboardPermission,
      AdminPermission,
      AdminPermissionCreate,
      AdminPermissionEdit,
      AdminsPermissionDelete,
    ],
  },
  USER: {
    tag: 'USER',
    permissions: [DashboardPermission],
  },
};
