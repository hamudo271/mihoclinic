import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const events = [
    {
        id: 1,
        image: 'https://cellting.com/theme/cellting/images/img_event01_cheongdam.jpg',
        title: '리즈셀 리프팅',
        link: '#events/1'
    },
    {
        id: 2,
        image: 'https://cellting.com/theme/cellting/images/img_event02_cheongdam.jpg',
        title: '리즈셀 CEO Edition',
        link: '#events/2'
    },
    {
        id: 3,
        image: 'https://cellting.com/theme/cellting/images/img_event03_cheongdam.jpg',
        title: '버츄 RF 리프팅',
        link: '#events/3'
    },
    {
        id: 4,
        image: 'https://cellting.com/theme/cellting/images/img_event04_cheongdam.jpg',
        title: '셀(Cell)트라콜',
        link: '#events/4'
    },
    {
        id: 5,
        image: 'https://cellting.com/theme/cellting/images/img_event05_cheongdam.jpg',
        title: '온다 리프팅',
        link: '#events/5'
    }
];

export default function NewEventSection() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-4">
                        <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-4">
                            Miho's<br />Event
                        </h2>
                        <p className="text-gray-600 text-base mb-8">
                            지금 진행중인 특별한<br />이벤트를 확인해보세요.
                        </p>
                        <a
                            href="#events"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                        >
                            view more
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    {/* Event Slider */}
                    <div className="lg:col-span-8">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            centeredSlides={false}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: '.event-pagination',
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 24,
                                },
                            }}
                            className="event-swiper"
                        >
                            {events.map((event) => (
                                <SwiperSlide key={event.id}>
                                    <a href={event.link} className="block group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination */}
                        <div className="event-pagination flex justify-center gap-2 mt-6"></div>
                    </div>
                </div>
            </div>

            <style>{`
        .event-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }
        .event-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #4E0080;
        }
      `}</style>
        </section>
    );
}
