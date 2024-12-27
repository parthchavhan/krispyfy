type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]
export const workProcessData: DataType = [
    {
        id: 1,
        title: "We Write",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-pencil-line",
        description: "Our expert scriptwriters craft compelling, custom scripts tailored to your brand, ensuring your message resonates with your audience.",
    },
    {
        id: 2,
        title: "We Shoot",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-camera-line",
        description: "We create high-quality, engaging videos that capture attention and drive engagement on social media platforms like Instagram and beyond.",
    },
    {
        id: 3,
        title: "You Grow",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-bar-chart-line",
        description: "With our custom content, your brand gains more visibility, increasing reach, engagement, and ultimately helping your business grow.",
    },
];
