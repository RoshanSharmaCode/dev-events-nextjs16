export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit US 2026",
        slug: "react-summit-us-2026",
        location: "San Francisco, CA, USA",
        date: "2026-10-16",
        time: "09:00 AM",
    },

    {
        image: "/images/event2.png",
        title: "KubeCon + CloudNativeCon North America 2026",
        slug: "kubecon-cloudnativecon-north-america-2026",
        location: "Salt Lake City, Utah, USA",
        date: "2026-11-09",
        time: "09:00 AM",
    },

    {
        image: "/images/event3.png",
        title: "GitHub Universe 2026",
        slug: "github-universe-2026",
        location: "San Francisco, CA, USA",
        date: "2026-10-29",
        time: "09:00 AM",
    },

    {
        image: "/images/event4.png",
        title: "AWS re:Invent 2026",
        slug: "aws-reinvent-2026",
        location: "Las Vegas, NV, USA",
        date: "2026-11-30",
        time: "09:00 AM",
    },

    {
        image: "/images/event5.png",
        title: "KCD Gujarat 2026",
        slug: "kcd-gujarat-2026",
        location: "Ahmedabad, Gujarat, India",
        date: "2026-09-19",
        time: "09:00 AM",
    },
];