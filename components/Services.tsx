export const Services = () => {
    const services = [
        { id: '01', title: 'Web Design', description: 'Crafting visually stunning and user-friendly websites tailored to your brand\'s identity and goals.' },
        { id: '02', title: 'SEO Optimization', description: 'Enhancing your website\'s visibility and ranking on search engines through strategic keyword integration and technical optimization.' },
        { id: '03', title: 'UX/UI Design', description: 'Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.' },
        { id: '04', title: 'Digital Marketing', description: 'Strategizing and executing comprehensive digital marketing campaigns to boost your online presence and engagement.' },
        { id: '05', title: 'Content Creation', description: 'Crafting engaging and relevant content, including blogs, videos, and graphics, to connect with your audience and enhance your brand story.' },
        { id: '06', title: 'Social Media Management', description: 'Managing your social media channels to build brand awareness, engage your audience, and grow your online presence.' }
    ];

    return (
        <section className="text-white py-20 px-6 sm:px-12">
            <div className="container mx-auto grid gap-12 md:grid-cols-4">

                {/* Título de la sección */}
                <div className="md:col-span-1">
                    <h2 className="text-5xl sm:text-6xl text-purple-300 font-extrabold sticky top-20">
                        SERVICES
                    </h2>
                </div>

                {/* Lista de servicios */}
                <div className="md:col-span-3 space-y-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex items-start gap-6"
                        >
                            {/* ID del servicio */}
                            <div className="text-gray-300 font-bold text-4xl sm:text-5xl">
                                {service.id}
                            </div>

                            {/* Contenido del servicio */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-lg sm:text-xl">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
