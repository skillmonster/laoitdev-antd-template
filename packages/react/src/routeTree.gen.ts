/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AdminImport } from './routes/_admin'
import { Route as AdminIndexImport } from './routes/_admin/index'
import { Route as AdminRolePermissionIndexImport } from './routes/_admin/role-permission/index'
import { Route as AdminRecruitingIndexImport } from './routes/_admin/recruiting/index'
import { Route as AdminProjectIndexImport } from './routes/_admin/project/index'
import { Route as AdminProfileIndexImport } from './routes/_admin/profile/index'
import { Route as AdminLeaveIndexImport } from './routes/_admin/leave/index'
import { Route as AdminEmployeeIndexImport } from './routes/_admin/employee/index'
import { Route as AdminDepartmentIndexImport } from './routes/_admin/department/index'
import { Route as AdminDashboardIndexImport } from './routes/_admin/dashboard/index'
import { Route as AdminPositionPositionListIndexImport } from './routes/_admin/(Position)/position-list/index'
import { Route as AdminPositionPayrollTypeIndexImport } from './routes/_admin/(Position)/payroll-type/index'
import { Route as AdminManagementUsersIndexImport } from './routes/_admin/(Management)/users/index'
import { Route as AdminCheckinOutCheckinOutIndexImport } from './routes/_admin/(Checkin-Out)/checkin-out/index'
import { Route as AdminCheckinOutCheckinOutSettingIndexImport } from './routes/_admin/(Checkin-Out)/checkin-out-setting/index'
import { Route as AdminManagementUsersCreateImport } from './routes/_admin/(Management)/users/create'
import { Route as AdminManagementUsersIdViewImport } from './routes/_admin/(Management)/users/$id/view'
import { Route as AdminManagementUsersIdEditImport } from './routes/_admin/(Management)/users/$id/edit'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  id: '/_admin',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminRolePermissionIndexRoute = AdminRolePermissionIndexImport.update({
  path: '/role-permission/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminRecruitingIndexRoute = AdminRecruitingIndexImport.update({
  path: '/recruiting/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminProjectIndexRoute = AdminProjectIndexImport.update({
  path: '/project/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminProfileIndexRoute = AdminProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminLeaveIndexRoute = AdminLeaveIndexImport.update({
  path: '/leave/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminEmployeeIndexRoute = AdminEmployeeIndexImport.update({
  path: '/employee/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminDepartmentIndexRoute = AdminDepartmentIndexImport.update({
  path: '/department/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminDashboardIndexRoute = AdminDashboardIndexImport.update({
  path: '/dashboard/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminPositionPositionListIndexRoute =
  AdminPositionPositionListIndexImport.update({
    path: '/position-list/',
    getParentRoute: () => AdminRoute,
  } as any)

const AdminPositionPayrollTypeIndexRoute =
  AdminPositionPayrollTypeIndexImport.update({
    path: '/payroll-type/',
    getParentRoute: () => AdminRoute,
  } as any)

const AdminManagementUsersIndexRoute = AdminManagementUsersIndexImport.update({
  path: '/users/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminCheckinOutCheckinOutIndexRoute =
  AdminCheckinOutCheckinOutIndexImport.update({
    path: '/checkin-out/',
    getParentRoute: () => AdminRoute,
  } as any)

const AdminCheckinOutCheckinOutSettingIndexRoute =
  AdminCheckinOutCheckinOutSettingIndexImport.update({
    path: '/checkin-out-setting/',
    getParentRoute: () => AdminRoute,
  } as any)

const AdminManagementUsersCreateRoute = AdminManagementUsersCreateImport.update(
  {
    path: '/users/create',
    getParentRoute: () => AdminRoute,
  } as any,
)

const AdminManagementUsersIdViewRoute = AdminManagementUsersIdViewImport.update(
  {
    path: '/users/$id/view',
    getParentRoute: () => AdminRoute,
  } as any,
)

const AdminManagementUsersIdEditRoute = AdminManagementUsersIdEditImport.update(
  {
    path: '/users/$id/edit',
    getParentRoute: () => AdminRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_admin': {
      id: '/_admin'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_admin/': {
      id: '/_admin/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/dashboard/': {
      id: '/_admin/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AdminDashboardIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/department/': {
      id: '/_admin/department/'
      path: '/department'
      fullPath: '/department'
      preLoaderRoute: typeof AdminDepartmentIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/employee/': {
      id: '/_admin/employee/'
      path: '/employee'
      fullPath: '/employee'
      preLoaderRoute: typeof AdminEmployeeIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/leave/': {
      id: '/_admin/leave/'
      path: '/leave'
      fullPath: '/leave'
      preLoaderRoute: typeof AdminLeaveIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/profile/': {
      id: '/_admin/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AdminProfileIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/project/': {
      id: '/_admin/project/'
      path: '/project'
      fullPath: '/project'
      preLoaderRoute: typeof AdminProjectIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/recruiting/': {
      id: '/_admin/recruiting/'
      path: '/recruiting'
      fullPath: '/recruiting'
      preLoaderRoute: typeof AdminRecruitingIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/role-permission/': {
      id: '/_admin/role-permission/'
      path: '/role-permission'
      fullPath: '/role-permission'
      preLoaderRoute: typeof AdminRolePermissionIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Management)/users/create': {
      id: '/_admin/users/create'
      path: '/users/create'
      fullPath: '/users/create'
      preLoaderRoute: typeof AdminManagementUsersCreateImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Checkin-Out)/checkin-out-setting/': {
      id: '/_admin/checkin-out-setting/'
      path: '/checkin-out-setting'
      fullPath: '/checkin-out-setting'
      preLoaderRoute: typeof AdminCheckinOutCheckinOutSettingIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Checkin-Out)/checkin-out/': {
      id: '/_admin/checkin-out/'
      path: '/checkin-out'
      fullPath: '/checkin-out'
      preLoaderRoute: typeof AdminCheckinOutCheckinOutIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Management)/users/': {
      id: '/_admin/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AdminManagementUsersIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Position)/payroll-type/': {
      id: '/_admin/payroll-type/'
      path: '/payroll-type'
      fullPath: '/payroll-type'
      preLoaderRoute: typeof AdminPositionPayrollTypeIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Position)/position-list/': {
      id: '/_admin/position-list/'
      path: '/position-list'
      fullPath: '/position-list'
      preLoaderRoute: typeof AdminPositionPositionListIndexImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Management)/users/$id/edit': {
      id: '/_admin/users/$id/edit'
      path: '/users/$id/edit'
      fullPath: '/users/$id/edit'
      preLoaderRoute: typeof AdminManagementUsersIdEditImport
      parentRoute: typeof AdminImport
    }
    '/_admin/(Management)/users/$id/view': {
      id: '/_admin/users/$id/view'
      path: '/users/$id/view'
      fullPath: '/users/$id/view'
      preLoaderRoute: typeof AdminManagementUsersIdViewImport
      parentRoute: typeof AdminImport
    }
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminIndexRoute: typeof AdminIndexRoute
  AdminDashboardIndexRoute: typeof AdminDashboardIndexRoute
  AdminDepartmentIndexRoute: typeof AdminDepartmentIndexRoute
  AdminEmployeeIndexRoute: typeof AdminEmployeeIndexRoute
  AdminLeaveIndexRoute: typeof AdminLeaveIndexRoute
  AdminProfileIndexRoute: typeof AdminProfileIndexRoute
  AdminProjectIndexRoute: typeof AdminProjectIndexRoute
  AdminRecruitingIndexRoute: typeof AdminRecruitingIndexRoute
  AdminRolePermissionIndexRoute: typeof AdminRolePermissionIndexRoute
  AdminManagementUsersCreateRoute: typeof AdminManagementUsersCreateRoute
  AdminCheckinOutCheckinOutSettingIndexRoute: typeof AdminCheckinOutCheckinOutSettingIndexRoute
  AdminCheckinOutCheckinOutIndexRoute: typeof AdminCheckinOutCheckinOutIndexRoute
  AdminManagementUsersIndexRoute: typeof AdminManagementUsersIndexRoute
  AdminPositionPayrollTypeIndexRoute: typeof AdminPositionPayrollTypeIndexRoute
  AdminPositionPositionListIndexRoute: typeof AdminPositionPositionListIndexRoute
  AdminManagementUsersIdEditRoute: typeof AdminManagementUsersIdEditRoute
  AdminManagementUsersIdViewRoute: typeof AdminManagementUsersIdViewRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminIndexRoute: AdminIndexRoute,
  AdminDashboardIndexRoute: AdminDashboardIndexRoute,
  AdminDepartmentIndexRoute: AdminDepartmentIndexRoute,
  AdminEmployeeIndexRoute: AdminEmployeeIndexRoute,
  AdminLeaveIndexRoute: AdminLeaveIndexRoute,
  AdminProfileIndexRoute: AdminProfileIndexRoute,
  AdminProjectIndexRoute: AdminProjectIndexRoute,
  AdminRecruitingIndexRoute: AdminRecruitingIndexRoute,
  AdminRolePermissionIndexRoute: AdminRolePermissionIndexRoute,
  AdminManagementUsersCreateRoute: AdminManagementUsersCreateRoute,
  AdminCheckinOutCheckinOutSettingIndexRoute:
    AdminCheckinOutCheckinOutSettingIndexRoute,
  AdminCheckinOutCheckinOutIndexRoute: AdminCheckinOutCheckinOutIndexRoute,
  AdminManagementUsersIndexRoute: AdminManagementUsersIndexRoute,
  AdminPositionPayrollTypeIndexRoute: AdminPositionPayrollTypeIndexRoute,
  AdminPositionPositionListIndexRoute: AdminPositionPositionListIndexRoute,
  AdminManagementUsersIdEditRoute: AdminManagementUsersIdEditRoute,
  AdminManagementUsersIdViewRoute: AdminManagementUsersIdViewRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface FileRoutesByFullPath {
  '': typeof AdminRouteWithChildren
  '/login': typeof LoginRoute
  '/': typeof AdminIndexRoute
  '/dashboard': typeof AdminDashboardIndexRoute
  '/department': typeof AdminDepartmentIndexRoute
  '/employee': typeof AdminEmployeeIndexRoute
  '/leave': typeof AdminLeaveIndexRoute
  '/profile': typeof AdminProfileIndexRoute
  '/project': typeof AdminProjectIndexRoute
  '/recruiting': typeof AdminRecruitingIndexRoute
  '/role-permission': typeof AdminRolePermissionIndexRoute
  '/users/create': typeof AdminManagementUsersCreateRoute
  '/checkin-out-setting': typeof AdminCheckinOutCheckinOutSettingIndexRoute
  '/checkin-out': typeof AdminCheckinOutCheckinOutIndexRoute
  '/users': typeof AdminManagementUsersIndexRoute
  '/payroll-type': typeof AdminPositionPayrollTypeIndexRoute
  '/position-list': typeof AdminPositionPositionListIndexRoute
  '/users/$id/edit': typeof AdminManagementUsersIdEditRoute
  '/users/$id/view': typeof AdminManagementUsersIdViewRoute
}

interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/': typeof AdminIndexRoute
  '/dashboard': typeof AdminDashboardIndexRoute
  '/department': typeof AdminDepartmentIndexRoute
  '/employee': typeof AdminEmployeeIndexRoute
  '/leave': typeof AdminLeaveIndexRoute
  '/profile': typeof AdminProfileIndexRoute
  '/project': typeof AdminProjectIndexRoute
  '/recruiting': typeof AdminRecruitingIndexRoute
  '/role-permission': typeof AdminRolePermissionIndexRoute
  '/users/create': typeof AdminManagementUsersCreateRoute
  '/checkin-out-setting': typeof AdminCheckinOutCheckinOutSettingIndexRoute
  '/checkin-out': typeof AdminCheckinOutCheckinOutIndexRoute
  '/users': typeof AdminManagementUsersIndexRoute
  '/payroll-type': typeof AdminPositionPayrollTypeIndexRoute
  '/position-list': typeof AdminPositionPositionListIndexRoute
  '/users/$id/edit': typeof AdminManagementUsersIdEditRoute
  '/users/$id/view': typeof AdminManagementUsersIdViewRoute
}

interface FileRoutesById {
  '/_admin': typeof AdminRouteWithChildren
  '/login': typeof LoginRoute
  '/_admin/': typeof AdminIndexRoute
  '/_admin/dashboard/': typeof AdminDashboardIndexRoute
  '/_admin/department/': typeof AdminDepartmentIndexRoute
  '/_admin/employee/': typeof AdminEmployeeIndexRoute
  '/_admin/leave/': typeof AdminLeaveIndexRoute
  '/_admin/profile/': typeof AdminProfileIndexRoute
  '/_admin/project/': typeof AdminProjectIndexRoute
  '/_admin/recruiting/': typeof AdminRecruitingIndexRoute
  '/_admin/role-permission/': typeof AdminRolePermissionIndexRoute
  '/_admin/users/create': typeof AdminManagementUsersCreateRoute
  '/_admin/checkin-out-setting/': typeof AdminCheckinOutCheckinOutSettingIndexRoute
  '/_admin/checkin-out/': typeof AdminCheckinOutCheckinOutIndexRoute
  '/_admin/users/': typeof AdminManagementUsersIndexRoute
  '/_admin/payroll-type/': typeof AdminPositionPayrollTypeIndexRoute
  '/_admin/position-list/': typeof AdminPositionPositionListIndexRoute
  '/_admin/users/$id/edit': typeof AdminManagementUsersIdEditRoute
  '/_admin/users/$id/view': typeof AdminManagementUsersIdViewRoute
}

interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/'
    | '/dashboard'
    | '/department'
    | '/employee'
    | '/leave'
    | '/profile'
    | '/project'
    | '/recruiting'
    | '/role-permission'
    | '/users/create'
    | '/checkin-out-setting'
    | '/checkin-out'
    | '/users'
    | '/payroll-type'
    | '/position-list'
    | '/users/$id/edit'
    | '/users/$id/view'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/'
    | '/dashboard'
    | '/department'
    | '/employee'
    | '/leave'
    | '/profile'
    | '/project'
    | '/recruiting'
    | '/role-permission'
    | '/users/create'
    | '/checkin-out-setting'
    | '/checkin-out'
    | '/users'
    | '/payroll-type'
    | '/position-list'
    | '/users/$id/edit'
    | '/users/$id/view'
  id:
    | '/_admin'
    | '/login'
    | '/_admin/'
    | '/_admin/dashboard/'
    | '/_admin/department/'
    | '/_admin/employee/'
    | '/_admin/leave/'
    | '/_admin/profile/'
    | '/_admin/project/'
    | '/_admin/recruiting/'
    | '/_admin/role-permission/'
    | '/_admin/users/create'
    | '/_admin/checkin-out-setting/'
    | '/_admin/checkin-out/'
    | '/_admin/users/'
    | '/_admin/payroll-type/'
    | '/_admin/position-list/'
    | '/_admin/users/$id/edit'
    | '/_admin/users/$id/view'
  fileRoutesById: FileRoutesById
}

interface RootRouteChildren {
  AdminRoute: typeof AdminRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  AdminRoute: AdminRouteWithChildren,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_admin",
        "/login"
      ]
    },
    "/_admin": {
      "filePath": "_admin.tsx",
      "children": [
        "/_admin/",
        "/_admin/dashboard/",
        "/_admin/department/",
        "/_admin/employee/",
        "/_admin/leave/",
        "/_admin/profile/",
        "/_admin/project/",
        "/_admin/recruiting/",
        "/_admin/role-permission/",
        "/_admin/users/create",
        "/_admin/checkin-out-setting/",
        "/_admin/checkin-out/",
        "/_admin/users/",
        "/_admin/payroll-type/",
        "/_admin/position-list/",
        "/_admin/users/$id/edit",
        "/_admin/users/$id/view"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_admin/": {
      "filePath": "_admin/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/dashboard/": {
      "filePath": "_admin/dashboard/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/department/": {
      "filePath": "_admin/department/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/employee/": {
      "filePath": "_admin/employee/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/leave/": {
      "filePath": "_admin/leave/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/profile/": {
      "filePath": "_admin/profile/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/project/": {
      "filePath": "_admin/project/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/recruiting/": {
      "filePath": "_admin/recruiting/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/role-permission/": {
      "filePath": "_admin/role-permission/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/users/create": {
      "filePath": "_admin/(Management)/users/create.tsx",
      "parent": "/_admin"
    },
    "/_admin/checkin-out-setting/": {
      "filePath": "_admin/(Checkin-Out)/checkin-out-setting/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/checkin-out/": {
      "filePath": "_admin/(Checkin-Out)/checkin-out/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/users/": {
      "filePath": "_admin/(Management)/users/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/payroll-type/": {
      "filePath": "_admin/(Position)/payroll-type/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/position-list/": {
      "filePath": "_admin/(Position)/position-list/index.tsx",
      "parent": "/_admin"
    },
    "/_admin/users/$id/edit": {
      "filePath": "_admin/(Management)/users/$id/edit.tsx",
      "parent": "/_admin"
    },
    "/_admin/users/$id/view": {
      "filePath": "_admin/(Management)/users/$id/view.tsx",
      "parent": "/_admin"
    }
  }
}
ROUTE_MANIFEST_END */
