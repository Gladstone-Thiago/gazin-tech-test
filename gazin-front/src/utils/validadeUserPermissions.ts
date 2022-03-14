import { isEmpty } from 'lodash';

type ValidadeUserPermissionsParams = {
  user: any;
  permissions?: string[];
  roles?: string[];
};

export function validadeUserPermissions({
  user,
  permissions,
  roles,
}: ValidadeUserPermissionsParams) {
  if (isEmpty(permissions) === false) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (isEmpty(roles) === false) {
    const hasAllRoles = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
