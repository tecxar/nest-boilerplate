import { permissions } from "../permissions";

export const modules = {

    dashboard: {
        id: 1,
        title: "Dashboard",
    },
    clients: {
        id: 2,
        title: "Clients",
        permissions: [permissions.add_client, permissions.list_client]
    },
    campaings: {
        id: 3,
        title: "Campaings"
    },
    bulkMessage: {
        id: 4,
        title: "Bulk Message"
    },
    borrowers: {
        id: 5,
        title: "Borrowers"
    },
    deactiveCustomers: {
        id: 6,
        title: "Deactive Customers"
    },
    users: {
        id: 6,
        title: "Users"
    },

}