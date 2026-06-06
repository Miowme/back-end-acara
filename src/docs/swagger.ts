import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi API Acara",
        description: "Dokumentasi API Web Acara",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server",
        },
        {
            url: "https://back-end-acara-dun.vercel.app/api",
            description: "Deploy Server",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            LoginRequest: {
                identifier: "williamsusanto",
                password: "master123",
            },
            RegisterRequest: {
                fullName: "Shamizu Yomimaru",
                username: "shamizu2026",
                email: "shamizu@yopmail.com",
                password: "Abc123",
                confirmPassword: "Abc123",
            },
            ActivationRequest: {
                code: "abcdef",
            },
            CreateCategoryRequest: {
                name: "",
                description: "",
                icon: "",
            },
            CreateEventRequest: {
                name: "",
                banner: "fileUrl",
                category: "category objectID",
                description: "",
                startDate: "yyyy-mm-dd hh:mm:ss",
                endDate: "yyyy-mm-dd hh:mm:ss",
                location: {
                    region: "region id",
                    coordinates: [0, 0],
                    address: "",
                },
                isOnline: false,
                isFeatured: false,
                isPublish: false,
            },
            RemoveMediaRequest: {
                fileUrl: "",
            }
        },
    },
};
const outputFile = "./swagger_output.json";
const endpointFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0"})(outputFile, endpointFiles, doc);