import { useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Projects = () => {

    const project = [

    ]


    const [isOpen , setOpen] = useState(false);

    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }


    return (
        <section id="projects" className="w-[80%] py-16 mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Мои проекты</h2>

            <Carousel opts={{ align: "center" }}>
                <CarouselContent>
                    <CarouselItem className="basis-1/3 px-2">
                        <div className="bg-card border border-border rounded-lg p-4 shadow-md space-y-2">
                            <div className="w-full aspect-video bg-muted rounded-md overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/400x225?text=Project+Preview"
                                    alt="Project placeholder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">Project One</h3>
                            <p className="text-sm text-muted-foreground">
                                Краткое описание проекта. Что делает, зачем, для кого.
                            </p>
                            <p className="text-xs">Stack: React, Yandex API, Tailwind</p>
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                            >
                                Смотреть →
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 px-2">
                        <div className="bg-card border border-border rounded-lg p-4 shadow-md space-y-2">

                            <div className="w-full aspect-video bg-muted rounded-md overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/400x225?text=Project+Preview"
                                    alt="Project placeholder"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-lg font-semibold">Project Two</h3>
                            <p className="text-sm text-muted-foreground">
                                Другое описание проекта. Возможно pet-проект.
                            </p>
                            <p className="text-xs">Stack: React, PostgreSQL , Prisma , Node JS</p>
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                            >
                                Смотреть →
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 px-2">
                        <div className="bg-card border border-border rounded-lg p-4 shadow-md space-y-2">
                            <div className="w-full aspect-video bg-muted rounded-md overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/400x225?text=Project+Preview"
                                    alt="Project placeholder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">Project Two</h3>
                            <p className="text-sm text-muted-foreground">
                                Другое описание проекта. Возможно pet-проект.
                            </p>
                            <p className="text-xs">Stack: Next.js, Prisma</p>
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                            >
                                Смотреть →
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 px-2">
                        <div className="bg-card border border-border rounded-lg p-4 shadow-md space-y-2">
                            <div className="w-full aspect-video bg-muted rounded-md overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/400x225?text=Project+Preview"
                                    alt="Project placeholder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">Project Three</h3>
                            <p className="text-sm text-muted-foreground">
                                Ещё один проект. Акцент на визуале или интересной логике.
                            </p>
                            <p className="text-xs">Stack: React, Zustand, Stripe</p>
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                            >
                                Смотреть →
                            </a>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default Projects
