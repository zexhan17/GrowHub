export const admin = [
    { title: "actions", path: "/user/admin/actions" },
    { title: "donors", path: "/user/admin/donors" },
    { title: "compaigners", path: "/user/admin/compaigners" },
    { title: "transactions", path: "/user/admin/transactions" },
    { title: "messages", path: "/user/admin/messages" },
    { title: "requests", path: "/user/admin/requests" },
];

export const donor = [
    { title: "home", path: "/user/home" },
    { title: "profile", path: "/user/profile" },
    { title: "funded compaigns", path: "/public/funded" },
    { title: "non funded compaigns", path: "/public/nonfunded" },
    { title: "contact us", path: "/user/contact" },
];

export const compaigner = [
    ...donor,
    { title: "notifications", path: "/user/notification" },
]